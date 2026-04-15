var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");
Page({
  behaviors: [e.languageBehaviors],
  data: {
    allData: [{
      title: "场馆介绍（Introduction）"
    }, {
      title: "开放信息（Public Information）"
    }, {
      title: "入场参观（Admission）"
    }, {
      title: "服务指南（Public Services）"
    }, {
      title: "注意事项（Notice to Visitors）"
    }, {
      title: "交通公交（Getting Here）"
    }, {
      title: "投诉建议（Complaints and suggestions）"
    }, {
      title: "常见问题（FAQ）"
    }]
  },
  onLoad: function() {
    var e = this;
    (0, a.showLoading)(), (0, t.querySinglePageInfo)("VisitGuide").then((function(n) {
      if ((0, a.hideLoading)(), 200 == n.code) {
        var i = e.data.allData;
        i[0].content = n.data.introduction, i[1].content = n.data.openInfo, i[2].content = n.data.guide, i[3].content = n.data.service, i[4].content = n.data.matters, i[5].content = n.data.route, i[6].content = n.data.complaint, i[7].content = n.data.problem, i.forEach((function(t) {
          return t.expanded = !1
        })), e.setData({
          allData: i
        })
      } else(0, t.showWarningToast)(n, "获取参观指南失败")
    })).catch((function(a) {
      (0, t.defaultCatch)(a, "获取参观指南失败")
    }))
  },
  itemClick: function(t) {
    var a = parseInt(t.currentTarget.dataset.index),
      e = this.data.allData;
    e[a].expanded = !e[a].expanded, this.setData({
      allData: e
    })
  }
});