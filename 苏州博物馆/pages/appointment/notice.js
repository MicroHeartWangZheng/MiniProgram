var t = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");

Page({
  behaviors: [a.languageBehaviors],
  data: {
    noticeHtml: "",
    agreed: !1
  },
  onLoad: function() {
    this._loadNotice()
  },
  /**
   * 请求后台发布的预约须知
   */
  _loadNotice: function() {
    var a = this,
      i = getApp().globalData.companyInfoId;
    i ? (0, t.showLoading)(), (0, e.queryPublishNotice)(i).then((function(e) {
      (0, t.hideLoading)(), 200 === e.code && e.data ? a.setData({
        noticeHtml: e.data.noticeContent || e.data.content || e.data.ruleValue || ""
      }) : (console.warn("queryPublishNotice", e), a.setData({
        noticeHtml: "<p>请阅读并遵守苏州博物馆参观预约相关规则。</p>"
      }))
    })).catch((function(e) {
      (0, t.hideLoading)(), console.error(e), a.setData({
        noticeHtml: "<p>须知内容加载失败，请稍后重试。</p>"
      })
    })) : (0, t.toast)("缺少场馆信息")
  },
  /**
   * 勾选已阅读
   */
  onAgreeChange: function(t) {
    this.setData({
      agreed: !!t.detail.value.length
    })
  },
  /**
   * 进入填写预约信息
   */
  onContinue: function() {
    this.data.agreed ? wx.navigateTo({
      url: "./sureInfo"
    }) : (0, t.toast)("请先勾选已阅读须知")
  }
});
