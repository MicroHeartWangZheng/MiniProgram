Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.back = function() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  wx.navigateBack({
    success: function() {
      null != t && "" != t && setTimeout((function() {
        u(t)
      }), 300)
    }
  })
}, exports.backAndReload = function() {
  var t = getCurrentPages(),
    e = t[t.length - 2];
  wx.navigateBack({
    success: function() {
      null != e.reloadData && e.reloadData()
    }
  })
}, exports.convertToTimestamp = function(t) {
  return new Date(t.replace(/-/g, "/")).getTime()
}, exports.findLastIndex = function(t, e) {
  var n = -1;
  return t.map((function(t, r) {
    e(t) && (n = r)
  })), n
}, exports.fixFloat = function(t) {
  return parseFloat(t.toFixed(2))
}, exports.formatDate = function(t) {
  var e = new Date(t.replace(/-/g, "/"));
  return "".concat(e.getFullYear(), "年").concat(e.getMonth() + 1, "月").concat(e.getDate(), "日 ").concat(l(e))
}, exports.formatTimeInterval = function(t, e) {
  if (t.length < 16 || e.length < 16) return;
  var n = t.substring(0, 10),
    r = e.substring(0, 10);
  if (n == r) return t.substring(0, 16) + "-" + e.substring(11, 16);
  if (n != r) return n + "至" + r + " " + t.substring(11, 16) + "-" + e.substring(11, 16)
}, exports.formatTimeInterval2 = function(t, e) {
  if (t.length < 16 || e.length < 16) return;
  var n = t.substring(0, 10),
    r = e.substring(0, 10);
  if (n == r) return t.substring(0, 16) + "-" + e.substring(11, 16);
  if (n != r) return t.substring(0, 16) + "~" + e.substring(0, 16)
}, exports.getAgeByCard = function(t) {
  var e = "";
  18 == (t + "").length && (e = t.substr(6, 4) + "/" + t.substr(10, 2) + "/" + t.substr(12, 2));
  var n = new Date(e),
    r = new Date,
    o = r.getFullYear() - n.getFullYear();
  (r.getMonth() < n.getMonth() || r.getMonth() == n.getMonth() && r.getDate() < n.getDate()) && o--;
  return o
}, exports.getAgeFromIDCard = function(t) {
  if (i.checkIdCardNo(t)) {
    var e = t.substring(6, 14),
      n = parseInt(e.substring(0, 4)),
      r = parseInt(e.substring(4, 6)) - 1,
      o = parseInt(e.substring(6, 8)),
      a = new Date,
      l = a.getFullYear(),
      u = a.getMonth(),
      c = a.getDate(),
      s = l - n;
    return (u < r || u === r && c < o) && s--, s < 0 ? -1 : s
  }
  return -1
}, exports.getContactsArr = function() {
  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return new Promise((function(r, a) {
    var i = wx.getStorageSync(getApp().globalData.openId + "_contacts");
    null == i || "" == i || t ? (0, o.customerContactQueryList)().then(function() {
      var t = n(e().mark((function t(n) {
        return e().wrap((function(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              200 == n.code ? (wx.setStorage({
                key: getApp().globalData.openId + "_contacts",
                data: JSON.stringify(n.data)
              }), r(n.data)) : a(n);
            case 1:
            case "end":
              return t.stop()
          }
        }), t)
      })));
      return function(e) {
        return t.apply(this, arguments)
      }
    }()).catch((function(t) {
      a({
        msg: JSON.stringify(t)
      })
    })) : r(JSON.parse(i))
  }))
}, exports.getContactsArr2 = function() {
  var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return new Promise(function() {
    var a = n(e().mark((function a(i, l) {
      var u, c, s, g, p;
      return e().wrap((function(a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (null == (u = wx.getStorageSync(getApp().globalData.openId + "_contacts")) || "" == u || r) {
              a.next = 19;
              break
            }
            return c = JSON.parse(u), s = c.map((function(t) {
              return t.documentNumberFull
            })), a.prev = 4, a.next = 7, (0, o.queryIsVolByDocumentNumber)(s);
          case 7:
            g = a.sent, console.log("获取志愿成功"), p = g.data, 200 == g.code && (c = c.map((function(e, n) {
              return t(t({}, e), {}, {
                isVol: p[n]
              })
            }))), a.next = 16;
            break;
          case 13:
            a.prev = 13, a.t0 = a.catch(4), console.log("获取志愿失败", a.t0);
          case 16:
            i(c), a.next = 20;
            break;
          case 19:
            (0, o.customerContactQueryList)().then(function() {
              var r = n(e().mark((function n(r) {
                var a, u, c;
                return e().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (200 != r.code) {
                        e.next = 18;
                        break
                      }
                      return a = r.data, u = r.data.map((function(t) {
                        return t.documentNumberFull
                      })), e.prev = 3, e.next = 6, (0, o.queryIsVolByDocumentNumber)(u);
                    case 6:
                      c = e.sent, console.log("获取志愿成功"), 200 == c.code && (a = a.map((function(e, n) {
                        return t(t({}, e), {}, {
                          isVol: c.data[n]
                        })
                      }))), e.next = 14;
                      break;
                    case 11:
                      e.prev = 11, e.t0 = e.catch(3), console.log("获取志愿失败", e.t0);
                    case 14:
                      wx.setStorage({
                        key: getApp().globalData.openId + "_contacts",
                        data: JSON.stringify(a)
                      }), i(a), e.next = 19;
                      break;
                    case 18:
                      l(r);
                    case 19:
                    case "end":
                      return e.stop()
                  }
                }), n, null, [
                  [3, 11]
                ])
              })));
              return function(t) {
                return r.apply(this, arguments)
              }
            }()).catch((function(t) {
              l({
                msg: JSON.stringify(t)
              })
            }));
          case 20:
          case "end":
            return a.stop()
        }
      }), a, null, [
        [4, 13]
      ])
    })));
    return function(t, e) {
      return a.apply(this, arguments)
    }
  }())
}, exports.getCurrentDateTime = function() {
  var t = new Date,
    e = t.getFullYear(),
    n = String(t.getMonth() + 1).padStart(2, "0"),
    r = String(t.getDate()).padStart(2, "0"),
    o = String(t.getHours()).padStart(2, "0"),
    a = String(t.getMinutes()).padStart(2, "0"),
    i = String(t.getSeconds()).padStart(2, "0");
  return "".concat(e, "/").concat(n, "/").concat(r, " ").concat(o, ":").concat(a, ":").concat(i)
}, exports.getFormatDate = function(t) {
  var e = t.getFullYear(),
    n = t.getMonth() + 1,
    r = t.getDate();
  n < 10 && (n = "0".concat(n));
  r < 10 && (r = "0".concat(r));
  return "".concat(e, "-").concat(n, "-").concat(r)
}, exports.getLastOrderInfo = function() {
  var t = null;
  try {
    t = JSON.parse(wx.getStorageSync("lastOrderInfo"))
  } catch (t) {
    p("getLastOrderInfo进入catch," + t)
  }
  return t
}, exports.getNavigationBarHeight = function() {
  var t = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
  return 8 + (null != t ? t.bottom : 0)
}, exports.getNowFormatDate = function() {
  var t = new Date,
    e = t.getFullYear(),
    n = t.getMonth() + 1,
    r = t.getDate();
  n < 10 && (n = "0".concat(n));
  r < 10 && (r = "0".concat(r));
  return "".concat(e, "-").concat(n, "-").concat(r)
}, exports.getRealNameInfo = f, exports.getVipInfo = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (null != getApp().globalData.vipInfo) return void(null != t && t(getApp().globalData.vipInfo));
  var n = wx.getStorageSync(getApp().globalData.openId + "_vip");
  if (null != n && "" != n) {
    var r = JSON.parse(n),
      o = new Date(r.expireTime).getTime();
    if (o > (new Date).getTime()) return getApp().globalData.vipInfo = r, void(null != t && t(r))
  }
  s(), (0, a.queryMemberByCustomerId)().then((function(e) {
    if (g(), 200 == e.code && null != e.data) {
      var n = {
        state: e.data.state,
        id: e.data.id,
        expireTime: e.data.expireTime.replace(/-/g, "/")
      };
      wx.setStorage({
        key: getApp().globalData.openId + "_vip",
        data: JSON.stringify(n)
      }), getApp().globalData.vipInfo = n, null != t && t(n)
    } else null != t && t(null)
  })).catch((function(t) {
    g(), console.error("获取会员信息失败," + JSON.stringify(t)), p("获取会员信息失败," + JSON.stringify(t)), null != e && e(t)
  }))
}, exports.getVolInfo = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (null != getApp().globalData.volInfo) return void(null != t && t(getApp().globalData.volInfo));
  s(), f((function(n) {
    (0, o.queryIsVolByDocumentNumber)(n.documentNumberFull).then((function(e) {
      if (200 == e.code && null != e.data) {
        g();
        var n = {
          volRole: e.data.volRole,
          volType: e.data.volType,
          volId: e.data.volId,
          volNo: e.data.volNo
        };
        getApp().globalData.volInfo = n, null != t && t(n)
      } else null != t && t(null)
    })).catch((function(t) {
      g(), console.error("获取志愿者信息失败," + JSON.stringify(t)), p("获取志愿者信息失败," + JSON.stringify(t)), null != e && e(t)
    }))
  }), (function(t) {
    null != e && e(t)
  }))
}, exports.getWeekStr = l, exports.hideCardNum = function(t) {
  if (i.checkIdCardNo(t)) return t.substring(0, 2) + "************" + t.substring(14);
  if (t.length >= 6) {
    for (var e = "", n = 0; n < t.length - 4; n++) e += "*";
    return t.substring(0, 2) + e + t.substring(t.length - 2)
  }
  return t
}, exports.hideLoading = g, exports.hidePhoneNum = function(t) {
  return 11 == t.length ? t.substring(0, 3) + "****" + t.substring(7) : t
}, exports.isEighteenYearsOld = function(t) {
  if (!t) return !1;
  var e = t.slice(6, 14),
    n = parseInt(e.slice(0, 4), 10),
    r = parseInt(e.slice(4, 6), 10),
    o = parseInt(e.slice(6, 8), 10),
    a = new Date(n, r - 1, o),
    i = new Date,
    l = i.getFullYear() - a.getFullYear(),
    u = i.getMonth() - a.getMonth(),
    c = i.getDate() - a.getDate();
  (u < 0 || 0 === u && c < 0) && l--;
  return l < 18
}, exports.modal = c, exports.modalWithCancel = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = "zh_CN" == r.i18n.getLocales();
  wx.showModal({
    content: t,
    showCancel: !0,
    confirmText: n ? "确定" : "Confirm",
    cancelText: n ? "取消" : "Cancel",
    success: function(t) {
      t.confirm && null != e ? e() : t.cancel
    }
  })
}, exports.navigateTo = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
    r = "";
  null != e && (r = "?" + Object.keys(e).map((function(t) {
    return "".concat(t, "=").concat(null != e[t] && -1 != e[t].toString().indexOf("&") ? encodeURIComponent(e[t]) : e[t])
  })).join("&"));
  t += r, wx.navigateTo({
    url: t,
    success: function() {
      null != n && n()
    }
  })
}, exports.objCopy = function(t, e) {
  var n = {};
  return e.forEach((function(e) {
    n[e] = t[e]
  })), n
}, exports.onlineLog = p, exports.px2rpx = function(t) {
  return 750 * t / wx.getWindowInfo().windowWidth
}, exports.redirectTo = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
    r = "";
  null != e && (r = "?" + Object.keys(e).map((function(t) {
    return "".concat(t, "=").concat(null != e[t] && -1 != e[t].toString().indexOf("&") ? encodeURIComponent(e[t]) : e[t])
  })).join("&"));
  t += r, wx.redirectTo({
    url: t,
    success: function() {
      null != n && n()
    }
  })
}, exports.replaceObjEmpty = function(t) {
  return Object.keys(t).forEach((function(e) {
    null != t[e] && "string" == typeof t[e] && (t[e] = t[e].replace(/\s+/g, ""))
  })), t
}, exports.rpx2px = function(t) {
  return t * wx.getWindowInfo().windowWidth / 750
}, exports.saveBaseToPhotosAlbum = function(t) {
  t.startsWith("data:image/png;base64,") && (t = t.substring(22));
  var e = wx.getFileSystemManager(),
    n = wx.env.USER_DATA_PATH + "/base64img.png";
  e.writeFile({
    filePath: n,
    data: t,
    encoding: "base64",
    success: function(t) {
      console.log(t), wx.saveImageToPhotosAlbum({
        filePath: n,
        success: function(t) {
          console.log(t), wx.showToast({
            title: "保存成功",
            icon: "success"
          })
        },
        fail: function(t) {
          c("保存相册失败"), console.error("保存相册失败", t)
        }
      })
    },
    fail: function(t) {
      (0, o.defaultCatch)(err, "保存文件异常"), console.error("保存文件异常", t)
    }
  })
}, exports.showLoading = s, exports.strIsNotEpmty = function(t) {
  return null != t && "" != t.replace(/\s/g, "")
}, exports.throttle = function(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
  console.log(d);
  var n = Date.now();
  n - d > e && (t(), d = n)
}, exports.toast = u;
var t = require("./@babel/runtime/helpers/objectSpread2.js"),
  e = require("./@babel/runtime/helpers/regeneratorRuntime.js"),
  n = require("./@babel/runtime/helpers/asyncToGenerator.js"),
  r = require("miniprogram_npm/mini-i18n/index.js"),
  o = require("88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("2745A015AD7FA6DF4123C81257040E96.js"),
  i = require("2A6E79D2AD7FA6DF4C0811D564840E96.js");

function l(t) {
  var e = t.getDay();
  return 0 == e ? "星期天" : 1 == e ? "星期一" : 2 == e ? "星期二" : 3 == e ? "星期三" : 4 == e ? "星期四" : 5 == e ? "星期五" : 6 == e ? "星期六" : void 0
}

function u(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2500;
  wx.showToast({
    title: t,
    icon: "none",
    duration: e
  })
}

function c(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = "zh_CN" == r.i18n.getLocales();
  wx.showModal({
    content: t,
    showCancel: !1,
    confirmText: n ? "确定" : "Confirm",
    success: function(t) {
      t.confirm && null != e && e()
    }
  })
}

function s() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (null == t) {
    var n = "zh_CN" == r.i18n.getLocales();
    t = n ? "加载中" : "Loading"
  }
  wx.showLoading({
    title: t,
    mask: e
  })
}

function g() {
  wx.hideLoading()
}

function p(t) {
  console.error("在线日志，" + t), wx.getRealtimeLogManager().info(t)
}

function f(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (null == getApp().globalData.userInfo || n) {
    var r = wx.getStorageSync(getApp().globalData.openId + "__realName");
    if (null != r && "" != r && !n) return getApp().globalData.userInfo = JSON.parse(r), void(null != t && t(getApp().globalData.userInfo));
    s(), (0, o.queryCertList)().then((function(e) {
      if (g(), 200 == e.code && e.data.length > 0) {
        var n = e.data[0];
        n.contactName = n.customerName, n.documentNumberFull = n.showDocumentNumber, n.contactPhoneFull = n.phoneNumber, n.myself = 1, getApp().globalData.userInfo = n, wx.setStorage({
          key: getApp().globalData.openId + "__realName",
          data: JSON.stringify(n)
        }), null != t && t(n)
      } else g(), null != t && t(null)
    })).catch((function(t) {
      g(), console.error("获取实名认证信息失败," + JSON.stringify(t)), p("获取实名认证信息失败," + JSON.stringify(t)), null != e && e(t)
    }))
  } else null != t && t(getApp().globalData.userInfo)
}
var d = 0;