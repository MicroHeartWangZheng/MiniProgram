var e = require("../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../@babel/runtime/helpers/createClass"),
  t = require("./code/code.js"),
  l = require("./utils/logutil"),
  a = "proxy_",
  i = function () {
    function i(n) {
      e(this, i), this.tag = n, this.p = null, this.queue = []
    }
    return n(i, [{
      key: "_enqueue",
      value: function (e) {
        this.queue.push(e)
      }
    }, {
      key: "_dequeue",
      value: function () {
        return this.queue.shift()
      }
    }, {
      key: "handleBizStartCallback",
      value: function (e, n) {
        try {
          null != e && e.handleBizStart(n)
        } catch (e) {
          l.error(a + this.tag + " handleBizStartCallback: ", e)
        }
      }
    }, {
      key: "handleBizEndCallback",
      value: function (e, n, t) {
        try {
          null != n && n.handleBizEnd(e, t)
        } catch (e) {
          l.error(a + this.tag + " handleBizEndCallback: ", e)
        }
      }
    }, {
      key: "_build",
      value: function (e) {
        var n = this;
        if (!e) return null;
        var i = e.callback,
          r = e.bizImplement,
          u = e.statisHandle,
          s = e.timeout;
        return new Promise((function (e) {
          n.handleBizStartCallback(r, u);
          try {
            (new Date).getTime();
            var o = setTimeout((function () {
              null != r && r.handleTimeout((function (n) {
                e({
                  bizImpl: r,
                  sHandle: u,
                  cb: i,
                  resp: n
                })
              }), u)
            }), s);
            null != r && r.handleBiz((function (n) {
              clearTimeout(o), e({
                bizImpl: r,
                sHandle: u,
                cb: i,
                resp: n
              })
            }), (function () {
              clearTimeout(o)
            }), u)
          } catch (s) {
            l.error(a + n.tag + " proxyHandle_Promise: ", s);
            var c = n.tag + " biz error";
            s instanceof Error && (l.error(a + n.tag + " proxyHandle_Promise_message: ", s.message), c = c + ": " + s.message);
            var d = {
              ret: t.ERROR_BIZ_CRASH,
              err: c
            };
            r.handleError && (d = r.handleError(c, u)), e({
              bizImpl: r,
              sHandle: u,
              cb: i,
              resp: d
            })
          }
        }))
      }
    }, {
      key: "_doPromise",
      value: function (e) {
        var n = this;
        e && e instanceof Promise && e.then((function (e) {
          n.p = null, n.handleBizEndCallback(e, e.bizImpl, e.sHandle);
          var t = e.cb;
          null != t && t(e.resp), n._handleNext()
        }))
      }
    }, {
      key: "_handleNext",
      value: function () {
        if (null == this.p) {
          var e = this._dequeue();
          this.p = this._build(e), this._doPromise(this.p)
        }
      }
    }, {
      key: "proxyHandle",
      value: function (e, n) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          timeout: 1e4,
          statisHandle: null
        };
        this._enqueue({
          callback: e,
          bizImplement: n,
          timeout: t.timeout || 1e4,
          statisHandle: t.statisHandle || null
        }), this._handleNext()
      }
    }]), i
  }();
module.exports = {
  buildBizImplement: function () {
    return {
      handleBizStart: function (e) {},
      handleBiz: function (e, n, t) {},
      handleTimeout: function (e, n) {},
      handleError: function (e, n) {},
      handleBizEnd: function (e, n) {}
    }
  },
  Handle: i
};