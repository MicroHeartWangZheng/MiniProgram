var a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  t = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = (require("../../FA9D4A90AD7FA6DF9CFB2297F7F30E96.js"), require("../../22CF3566AD7FA6DF44A95D614D730E96.js")),
  i = require("../../E83DACF5AD7FA6DF8E5BC4F28CD30E96.js");
Page({
  behaviors: [e.languageBehaviors],
  data: {
    list: [],
    pageNum: 1,
    allPage: 1,
    searchValue: "",
    guan_type: 0
  },
  onLoad: function(a) {
    this.getList()
  },
  search: function(a) {
    var t = this;
    console.log("e", a);
    var e = this.data.searchValue;
    a.detail.value && (e = a.detail.value), this.setData({
      searchValue: e,
      pageNum: 1
    }, (function() {
      t.getList()
    }))
  },
  searchInput: function(a) {
    this.setData({
      searchValue: a.detail.value
    })
  },
  getList: function() {
    var e = this;
    (0, t.showLoading)();
    var s = this.data,
      r = s.pageNum,
      n = s.list,
      o = s.searchValue;
    s.guan_type;
    (0, i.queryExhibition)(void 0, r, o).then((function(i) {
      var s;
      if ((0, t.hideLoading)(), 200 === i.code && (null === (s = i.data) || void 0 === s ? void 0 : s.records.length) > 0) {
        var o, l = null === (o = i.data) || void 0 === o ? void 0 : o.records;
        l.forEach((function(t) {
          t.displayPoster = t.displayPoster ? (0, a.fullImageUrlSaaS)(t.displayPoster) : "../../images/actappoint/defaultImg.jpg", t.time = null != t.endTime ? "".concat(t.startTime, "~").concat(t.endTime) : "".concat(t.startTime, " 开始")
        })), e.setData({
          list: r > 1 ? n.concat(l) : l,
          allPage: i.data.pages
        })
      } else 1 == r && e.setData({
        list: []
      })
    }))
  },
  itemClick: function(a) {
    var e = a.currentTarget.dataset.id;
    (0, t.navigateTo)("exhibitionDetail?id=" + e)
  },
  reloadData: function(a) {
    var t = this,
      e = this.data,
      i = e.allPage,
      s = e.pageNum;
    i > 1 && s < i && this.setData({
      pageNum: Number(s) + 1
    }, (function() {
      t.getList()
    }))
  },
  initData: function() {
    var a = this;
    this.data.pageNum > 1 && this.setData({
      pageNum: 1
    }, (function() {
      a.getList()
    }))
  },
  onReachBottom: function() {
    this.reloadData()
  }
});