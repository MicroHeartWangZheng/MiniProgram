var t = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js");
Page({
  data: {},
  onLoad: function(t) {
    this.setData(JSON.parse(decodeURIComponent(t.data)))
  },
  confirmBtnClick: function() {
    var i = this;
    (0, e.showLoading)();
    var r = {
      orderId: this.data.info.orderId,
      orderVisitIdList: this.data.ticketAndContacts.contactsArr.map((function(t) {
        return t.orderVisitId
      })),
      ticketId: this.data.ticketId,
      reserveDate: this.data.reserveDate,
      reserveTime: this.data.reserveTime,
      imgCode: "",
      isSubmit: "1"
    };
    console.log("兑换", r), (0, t.exchangeTicket)(r).then((function(t) {
      (0, e.hideLoading)(), 200 == t.code ? (0, e.modal)("兑换成功", (function() {
        wx.redirectTo({
          url: "exhibitionApplintDetail?orderListId=" + i.data.info.orderId
        })
      })) : (0, e.modal)("兑换失败，" + t.msg)
    })).catch((function(t) {
      (0, e.hideLoading)(), (0, e.modal)("兑换失败，请检查网络并重试"), (0, e.onlineLog)("兑换失败，" + JSON.stringify(t))
    }))
  }
});