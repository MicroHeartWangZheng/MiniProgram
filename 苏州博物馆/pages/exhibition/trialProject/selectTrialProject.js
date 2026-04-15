var t = require("../../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  e = require("../../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js"),
  i = require("../../../3D59DF82AD7FA6DF5B3FB785C1340E96.js");
Component({
  data: {
    info: {},
    trialProjectList: [],
    selectedProjectIndex: -1,
    mainUserIndex: -1,
    totalPrice: 0
  },
  observers: {
    "info.customerDataList, selectedProjectIndex": function(t, e) {
      t.length > 0 && e >= 0 && this.setData({
        totalPrice: t.filter((function(t) {
          return t.checked
        })).length * this.data.trialProjectList[e].cost
      })
    }
  },
  methods: {
    onLoad: function(t) {
      console.log(t), this.setData({
        info: JSON.parse(decodeURIComponent(t.info))
      }), this.getList()
    },
    getList: function() {
      var i = this;
      (0, e.getReserveProject)(this.data.info.exhId, this.data.info.reserveDate).then((function(e) {
        var a;
        200 == e.code ? i.setData({
          trialProjectList: e.data,
          selectedProjectIndex: (null === (a = e.data[0]) || void 0 === a ? void 0 : a.surplusNum) > 0 ? 0 : -1
        }) : (0, t.showWarningToast)(e, "获取导览设备失败")
      })).catch((function(e) {
        (0, t.defaultCatch)(e, "获取导览设备异常")
      }))
    },
    projectClick: function(t) {
      var e = parseInt(t.currentTarget.dataset.index);
      this.data.trialProjectList[e].surplusNum > 0 && e != this.data.selectedProjectIndex && this.setData({
        selectedProjectIndex: e
      })
    },
    userClick: function(t) {
      var e = parseInt(t.currentTarget.dataset.index),
        i = this.data.info.customerDataList;
      i[e].checked = !i[e].checked, this.setData({
        "info.customerDataList": i
      })
    },
    hideCouponList: function() {
      this.setData({
        showCoupon: !1
      })
    },
    mainUserClick: function(t) {
      var e = t.currentTarget.dataset.index;
      this.setData({
        mainUserIndex: e
      })
    },
    submitClick: function() {
      var a = this.data.selectedProjectIndex;
      if (-1 != a) {
        var r = this.data.mainUserIndex;
        if (-1 != r) {
          var s = this.data.info,
            o = s.customerDataList.filter((function(t) {
              return t.checked
            })).map((function(t) {
              return t.orderVisitId
            }));
          if (0 != o.length) {
            var n = {
              displayInfoId: s.exhId,
              orderVisitorId: s.customerDataList[r].orderVisitId,
              orderVisitorIdList: o,
              source: "EXH0305",
              trialProjectId: this.data.trialProjectList[a].trialProjectId
            };
            (0, i.showLoading)(), (0, e.submitOrder)(n).then((function(t) {
              if ((0, i.hideLoading)(), 200 == t.code && null != t.data) {
                var e = t.data;
                e.exhTrialProject.useInformation = null, (0, i.navigateTo)("notice?noticeType=1&info=" + encodeURIComponent(JSON.stringify(e)))
              } else(0, i.modal)("提交失败，" + t.msg)
            })).catch((function(e) {
              (0, t.defaultCatch)(e, "提交异常")
            }))
          } else(0, i.toast)("请选择观众")
        } else(0, i.toast)("请选择领用人")
      } else(0, i.toast)("请选择体验项目")
    }
  }
});