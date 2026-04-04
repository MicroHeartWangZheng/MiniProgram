var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../comm/feature/feature_accountinfo"),
  i = require("../comm/model/minpmodel"),
  n = require("../comm/model/initmodel"),
  o = require("../../comm/statis/statis.js"),
  u = require("../../comm/utils/util"),
  l = require("../../comm/utils/murmurhash2").hash32,
  s = require("../../comm/utils/xxtea_new").decrypt,
  a = require("../comm/rcode"),
  c = require("./buildConfig").BuildConfig,
  m = require("../../comm/utils/logutil.js"),
  d = require("../utils/promiseutil"),
  f = require("../../comm/model/resmodel"),
  p = require("../comm/rcode"),
  I = require("../comm/featurebuilder.js"),
  _ = require("../comm/consts/consts"),
  S = "Add canvas node to page's .wxml file and check page's object",
  g = "core_content_",
  R = {
    featurebuilder: I,
    account: i.buildMinpM(),
    isStatis: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      return C(e)
    },
    salt: "",
    netWork: null,
    args: null,
    config: null,
    timeout: _.Interface_Timeout,
    inited: !1,
    uuid: "",
    feature: null
  };

function b() {
  return (b = r(e().mark((function r() {
    var t, i, n, o, l = arguments;
    return e().wrap((function (e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (t = l.length > 0 && void 0 !== l[0] ? l[0] : null, R && R.account && "develop" == R.account.envVersion && R.feature) {
            e.next = 3;
            break
          }
          return e.abrupt("return", f.buildResModel(p.commCode.SUCCESS));
        case 3:
          return e.next = 5, d.buildPromise((function (e, r) {
            try {
              R.feature.existWebGLNode(e, t)
            } catch (r) {
              m.error(g + "existCanvasNode_err", r), e(f.buildResModel(p.ERROR_BIZ_MISS_NODE, "", u.getError(r)))
            }
          }), 0, 500);
        case 5:
          if (!(i = e.sent) || !i.res) {
            e.next = 11;
            break
          }
          return n = i.res, o = n.err, u.isEmpty(o) && n.ret != p.commCode.SUCCESS && (o = n.ret == p.ERROR_BIZ_CANVAS_CRASH ? "invalid page obj" : S), e.abrupt("return", f.buildResModel(n.ret, "", o));
        case 11:
          f.buildResModel(p.commCode.SUCCESS);
        case 12:
        case "end":
          return e.stop()
      }
    }), r)
  })))).apply(this, arguments)
}

function C() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
    r = o.buildIsStatis(null != e ? e : R.args && "isStatis" in R.args ? R.args.isStatis : 1 == c.statis);
  return r
}
module.exports = {
  cctx: R,
  initCtx: function (e, r, i, o, d, f, p) {
    try {
      if (R.inited) return void(null != i && i(n.buildInitModel(a.commCode.SUCCESS)));
      var S = function (e) {
        var r = {
          ret: a.commCode.SUCCESS,
          msg: ""
        };
        return null == e && (r.ret = a.ERROR_BIZ_INIT_ARGS_INVALID, r.msg = "pls check init args"), null == e.channel && (r.ret = a.ERROR_BIZ_INIT_ARGS_INVALID, r.msg = "pls check init channel"), u.isEmpty(c.apiUrl) && u.isEmpty(e.apiUrl) && (r.ret = a.ERROR_BIZ_INIT_ARGS_INVALID, r.msg = "pls check init apiUrl"), e.timeout && (!u.isNumber(e.timeout) || e.timeout <= 0) && (r.ret = a.ERROR_BIZ_INIT_ARGS_INVALID, r.msg = "pls check init timeout"), r
      }(r);
      if (S.ret != a.commCode.SUCCESS) return console.error(S.msg, r), void(null != i && i(n.buildInitModel(S.ret, "", S.msg)));
      ! function (e, r, i, n, o) {
        R.feature = e;
        var a = t.ff65045cb();
        R.account = a, (r = r || {}).productInfo || (r.productInfo = {}), r.clientInfo || (r.clientInfo = {}), c.productInfo = r.productInfo, c.sdkInfo.channel = r.channel || "", c.apiUrl = s(c.apiUrl, "turing"), c.riskUrl = s(c.riskUrl, "turing"), R.salt = l("saas_" + r.channel + "_", 0).toString(16), u.isEmpty(r.apiUrl) || (c.apiUrl = r.apiUrl + "/data/1938/forward", c.riskUrl = r.apiUrl + "/data/1941/forward", R.salt = l("private_" + r.channel + "_", 0).toString(16)), u.isEmpty(r.apiUrl) || u.isEmpty(r.riskUrl) || (c.apiUrl = r.apiUrl, c.riskUrl = r.riskUrl), R.timeout = r.timeout || _.Interface_Timeout, R.netWork = n, R.args = r, R.config = c
      }(e, r, 0, o), p.initRisk(R, i), f.initDfp(R, i), R.inited = !0, null != i && i(n.buildInitModel(a.commCode.SUCCESS));
      var b = f.getDfpLocalTicket(),
        C = !(b && !b.expired && b.ticket);
      setTimeout((function () {
        I.b9109f6bd(R, C)
      }), 0)
    } catch (e) {
      m.error(g + "initCtx", e), null != i && i(n.buildInitModel(a.ERROR_BIZ_INIT, "", u.getError(e)))
    }
  },
  getSDKInfo: function () {
    return c.sdkInfo.sdkver + "_" + c.sdkInfo.buildno + "_" + c.sdkInfo.lc
  },
  existCanvasNode: function () {
    return b.apply(this, arguments)
  }
};