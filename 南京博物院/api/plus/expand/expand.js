var t, e = require("../gw/gwnet.js"),
  n = require("../../comm/utils/util"),
  s = require("../comm/rcode"),
  o = require("../statis/eventid.js"),
  i = require("../comm/model/urlmodel"),
  r = require("../../core/statis/statisProxy");
require("../../comm/utils/logutil.js");

function d(e, i) {
  return "post" == e.method ? function (e, i) {
    return new Promise((function (d) {
      r.doStatisDefaultEvent(i, o.EId_UId_DN_Start, s.commCode.SUCCESS, "doPost start");
      var a = n.isEmpty(e.content_type) ? "" : {
          "Content-type": "application/json"
        },
        u = JSON.parse(e.body);
      t.netWork.request(u, (function (t) {
        var n = t;
        r.doStatisTimeEvent(i, o.EId_UId_DN_End, s.commCode.SUCCESS, "doPost end"), d({
          action_session: e.action_session,
          data: JSON.stringify(n)
        })
      }), (function (t) {
        var n = JSON.stringify(t);
        r.doStatisTimeEvent(i, o.EId_UId_DN_End, s.commCode.ERROR_REQUEST_ERR, "doPost end: " + n), d({
          action_session: e.action_session,
          err_msg: n
        })
      }), e.url, a, e.method)
    }))
  }(e, i) : "jsonp" == e.method ? function (e, n) {
    return new Promise((function (i) {
      r.doStatisDefaultEvent(n, o.EId_UId_DN_Start, s.commCode.SUCCESS, "doJsonp start"), t.netWork.request({}, (function (t) {
        var d = t,
          a = "";
        if ("string" == typeof d) {
          var u = d.substring(d.indexOf("(") + 1, d.lastIndexOf(")"));
          a = null == u || null == u || u.length <= 0 ? "" : u
        } else a = JSON.stringify(d);
        r.doStatisTimeEvent(n, o.EId_UId_DN_End, s.commCode.SUCCESS, "doJsonp end"), i({
          action_session: e.action_session,
          data: a
        })
      }), (function (t) {
        var s = JSON.stringify(t);
        r.doStatisTimeEvent(n, o.EId_UId_DN_End, t.ret, "doJsonp end: " + s), i({
          action_session: e.action_session,
          err_msg: s
        })
      }), e.url, "", "get")
    }))
  }(e, i) : "trans" == e.method ? function (t) {
    return new Promise((function (e) {
      e({
        action_session: t.action_session
      })
    }))
  }(e) : void 0
}

function a(n, a, _, c) {
  return new Promise((function (m) {
    d(n, c).then((function (n) {
      if (n.data) {
        r.doStatisDefaultEvent(c, o.EId_UId_GUrl_Start, s.commCode.SUCCESS, "regurl");
        var d = {
            action_session: n.action_session,
            data: n.data
          },
          l = i.b51181f33(a, _, t.uuid, r.getReqId(c), t.config, [d]);
        e.getGwUrl(t.netWork, t.config, l).then((function (t) {
          if (0 != t.ret) {
            var e = {
              ret: t.ret,
              msg: "from server err"
            };
            r.doStatisTimeEvent(c, o.EId_UId_GUrl_End, e.ret, "regurl"), m({
              action_session: n.action_session,
              err_msg: JSON.stringify(e)
            })
          } else {
            r.doStatisTimeEvent(c, o.EId_UId_GUrl_End, t.ret, "regurl");
            var s = u(t.actions, a, _, c);
            Promise.all(s).then((function (t) {
              m(t)
            }))
          }
        })).catch((function (t) {
          var e = JSON.stringify(t);
          r.doStatisTimeEvent(c, o.EId_UId_GUrl_End, s.ERROR_GET_URL, "regurl:" + e), m({
            action_session: n.action_session,
            err_msg: e
          })
        }))
      } else m({
        action_session: n.action_session,
        err_msg: n.err_msg
      })
    }))
  }))
}

function u(t, e, n, s) {
  var o = [];
  for (var i in t) {
    var r = t[i];
    r.continue ? o.push(a(r, e, n, s)) : o.push(d(r, s))
  }
  return o
}
module.exports = {
  initExpand: function (e) {
    t = e
  },
  getExpandToken: function (d, a, _) {
    return new Promise((function (c) {
      r.doStatisDefaultEvent(_, o.EId_UId_GUrl_Start, s.commCode.SUCCESS, "first gurl");
      var m = i.b51181f33(d, a, t.uuid, r.getReqId(_), t.config);
      e.getGwUrl(t.netWork, t.config, m).then((function (t) {
        if (0 != t.ret) {
          var e = s.commCode.castMaskCode(t.ret);
          r.doStatisTimeEvent(_, o.EId_UId_GUrl_End, e, "first gurl"), c({
            result: e
          })
        } else {
          r.doStatisTimeEvent(_, o.EId_UId_GUrl_End, t.ret, "first gurl");
          var i = u(t.actions, d, a, _);
          Promise.all(i).then((function (e) {
            var s = n.toArray(e),
              o = {
                result: t.ret,
                action_results: s,
                session: t.session
              };
            c(o)
          }))
        }
      })).catch((function (t) {
        var e = {
          result: s.ERROR_GET_URL,
          err_msg: JSON.stringify(t)
        };
        r.doStatisTimeEvent(_, o.EId_UId_GUrl_End, e.result, "first gurl:" + e.err_msg), c(e)
      }))
    }))
  },
  isExpandTokenValid: function (t) {
    return !(!(t && 0 == t.result && t.session && t.action_results) || t.action_results.length <= 0)
  }
};