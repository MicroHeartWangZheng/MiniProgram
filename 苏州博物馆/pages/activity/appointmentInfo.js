require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  c = (require("../../F4A4DD67AD7FA6DF92C2B56044640E96.js"), require("../../22CF3566AD7FA6DF44A95D614D730E96.js")),
  s = require("../../4FC87BF1AD7FA6DF29AE13F6F5140E96.js");

function r(t) {
  return new Promise((function(e, i) {
    var n = "7239d35e0e18d351926cb5c5260db650",
      o = JSON.stringify({
        cardNo: t
      }),
      a = Math.random().toString(36).substring(2, 15),
      c = Math.floor(Date.now() / 1e3).toString(),
      r = function(t, e, i, n, o, a, c, r) {
        var u = encodeURIComponent(i),
          l = n ? encodeURIComponent(n) : "",
          d = "appid=".concat(t, "&method=").concat(e, "&uri=").concat(u, "&query=").concat(l, "&body=").concat(o, "&nonce=").concat(a, "&timestamp=").concat(c);
        console.log("preSign", d);
        var f = s.MD5(d).toString();
        console.log("firstMd5", f);
        var p = s.MD5(f + r).toString();
        return console.log("signature", p), p
      }(n, "POST", "/api/open/v2/check/user/white", "", o, a, c, "2716ef936f0fdc371077000033913842");
    wx.request({
      url: "https://szd-xsdlb-2025.2500city.com/api/open/v2/check/user/white",
      method: "POST",
      header: {
        "Content-Type": "application/json",
        "X-Appid": n,
        "X-Timestamp": c,
        "X-Nonce": a,
        "X-Signature": r
      },
      data: {
        cardNo: t
      },
      success: function(t) {
        200 === t.statusCode && 0 === t.data.code ? e(t.data.data.isWhite) : i(new Error(t.data.msg || "接口调用失败"))
      },
      fail: function(t) {
        i(t)
      }
    })
  }))
}
var u = !1,
  l = 0;
