var e, t = require("../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  i = require("../../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  n = (e = require("../../../04BA0E47AD7FA6DF62DC664011540E96.js")) && e.__esModule ? e : {
    default: e
  };
Page({
  data: {
    loading: !0
  },
  onLoad: function(e) {
    this.getOrderDetailData(e.id)
  },
  getOrderDetailData: function(e) {
    var o = this;
    (0, a.getTrialProjectOrderDetail)(e).then((function(e) {
      if (wx.hideNavigationBarLoading(), wx.hideLoading(), 200 == e.code) {
        var a = e.data;
        a.exhTrialOrderItemList.forEach((function(e) {
          e.selected = !1, 0 == e.reserveStatus ? e.orderStatusImg = "../../../images/center/daizhifu.png" : 1 == e.reserveStatus ? e.orderStatusImg = "../../../images/center/yiyuyue.png" : 2 == e.reserveStatus || 5 == e.reserveStatus ? e.orderStatusImg = "../../../images/center/yiquxiao.png" : 3 == e.reserveStatus ? e.orderStatusImg = "../../../images/center/yishiyong.png" : 4 == e.reserveStatus ? e.orderStatusImg = "../../../images/center/yiguoqi.png" : console.error("子订单未知状态，".concat(e.name, "，").concat(e.reserveStatus))
        })), (0, n.default)(a.exhTrialOrder.orderNo, "canvas0"), o.setData(t(t({}, a), {}, {
          loading: !1
        }))
      } else(0, r.showWarningToast)(e, "获取订单失败")
    })).catch((function(e) {
      console.error("获取订单异常", e), (0, i.modal)("获取订单异常", (function() {
        wx.navigateBack()
      }))
    }))
  },
  backHomeBtnClick: function() {
    wx.reLaunch({
      url: "../../index/index"
    })
  },
  orderItemClick: function(e) {
    var t = parseInt(e.currentTarget.dataset.index),
      r = this.data.exhTrialOrderItemList;
    r[t].selected = !r[t].selected, this.setData({
      exhTrialOrderItemList: r
    })
  },
  cancelBtnClick: function() {
    var e, t, n = this,
      o = null === (e = this.data.exhTrialOrderItemList) || void 0 === e ? void 0 : e.filter((function(e) {
        return e.selected
      }));
    if (null == o || 0 != o.length)
      if ((t = o.filter((function(e) {
          return 2 == e.reserveStatus || 5 == e.reserveStatus
        })).map((function(e) {
          return e.visitorName
        }))).length > 0)(0, i.modal)("【".concat(t.join("、"), "】的预约已经取消，无法再取消"));
      else if ((t = o.filter((function(e) {
        return 3 == e.reserveStatus
      })).map((function(e) {
        return e.visitorName
      }))).length > 0)(0, i.modal)("【".concat(t.join("、"), "】的设备已经领用，无法取消"));
    else {
      var s = o.map((function(e) {
          return e.visitorName
        })).join("、"),
        c = {
          orderId: this.data.exhTrialOrder.orderId,
          orderItemIdList: o.map((function(e) {
            return e.orderItemId
          }))
        };
      (0, i.modalWithCancel)("确定取消【".concat(s, "】的体验项目预约吗？"), (function() {
        (0, a.cancelTrialProjectOrder)(c).then((function(e) {
          (0, i.hideLoading)(), 200 == e.code ? (0, i.modal)("取消成功！", (function() {
            n.getOrderDetailData(n.data.exhTrialOrder.orderId);
            var e = getCurrentPages(),
              t = e[e.length - 2];
            null != t && null != t.reloadData && t.reloadData(6)
          })) : (0, i.toast)(e.msg)
        })).catch((function(e) {
          (0, r.defaultCatch)(e, "取消异常"), console.error("取消失败 " + e)
        }))
      }))
    } else(0, i.modal)("请选择需要取消的记录")
  },
  noticeClick: function() {
    var e = {
        exhTrialProject: {
          reserveInformation: this.data.exhTrialProject.useInformation
        }
      },
      t = encodeURIComponent(JSON.stringify(e));
    (0, i.navigateTo)("notice?noticeType=2&info=".concat(t))
  }
});