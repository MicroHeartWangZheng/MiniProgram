var t = require("../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  o = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  i = require("../../F4A4DD67AD7FA6DF92C2B56044640E96.js"),
  n = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  a = 0;
Page({
  behaviors: [n.languageBehaviors],
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
    discountAfterCost: 0,
    canUseCouponNum: 0,
    usevipPerson: 0
  },
  onLoad: function(t) {
    var e = this,
      o = JSON.parse(decodeURIComponent(t.detail));
    this.setData({
      detail: o,
      contactList: o.submitObj.contactList
    }, (function() {
      e.getImgCode(), "ACT0302" == o.submitObj.discountType && e.distributionCoupon(), "ACT0303" == o.submitObj.discountType && e.getVipCost(), "ACT0304" == o.submitObj.discountType && e.getVolCost(), "ACT0301" == o.submitObj.discountType && e.getCost()
    }))
  },
  onShow: function() {
    getCurrentPages()
  },
  distributionCoupon: function() {
    var e = this,
      o = this.data,
      i = o.detail,
      n = o.contactList,
      a = i.submitObj.vipInfo.canUseNum;
    if (0 == i.ticketTypeEnable || !i.ticketTypeEnable) {
      var s = n.map((function(e) {
        var o = 0 == a ? 0 : parseInt(i.cost / i.submitObj.vipInfo.goodsAmount);
        return (o > a || o == a) && (o = a), a -= o, t(t({}, e), {}, {
          coupon: o
        })
      }));
      this.setData({
        contactList: s
      }, (function() {
        e.getCouponCost()
      }))
    }
    if (1 == i.ticketTypeEnable) {
      var c = [];
      if (0 == n[0].tickInfo.isPackage) c = n.map((function(e) {
        var o = 0 == a || e.tickInfo.ticketCost - i.submitObj.vipInfo.goodsAmount < 0 ? 0 : parseInt(e.tickInfo.ticketCost / i.submitObj.vipInfo.goodsAmount);
        return (o > a || o == a) && (o = a), a -= o, t(t({}, e), {}, {
          coupon: o
        })
      })), this.setData({
        contactList: c
      }, (function() {
        e.getCouponCost()
      }));
      else {
        var r = parseInt(n[0].tickInfo.ticketCost / i.submitObj.vipInfo.goodsAmount);
        r = r > i.submitObj.vipInfo.canUseNum ? i.submitObj.vipInfo.canUseNum : r, this.setData({
          detail: t(t({}, i), {}, {
            coupon: r
          })
        }, (function() {
          e.getCouponCost()
        }))
      }
    }
  },
  inputChange: function(e) {
    var i = this,
      n = this.data,
      a = n.detail,
      s = n.contactList,
      c = a.submitObj.vipInfo,
      r = e.currentTarget.dataset.id,
      u = e.currentTarget.dataset.type,
      d = s.filter((function(t) {
        return t.customerContactId == r
      }))[0],
      l = d.coupon,
      f = "add" == u ? l + 1 : l - 1;
    if (!(f < 0)) {
      var p = 0,
        m = s.map((function(e) {
          return e.customerContactId == r ? (p += f, t(t({}, e), {}, {
            coupon: f
          })) : (p += e.coupon, e)
        }));
      p > c.canUseNum || c.canUseNum < f ? (0, o.toast)("当前账户包含".concat(c.canUseNum, "张优惠券")) : 0 != a.ticketTypeEnable && a.ticketTypeEnable || !(a.cost - c.goodsAmount * f < 0) ? 1 == a.ticketTypeEnable && d.tickInfo.ticketCost - c.goodsAmount * f < 0 ? (0, o.toast)("当前用户最多使用".concat(l, "张优惠券")) : this.setData({
        contactList: m
      }, (function() {
        i.getCouponCost()
      })) : (0, o.toast)("当前用户最多使用".concat(l, "张优惠券"))
    }
  },
  inputChange2: function(e) {
    var i = this,
      n = this.data,
      a = n.detail,
      s = n.contactList,
      c = a.submitObj.vipInfo,
      r = e.currentTarget.dataset.type,
      u = s[0],
      d = a.coupon,
      l = "add" == r ? d + 1 : d - 1;
    l < 0 || (c.canUseNum < l ? (0, o.toast)("当前账户包含".concat(c.canUseNum, "张优惠券")) : u.tickInfo.ticketCost - c.goodsAmount * l < 0 ? (0, o.toast)("当前订单最多使用".concat(d, "张优惠券")) : this.setData({
      detail: t(t({}, a), {}, {
        coupon: l
      })
    }, (function() {
      i.getCouponCost()
    })))
  },
  isDecimal: function(t) {
    if ("number" != typeof t) return !1;
    var e = t.toString(),
      o = /^\d*\.\d+$/;
    return o.test(e) && !o.test(e.replace(".", "", 1))
  },
  getVipCost: function() {
    var t = this.data,
      e = t.detail,
      i = t.contactList,
      n = e.submitObj.vipInfo;
    if (0 != e.ticketTypeEnable && e.ticketTypeEnable) {
      var a = 0;
      i.forEach((function(t) {
        1 == t.myself || 1 == t.isPartyMember ? a += (0, o.fixFloat)(t.tickInfo.ticketCost * (n.discount / 100)) : a += t.tickInfo.ticketCost
      })), a = (0, o.fixFloat)(a), this.setData({
        allCost: a
      })
    } else {
      var s = 0;
      i.forEach((function(t) {
        1 == t.myself || 1 == t.isPartyMember ? s += (0, o.fixFloat)(e.cost * (n.discount / 100)) : s += e.cost
      })), console.log("cost", s), s = (0, o.fixFloat)(s), this.setData({
        allCost: s
      })
    }
  },
  getCouponCost: function() {
    var t = this.data,
      e = t.contactList,
      i = t.detail,
      n = i.submitObj.vipInfo,
      a = 0;
    0 != i.ticketTypeEnable && i.ticketTypeEnable ? 0 == e[0].tickInfo.isPackage ? e.forEach((function(t) {
      a += t.tickInfo.ticketCost - n.goodsAmount * t.coupon
    })) : (a = e[0].tickInfo.ticketCost - n.goodsAmount * i.coupon, console.log("cost", a, e[0].tickInfo.ticketCost)) : e.forEach((function(t) {
      a += i.cost - n.goodsAmount * t.coupon
    })), a = (0, o.fixFloat)(a), this.setData({
      allCost: a
    })
  },
  getVolCost: function() {
    var t = this,
      e = this.data,
      o = e.contactList,
      i = e.detail,
      n = o.filter((function(t) {
        return t.isVol
      })).length,
      a = 0;
    if (0 != i.ticketTypeEnable && i.ticketTypeEnable)
      if (0 == o[0].tickInfo.isPackage) o.forEach((function(e) {
        e.isVol ? a += e.tickInfo.volDiscountCost : a += e.tickInfo.ticketCost, a = t.isDecimal(a) ? Number(a.toFixed(2)) : a
      }));
      else {
        var s = o.filter((function(t) {
          return t.isVol
        }))[0];
        a = s.tickInfo.volDiscountCost
      }
    else a = i.cost * o.length - (i.cost * n - n * i.volDiscountCost), a = this.isDecimal(a) ? Number(a.toFixed(2)) : a;
    this.setData({
      allCost: a
    })
  },
  getCost: function() {
    var t = 0,
      e = this.data,
      o = e.contactList,
      i = e.detail;
    0 != i.ticketTypeEnable && i.ticketTypeEnable ? 1 == o[0].tickInfo.isPackage ? t = o[0].tickInfo.ticketCost : (o.forEach((function(e) {
      t += e.tickInfo.ticketCost
    })), t = this.isDecimal(t) ? Number(t.toFixed(2)) : t) : t = Number((i.cost * o.length).toFixed(2)), this.setData({
      allCost: t
    })
  },
  isUseChange: function(t) {
    var e = this,
      o = this.data.isUse;
    t.detail.value;
    console.log("value"), this.setData({
      isUse: !o
    }, (function() {
      e.data.isUse && e.setData({
        useType: 2
      })
    }))
  },
  changeUseType: function(t) {
    var e = t.currentTarget.dataset.value,
      o = this.data.useType;
    this.setData({
      useType: o == e ? 0 : e
    })
  },
  showCouponList: function(t) {
    var e = this.data,
      o = e.showCoupon,
      i = e.useType;
    this.setData({
      showCoupon: !o,
      isUse: 2 == i
    }, (function() {}))
  },
  reloadContactsData: function() {
    this.getRealNameData(this)
  },
  getImgCode: function() {
    var t = this;
    a = (new Date).getTime(), this.setData({
      imgCode: ""
    }), (0, o.showLoading)(), (0, e.activityQueryImgCode)().then((function(e) {
      if ((0, o.hideLoading)(), 200 == e.code) {
        var i = e.data.replace(/[\r\n]/g, "");
        t.setData({
          captchaImgBase64: i
        })
      } else a = 0, wx.showToast({
        title: e.msg,
        icon: "none"
      })
    })).catch((function(t) {
      a = 0, (0, o.hideLoading)(), console.error("验证码失败" + t)
    }))
  },
  captchaClick: function(t) {
    (new Date).getTime() - a > 3e3 ? this.getImgCode() : (0, o.toast)("操作太频繁，请稍后再试")
  },
  toDetail: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  addp: function(t) {
    (0, o.modalWithCancel)("请先进行实名认证", (function() {
      (0, o.navigateTo)("../contacts/realNameCertification")
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
    var n = this;
    (0, o.showLoading)();
    var a = this.data,
      s = a.imgCode,
      c = a.detail,
      r = a.contactList;
    a.allCost;
    if (s) {
      var u = t(t({}, c.submitObj), {}, {
        imgCode: s
      });
      delete u.vipInfo, "ACT0304" == c.submitObj.discountType && (u.contactList = r.map((function(e) {
        return e.isVol ? t(t({}, e), {}, {
          discountType: "ACT0304"
        }) : e
      }))), "ACT0303" == c.submitObj.discountType && (u.contactList = r.map((function(e) {
        return 1 == e.myself || 1 == e.isPartyMember ? t(t({}, e), {}, {
          discountType: "ACT0303"
        }) : e
      }))), "ACT0302" == c.submitObj.discountType && (delete u.voucherNum, u.contactList = r.map((function(e) {
        return 1 == e.myself || 1 == e.isPartyMember ? t(t({}, e), {}, {
          discountType: "ACT0302",
          voucherNum: e.coupon
        }) : e
      })), 1 == c.ticketTypeEnable && 1 == r[0].tickInfo.isPackage && (u.voucherNum = c.coupon)), "ACT0301" == c.submitObj.discountType && (u.contactList = r.map((function(e) {
        return t(t({}, e), {}, {
          discountType: "ACT0301"
        })
      }))), 1 == c.ticketTypeEnable && (u.contactList = u.contactList.map((function(e) {
        return delete e.tickInfo, t(t({}, e), {}, {
          ticketTypeId: e.ticketId
        })
      }))), (0, e.saveForSubmitActivity)(u).then((function(t) {
        if ((0, o.hideLoading)(), 200 == t.code) {
          var e = t.data,
            a = {
              num: e.orderNum,
              start: c.startTime,
              end: c.endTime,
              tip: c.attention,
              img: e.photoUrl,
              orderListId: e.orderListId
            };
          if (1 == c.activityType) {
            var s, u = null === (s = c.ticktDetail.reserveTime) || void 0 === s ? void 0 : s.split("-");
            a.start = c.ticktDetail.reserveDate + " " + u[0], a.end = c.ticktDetail.reserveDate + " " + u[1]
          }
          var d = encodeURIComponent(JSON.stringify({
            detail: c,
            visitList: r,
            orderId: e.orderListId,
            dataObj: a,
            expireTime: e.expireTime,
            orderCost: e.orderCost,
            discountCost: e.discountCost
          }));
          if (e.orderCost && 0 != e.orderCost && 0 != e.discountCost)(0, i.requestActivitySubscribeMessage)("./order?data=".concat(d));
          else {
            var l = encodeURIComponent(JSON.stringify(a));
            (0, i.requestActivitySubscribeMessage)("./appointSuccess?data=".concat(l))
          }
        } else n.setData({
          imgCode: ""
        }, (function() {
          n.getImgCode()
        })), (0, o.modal)(t.msg)
      })).catch((function(t) {
        (0, o.hideLoading)(), console.error(t)
      }))
    } else(0, o.toast)("请输入验证码")
  },
  showElseTicket: function() {
    var e = this.data.detail,
      o = e.ticketTypeList.map((function(e) {
        return e.sel ? e : t(t({}, e), {}, {
          open: !0
        })
      }));
    this.setData({
      detail: t(t({}, e), {}, {
        ticketTypeList: o
      }),
      openElse: !0
    })
  },
  closeElseTicket: function(e) {
    var o = this,
      i = e.currentTarget.dataset.id,
      n = this.data,
      a = n.detail,
      s = n.selectedContactsArr;
    if (s.filter((function(t) {
        return t.ticketId == i
      })).length > 0) wx.showModal({
      cancelColor: "cancelColor",
      cancelText: "取消",
      confirmColor: "confirmColor",
      confirmText: "确定",
      content: "当前票种已添加参观者，收起将会清除该票种参观者",
      success: function(e) {
        var n = s.filter((function(t) {
            return t.ticketId !== i
          })),
          c = a.ticketTypeList.map((function(t) {
            return t.open && (t.open = !1), t
          })),
          r = t(t({}, a), {}, {
            ticketTypeList: c
          });
        o.setData({
          selectedContactsArr: n,
          openElse: !1,
          detail: r
        })
      },
      fail: function(t) {},
      complete: function(t) {}
    });
    else {
      var c = a.ticketTypeList.map((function(t) {
          return t.open && (t.open = !1), t
        })),
        r = t(t({}, a), {}, {
          ticketTypeList: c
        });
      this.setData({
        openElse: !1,
        detail: r
      })
    }
  },
  delVisit: function(t) {
    var e = this,
      o = t.currentTarget.dataset.id,
      i = this.data.selectedContactsArr;
    console.log("selectedContactsArr", i);
    var n = i.filter((function(t) {
      return t.customerContactId !== o
    }));
    this.setData({
      selectedContactsArr: n
    }, (function() {
      1 == e.data.detail.vipDiscountEnable && e.getGreat()
    }))
  }
});