Page({
  behaviors: [c.languageBehaviors],
  data: {
    detail: {},
    imgCode: "",
    selectedContactsArr: [],
    ticketTypeList: [],
    vipInfo: {},
    isUse: !1,
    showCoupon: !0,
    useType: 0,
    maxUseCoupon: 0,
    allCost: 0,
    adult: 0,
    child: 0,
    discountTypeObj: {
      1: "ACT0303",
      2: "ACT0302",
      3: "ACT0304",
      0: "ACT0301"
    },
    discountAfterCost: 0,
    canUseCouponNum: 0,
    usevipPerson: 0,
    usecouponPerson: 0,
    usevolPerson: 0,
    disableVipVol: !1,
    disabledCoupon: !1,
    vipCost: 0,
    volCost: 0
  },
  onLoad: function(t) {
    var e = this,
      i = JSON.parse(decodeURIComponent(t.detail));
    this.setData({
      detail: i
    }, (function() {
      e.getRealNameData(), e.getImgCode()
    }))
  },
  onShow: function() {
    this.getGreat()
  },
  getRealNameData: function() {
    var t = this,
      c = this.data.detail;
    (0, a.getRealNameInfo)(function() {
      var s = n(e().mark((function n(s) {
        var r, l, d;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (null == s) {
                e.next = 15;
                break
              }
              return u = !0, e.prev = 2, e.next = 5, (0, o.queryIsVolByDocumentNumber)([s.documentNumberFull]);
            case 5:
              200 == (r = e.sent).code && (s.isVol = r.data[0]), e.next = 12;
              break;
            case 9:
              e.prev = 9, e.t0 = e.catch(2), console.log("err", e.t0);
            case 12:
              1 == c.ticketTypeEnable ? 1 == (l = c.ticketTypeList.filter((function(t) {
                return t.sel
              }))[0]).isPackage ? (0, a.getAgeFromIDCard)(s.documentNumberFull) > l.adultMinAge ? t.setData({
                selectedContactsArr: [i(i({}, s), {}, {
                  ticketId: l.ticketTypeId,
                  tickInfo: l
                })],
                adult: 1
              }, (function() {
                t.getVipInfo()
              })) : t.setData({
                selectedContactsArr: [i(i({}, s), {}, {
                  isChild: !0,
                  ticketId: l.ticketTypeId,
                  tickInfo: l
                })],
                child: 1
              }, (function() {
                t.getVipInfo()
              })) : (d = (0, a.getAgeFromIDCard)(s.documentNumberFull), console.log("实名年龄", d), (l.maxAge && d < l.maxAge && l.minAge && d > l.minAge || !l.maxAge && !l.minAge) && t.setData({
                selectedContactsArr: [i(i({}, s), {}, {
                  ticketId: l.ticketTypeId,
                  tickInfo: l
                })]
              }, (function() {
                t.getVipInfo()
              }))) : t.setData({
                selectedContactsArr: [s]
              }, (function() {
                t.getVipInfo()
              })), e.next = 16;
              break;
            case 15:
              (0, a.modalWithCancel)("请先进行实名认证", (function() {
                (0, a.navigateTo)("../contacts/realNameCertification")
              }));
            case 16:
            case "end":
              return e.stop()
          }
        }), n, null, [
          [2, 9]
        ])
      })));
      return function(t) {
        return s.apply(this, arguments)
      }
    }(), (function(t) {
      (0, a.modal)("获取实名认证信息失败"), (0, a.onlineLog)("活动预约界面获取实名认证信息失败," + JSON.stringify(t))
    }))
  },
  getVipInfo: function() {
    var t = this;
    (0, o.queryIsVip)().then((function(e) {
      200 == e.code && t.setData({
        vipInfo: e.data
      }, (function() {
        t.getGreat()
      }))
    })).catch((function(t) {
      console.log("获取会员信息失败", t)
    }))
  },
  getGreat: function() {
    var e, i = this,
      n = this.data,
      o = n.vipInfo,
      c = n.detail,
      s = n.selectedContactsArr,
      r = 0,
      u = 0,
      l = 0,
      d = 0,
      f = 0,
      p = 0,
      m = !0,
      g = 0;
    if (s.forEach((function(t) {
        t.isVol && (f += 1), 0 != c.ticketTypeEnable && c.ticketTypeEnable || !t.isVol || (g += (0, a.fixFloat)(c.cost - c.volDiscountCost)), 1 == c.ticketTypeEnable && 0 == t.tickInfo.isPackage && t.isVol && (g += (0, a.fixFloat)(t.tickInfo.ticketCost - t.tickInfo.volDiscountCost)), g = (0, a.fixFloat)(g)
      })), 1 == c.ticketTypeEnable && f > 0 && 1 == s[0].tickInfo.isPackage && (g = s[0].tickInfo.ticketCost - s[0].tickInfo.volDiscountCost), !o || 0 == (null == o ? void 0 : o.state) || 2 == (null == o ? void 0 : o.state) || 0 == c.vipDiscountEnable) return 0 != c.ticketTypeEnable && c.ticketTypeEnable ? s.forEach((function(t) {
      var e;
      0 == (null === (e = t.tickInfo) || void 0 === e ? void 0 : e.isPackage) && (r += t.tickInfo.ticketCost)
    })) : r = c.cost * s.length, r = (0, a.fixFloat)(r), void this.setData({
      useType: f > 0 ? 3 : 0,
      usevolPerson: f,
      volCost: g,
      allCost: r
    });
    !o || 2 != (null == o ? void 0 : o.typeId) && 4 != (null == o ? void 0 : o.typeId) ? o && (u = s.filter((function(t) {
      return 1 == t.myself || 1 == t.isPartyMember
    })).length, 1 == c.ticketTypeEnable ? 1 == c.ticketTypeList[0].isPackage ? r = c.ticketTypeList[0].ticketCost : s.map((function(t) {
      return r += t.tickInfo.ticketCost, t
    })) : r = c.cost * s.length, m = !(u == s.length) || 0 == c.voucherEnable) : (1 == c.ticketTypeEnable ? (s.map((function(t) {
      return 1 == t.myself && (p = 1, selfCost = t.tickInfo.ticketCost), t
    })), 1 == c.ticketTypeList[0].isPackage ? r = c.ticketTypeList[0].ticketCost : s.forEach((function(t) {
      r += t.tickInfo.ticketCost
    }))) : (s.map((function(t) {
      return 1 == t.myself && (p += 1), t
    })), r = c.cost * s.length, selfCost = c.cost), p > 0 && (u = 1, m = s.length > 1 || 0 == c.voucherEnable));
    var k = o ? 1 == c.ticketTypeEnable && 1 == c.ticketTypeList[0].isPackage ? 0 : r * (100 - o.discount) / 100 : 0;
    e = o ? parseInt(Number(r) / Number(null == o ? void 0 : o.goodsAmount)) : 0, l = (null == o ? void 0 : o.canUseNum) > e ? e : null == o ? void 0 : o.canUseNum;
    var h = (l = r < Number(null == o ? void 0 : o.goodsAmount) * l && 0 !== l ? l - 1 : l) * Number(null == o ? void 0 : o.goodsAmount);
    if (m) d = k > g ? 1 : 3;
    else {
      var C = [k, h, g],
        v = C.findIndex((function(e, i, n) {
          return e === Math.max.apply(Math, t(n))
        }));
      d = 0 == C[v] ? 0 : v + 1
    }
    r = (0, a.fixFloat)(r), this.setData({
      useType: 0 == u && 0 == f ? 0 : d,
      allCost: r,
      usevipPerson: u,
      usevolPerson: f,
      disabledCoupon: m,
      volCost: g
    }, (function() {
      o && (1 == c.voucherEnable && i.getCouponCost(), i.getVipCost())
    }))
  },
  isDecimal: function(t) {
    if ("number" != typeof t) return !1;
    var e = t.toString(),
      i = /^\d*\.\d+$/;
    return i.test(e) && !i.test(e.replace(".", "", 1))
  },
  getVipCost: function() {
    var t = this.data,
      e = t.selectedContactsArr,
      i = t.vipInfo,
      n = t.detail,
      o = (t.allCost, 0);
    1 == n.ticketTypeEnable ? (e.forEach((function(t) {
      1 != t.myself && 1 != t.isPartyMember || (o += (0, a.fixFloat)(t.tickInfo.ticketCost - t.tickInfo.ticketCost * (i.discount / 100)))
    })), o = (0, a.fixFloat)(o)) : (e.forEach((function(t) {
      1 != t.myself && 1 != t.isPartyMember || (o += (0, a.fixFloat)(n.cost - n.cost * (i.discount / 100)))
    })), o = (0, a.fixFloat)(o)), this.setData({
      vipCost: o
    })
  },
  getCouponCost: function() {
    var t = this.data,
      e = t.selectedContactsArr,
      i = t.vipInfo,
      n = t.useType,
      o = t.detail,
      a = t.disabledCoupon,
      c = 0,
      s = 0,
      r = n;
    1 == o.ticketTypeEnable && 0 == o.ticketTypeList[0].isPackage ? e.forEach((function(t) {
      if (1 == t.myself || 1 == t.isPartyMember) {
        var e = t.tickInfo.ticketCost > i.goodsAmount || t.tickInfo.ticketCost == i.goodsAmount ? 1 : 0,
          n = 1 == e ? parseInt(t.tickInfo.ticketCost / i.goodsAmount) : 0;
        s += n, c += e
      }
    })) : 1 == o.ticketTypeEnable && 1 == o.ticketTypeList[0].isPackage ? (r = 0 == (c = a ? e.filter((function(t) {
      return 1 == t.myself || 1 == t.isPartyMember
    })).length : e.length) || a ? 0 : n, s = 0 == c || a ? 0 : parseInt(o.ticketTypeList[0].ticketCost / i.goodsAmount)) : e.forEach((function(t) {
      if (1 == t.myself || 1 == t.isPartyMember) {
        var e = o.cost > i.goodsAmount || o.cost == i.goodsAmount ? 1 : 0;
        s += 1 == e ? parseInt(o.cost / i.goodsAmount) : 0, c += e
      }
    })), c > i.canUseNum && (c = i.canUseNum), s > i.canUseNum && (s = i.canUseNum), a && 1 == o.ticketTypeEnable && 1 == o.ticketTypeList[0].isPackage && (r = 0), this.setData({
      usecouponPerson: c,
      maxUseCoupon: 0 == r ? 0 : s,
      useType: r
    })
  },
  isUseChange: function(t) {
    var e = this.data.isUse;
    t.detail.value;
    console.log("value", e), this.setData({
      isUse: !e
    })
  },
  changeUseType: function(t) {
    var e = t.currentTarget.dataset.value,
      i = this.data.useType;
    this.setData({
      useType: i == e ? 0 : e,
      isUse: 2 == e
    })
  },
  showCouponList: function(t) {
    var e = this.data,
      i = e.showCoupon,
      n = e.useType,
      o = e.isUse;
    this.setData({
      showCoupon: !i,
      useType: o ? 2 : 2 == n ? 0 : n,
      isUse: 2 == n
    })
  },
  reloadContactsData: function() {
    this.getRealNameData(this)
  },
  getImgCode: function() {
    var t = this;
    l = (new Date).getTime(), this.setData({
      imgCode: ""
    }), (0, a.showLoading)(), (0, o.activityQueryImgCode)().then((function(e) {
      if ((0, a.hideLoading)(), 200 == e.code) {
        var i = e.data.replace(/[\r\n]/g, "");
        t.setData({
          captchaImgBase64: i
        })
      } else l = 0, wx.showToast({
        title: e.msg,
        icon: "none"
      })
    })).catch((function(t) {
      l = 0, (0, a.hideLoading)(), console.error("验证码失败" + t)
    }))
  },
  captchaClick: function(t) {
    (new Date).getTime() - l > 3e3 ? this.getImgCode() : (0, a.toast)("操作太频繁，请稍后再试")
  },
  toDetail: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  addp: function(t) {
    if (u) {
      var e = this.data,
        i = e.detail,
        n = e.vipInfo,
        o = {};
      if (1 == i.ticketTypeEnable) {
        var c = t.currentTarget.dataset.ticketid,
          s = i.ticketTypeList.filter((function(t) {
            return t.ticketTypeId == c
          }))[0];
        o = {
          allAddChildArr: [],
          maxCount: this.data.detail.reserveTicketLimit,
          selectDataArr: this.data.selectedContactsArr,
          ticketid: c,
          ticketInfo: s,
          from: "act"
        }
      } else o = {
        allAddChildArr: [],
        maxCount: this.data.detail.reserveTicketLimit,
        selectDataArr: this.data.selectedContactsArr,
        from: "act"
      };
      n && 1 == n.state && (o.vipId = n.vipId), o = JSON.stringify(o), wx.navigateTo({
        url: "../contacts/selectContacts?data=".concat(o)
      })
    } else(0, a.modalWithCancel)("请先进行实名认证", (function() {
      (0, a.navigateTo)("../contacts/realNameCertification")
    }))
  },
  next_order: function() {
    this.conformOrder()
  },
  codeChange: function(t) {
    this.setData({
      imgCode: t.detail.value
    })
  },
  conformOrder: function() {
    var t = this;
    return n(e().mark((function n() {
      var o, c, s, u, l, d, f, p, m, g, k, h, C, v, y, T, b, I, A, x, L, D;
      return e().wrap((function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if ((0, a.showLoading)(), o = t.data, c = o.imgCode, s = o.detail, u = o.selectedContactsArr, l = o.allCost, d = o.useType, f = o.discountTypeObj, p = o.vipInfo, m = o.maxUseCoupon, g = o.usevipPerson, !["53d3902627e94484988ff204ee3c24ca", "4b061cb7f96b49d78b2080dcd7132e0d"].includes(s.activityId)) {
              e.next = 29;
              break
            }
            e.prev = 4, (0, a.showLoading)("提交中..."), k = 0;
          case 7:
            if (!(k < u.length)) {
              e.next = 20;
              break
            }
            if (!(h = u[k]).documentNumberFull) {
              e.next = 17;
              break
            }
            return e.next = 12, r(h.documentNumberFull);
          case 12:
            if (e.sent) {
              e.next = 17;
              break
            }
            return (0, a.hideLoading)(), (0, a.modal)("本活动面向苏州市2025年入学高校新生报名，【".concat(h.contactName, "】不符合报名条件。")), e.abrupt("return");
          case 17:
            k++, e.next = 7;
            break;
          case 20:
            (0, a.hideLoading)(), e.next = 29;
            break;
          case 23:
            return e.prev = 23, e.t0 = e.catch(4), (0, a.hideLoading)(), console.error("白名单校验失败:", e.t0), (0, a.modal)("白名单校验失败，请稍后重试"), e.abrupt("return");
          case 29:
            if (C = u.map((function(t) {
                return console.log("item.tickInfo", t.ticketInfo), t
              })), !(1 == s.ticketTypeEnable && 1 == s.ticketTypeList[0].isPackage && C.length < Number(s.ticketTypeList[0].adultCount) + Number(s.ticketTypeList[0].childCount))) {
              e.next = 33;
              break
            }
            return (0, a.toast)("套票需要添加" + (Number(s.ticketTypeList[0].adultCount) + Number(s.ticketTypeList[0].childCount)) + "名参观者"), e.abrupt("return");
          case 33:
            if (v = !0, 0 == s.ticketTypeEnable && (y = s.reserveMinAge ? s.reserveMinAge : 0, T = s.reserveMaxAge ? s.reserveMaxAge : 999, u.forEach((function(t) {
                if ("RLY0101" == t.documentType || "RLY0108" == t.documentType) {
                  var e = (0, a.getAgeFromIDCard)(t.documentNumberFull);
                  (e < y || e > T) && (v = !v && v, (0, a.toast)("【" + t.contactName + "】" + e + "岁，不符合活动年龄要求"))
                }
              }))), 1 != s.ticketTypeEnable) {
              e.next = 51;
              break
            }
            if (1 != s.ticketTypeList[0].isPackage) {
              e.next = 50;
              break
            }
            if (b = 0, I = 0, A = !1, u.forEach((function(t) {
                if ("RLY0101" == t.documentType || "RLY0108" == t.documentType) {
                  var e = (0, a.getAgeFromIDCard)(t.documentNumberFull),
                    i = t.tickInfo.adultMinAge ? t.tickInfo.adultMinAge : 0,
                    n = t.tickInfo.adultMaxAge ? t.tickInfo.adultMaxAge : 999,
                    o = t.tickInfo.childMinAge ? t.tickInfo.childMinAge : 0,
                    c = t.tickInfo.childMaxAge ? t.tickInfo.childMaxAge : 999;
                  e < i && e > c && (v = !v && v, (0, a.toast)("【" + t.contactName + "】" + e + "岁，不符合活动年龄要求")), e < o && (v = !v && v, (0, a.toast)("【" + t.contactName + "】" + e + "岁，不符合活动年龄要求")), e > n && (v = !v && v, (0, a.toast)("【" + t.contactName + "】" + e + "岁，不符合活动年龄要求")), (e < n || e == n) && (e > i || e == i) && (b += 1), (e < c || e == c) && (e > o || e == o) && (I += 1)
                } else A = !0
              })), A) {
              e.next = 48;
              break
            }
            if (b === s.ticketTypeList[0].adultCount) {
              e.next = 45;
              break
            }
            return (0, a.toast)(0 == s.ticketTypeList[0].adultCount ? "该套票不支持成人购买。" : "套票需添加" + s.ticketTypeList[0].adultCount + "名成人"), e.abrupt("return");
          case 45:
            if (I === s.ticketTypeList[0].childCount) {
              e.next = 48;
              break
            }
            return (0, a.toast)("套票需添加" + s.ticketTypeList[0].childCount + "名儿童"), e.abrupt("return");
          case 48:
            e.next = 51;
            break;
          case 50:
            u.forEach((function(t) {
              if ("RLY0101" == t.documentType || "RLY0108" == t.documentType) {
                var e = (0, a.getAgeFromIDCard)(t.documentNumberFull),
                  i = t.tickInfo.minAge ? t.tickInfo.minAge : 0,
                  n = t.tickInfo.maxAge ? t.tickInfo.maxAge : 999;
                (e < i || e > n) && (v = !v && v, (0, a.toast)("【" + t.contactName + "】" + e + "岁，不符合活动年龄要求"))
              }
            }));
          case 51:
            if (v) {
              e.next = 53;
              break
            }
            return e.abrupt("return");
          case 53:
            x = {
              imgCode: c,
              activityId: s.activityId,
              ticketId: s.ticktDetail ? s.ticktDetail.ticketId : "",
              reserveFrom: "ACT0205",
              contactList: C
            }, L = {
              activityId: x.activityId,
              contactList: x.contactList,
              imgCode: x.imgCode,
              ticketId: x.ticketId,
              reserveFrom: "ACT0205",
              discountType: x.discountType,
              vipInfo: p
            }, 0 == l ? (L.discountType = "ACT0301", L.vipId = p ? p.vipId : "") : (L.discountType = f[d], L.vipId = p ? p.vipId : "", 2 == d && (L.voucherNum = m)), D = encodeURIComponent(JSON.stringify(i(i({}, s), {}, {
              submitObj: L,
              allCost: l,
              usevipPerson: g
            }))), wx.navigateTo({
              url: "./appointmentInfo2?detail=".concat(D)
            });
          case 54:
          case "end":
            return e.stop()
        }
      }), n, null, [
        [4, 23]
      ])
    })))()
  },
  showElseTicket: function() {
    var t = this.data.detail,
      e = t.ticketTypeList.map((function(t) {
        return t.sel ? t : i(i({}, t), {}, {
          open: !0
        })
      }));
    this.setData({
      detail: i(i({}, t), {}, {
        ticketTypeList: e
      }),
      openElse: !0
    })
  },
  closeElseTicket: function(t) {
    var e = this,
      n = t.currentTarget.dataset.id,
      o = this.data,
      a = o.detail,
      c = o.selectedContactsArr;
    if (c.filter((function(t) {
        return t.ticketId == n
      })).length > 0) wx.showModal({
      cancelColor: "cancelColor",
      cancelText: "取消",
      confirmColor: "confirmColor",
      confirmText: "确定",
      content: "当前票种已添加参观者，收起将会清除该票种参观者",
      success: function(t) {
        var o = c.filter((function(t) {
            return t.ticketId !== n
          })),
          s = a.ticketTypeList.map((function(t) {
            return t.open && (t.open = !1), t
          })),
          r = i(i({}, a), {}, {
            ticketTypeList: s
          });
        e.setData({
          selectedContactsArr: o,
          openElse: !1,
          detail: r
        }, (function() {
          e.getGreat()
        }))
      },
      fail: function(t) {},
      complete: function(t) {}
    });
    else {
      var s = a.ticketTypeList.map((function(t) {
          return t.open && (t.open = !1), t
        })),
        r = i(i({}, a), {}, {
          ticketTypeList: s
        });
      this.setData({
        openElse: !1,
        detail: r
      })
    }
  },
  delVisit: function(t) {
    var e = this,
      i = t.currentTarget.dataset.id,
      n = this.data.selectedContactsArr.filter((function(t) {
        return t.customerContactId !== i
      }));
    this.setData({
      selectedContactsArr: n
    }, (function() {
      e.getGreat()
    }))
  }
});