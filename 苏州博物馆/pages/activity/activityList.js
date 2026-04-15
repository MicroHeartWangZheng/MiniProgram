var e, t = require("../../@babel/runtime/helpers/objectSpread2"),
  a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  i = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  r = (e = require("../../E5529FA7AD7FA6DF8334F7A08A930E96.js")) && e.__esModule ? e : {
    default: e
  },
  n = require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"),
  s = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");
require("mini-i18n");
Page({
  behaviors: [s.languageBehaviors],
  data: {
    activity: [],
    pageNum: 1,
    allPage: 1,
    searchValue: "",
    type: -1,
    guan_type: 0
  },
  onLoad: function(e) {
    this.getList()
  },
  switchGuan: function(e) {
    var t = this,
      a = e.currentTarget.dataset.guan;
    this.setData({
      guan_type: a,
      pageNum: 1
    }, (function() {
      t.getList()
    }))
  },
  searchAct: function(e) {
    var t = this;
    console.log("e", e);
    var a = this.data.searchValue;
    e.detail.value && (a = e.detail.value), this.setData({
      searchValue: a,
      pageNum: 1
    }, (function() {
      t.getList()
    }))
  },
  searchInput: function(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },
  selType: function(e) {
    var t = this,
      a = e.currentTarget.dataset.type;
    this.setData({
      type: a,
      pageNum: 1
    }, (function() {
      t.getList()
    }))
  },
  getList: function() {
    var e = this;
    (0, i.showLoading)();
    var s = this.data,
      u = s.pageNum,
      c = s.activity,
      o = s.searchValue,
      l = s.type,
      g = s.guan_type;
    (0, a.queryActivityList)(u, o, l < 0 ? "" : l, 0 == g ? n.companyInfoId1 : n.companyInfoId2).then((function(n) {
      var s;
      if ((0, i.hideLoading)(), 200 === n.code && (null === (s = n.data) || void 0 === s ? void 0 : s.records.length) > 0) {
        var o = n.data.records.map((function(e) {
          var n = e.coverImage ? (0, a.fullImageUrlSaaS)(e.coverImage) : "../../images/actappoint/defaultImg.jpg",
            s = e.mainType ? "".concat(e.startTime, "~").concat(e.endTime) : (0, i.formatTimeInterval)(e.startTime, e.endTime),
            u = "";
          return e.reserveStartTime && e.reserveEndTime && (u = (0, i.formatTimeInterval)(e.reserveStartTime, e.reserveEndTime)), (0, r.default)(e), t(t({}, e), {}, {
            coverImage: n,
            time: s,
            reserveTime: u
          })
        }));
        e.setData({
          activity: u > 1 ? c.concat(o) : o,
          allPage: n.data.pages
        })
      } else 1 == u && e.setData({
        activity: []
      })
    }))
  },
  activityDetail: function(e) {
    var t = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "activityDetail?id=".concat(t)
    })
  },
  reloadData: function(e) {
    var t = this,
      a = this.data,
      i = a.allPage,
      r = a.pageNum;
    i > 1 && r < i && this.setData({
      pageNum: Number(r) + 1
    }, (function() {
      t.getList()
    }))
  },
  initData: function() {
    var e = this;
    this.data.pageNum > 1 && this.setData({
      pageNum: 1
    }, (function() {
      e.getList()
    }))
  },
  onReachBottom: function() {
    this.reloadData()
  }
});