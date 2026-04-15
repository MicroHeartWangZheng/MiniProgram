var t = require("../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  a = (require("../../2745A015AD7FA6DF4123C81257040E96.js"), require("../../60F0D8E6AD7FA6DF0696B0E1A8A30E96.js")),
  d = require("../../22CF3566AD7FA6DF44A95D614D730E96.js");

function i(a, d) {
  "act" == a.data.from ? (0, e.getContactsArr2)(d).then((function(e) {
    wx.hideLoading();
    var d = e.filter((function(t) {
        return 1 === t.myself
      })),
      i = e.filter((function(t) {
        return 1 !== t.myself
      })),
      r = [].concat(t(d), t(i));
    n(a, r), wx.stopPullDownRefresh()
  })).catch((function(t) {
    console.error("获取联系人失败", t), (0, e.onlineLog)("获取联系人失败，" + JSON.stringify(t)), wx.stopPullDownRefresh()
  })) : (0, e.getContactsArr)(d).then((function(e) {
    var d = e.filter((function(t) {
        return 1 === t.myself
      })),
      i = e.filter((function(t) {
        return 1 !== t.myself
      })),
      r = [].concat(t(d), t(i));
    n(a, r), wx.stopPullDownRefresh()
  })).catch((function(t) {
    console.error("获取联系人失败", t), (0, e.onlineLog)("获取联系人失败，" + JSON.stringify(t)), wx.stopPullDownRefresh()
  }))
}

function n(t, e) {
  var a = t.data,
    d = a.ticketid,
    i = (a.ticketInfo, a.vipId, []),
    n = !1,
    r = [];
  e.forEach((function(e) {
    d ? (e.selected = -1 != t.data.selectDataArr.findIndex((function(t) {
      return t.customerContactId === e.customerContactId && t.ticketId == d
    })), r = t.data.selectDataArr.filter((function(t) {
      return t.ticketId !== d
    }))) : e.selected = -1 != t.data.selectDataArr.findIndex((function(t) {
      return t.customerContactId === e.customerContactId
    })), t.data.allAddChildArr != [] && null != t.data.allAddChildArr && (e.childSelected = d ? -1 != t.data.allAddChildArr.findIndex((function(t) {
      return t.customerContactId === e.customerContactId && t.ticketId == d
    })) : -1 != t.data.allAddChildArr.findIndex((function(t) {
      return t.customerContactId === e.customerContactId
    })), t.data.allAddChildArr.forEach((function(t) {
      e.customerContactId == t.customerContactId && (e.leaderContactId = t.leaderContactId)
    }))), t.data.selectDataArr.forEach((function(t) {
      t.customerContactId == e.customerContactId && 0 == e.isJuveniles && (e.addChildArr = t.addChildArr)
    })), 0 === e.isJuveniles && 1 != e.selected && (e.addChildArr = []), 1 === e.myself && (n = !0), 1 == e.isJuveniles && i.push(e)
  })), !0 === t.data.isAddChild && (e = i), t.setData({
    isHasSelf: n,
    allContactsArr: e,
    elseSelectArr: r
  })
}
Page({
  behaviors: [d.languageBehaviors],
  data: {
    allContactsArr: [],
    selectDataArr: [],
    allAddChildArr: [],
    maxCount: 3,
    isAddChild: !1,
    leaderContactId: "",
    addIndex: 999,
    isHasSelf: !1,
    isExhibitionChoose: !1,
    ticketid: "",
    ticketInfo: {},
    elseSelectArr: [],
    vipId: "",
    from: ""
  },
  onLoad: function(t) {
    var e = this,
      a = JSON.parse(t.data);
    console.log("dict", a), this.setData({
      maxCount: a.maxCount,
      selectDataArr: a.selectDataArr,
      allAddChildArr: a.allAddChildArr,
      isAddChild: a.isAddChild,
      leaderContactId: a.leaderContactId,
      addIndex: a.addIndex,
      isExhibitionChoose: a.isExhibitionChoose,
      ticketid: a.ticketid,
      ticketInfo: a.ticketInfo,
      vipId: a.vipId,
      from: a.from
    }, (function() {
      i(e, !1)
    }))
  },
  addContactsBtnClick: function() {
    if (this.data.allContactsArr.length >= a.contactsMaxCount) wx.showToast({
      title: "联系人已达上限",
      icon: "none"
    });
    else {
      var t = {
        isTeamAppoint: !1
      };
      t.isHasSelf = this.data.isHasSelf, t.isAdd = !0, t.isAddChild = this.data.isAddChild;
      var e = JSON.stringify(t);
      wx.navigateTo({
        url: "addContact?data=" + e
      })
    }
  },
  contactsClick: function(t) {
    var e = this,
      a = this.data,
      d = a.ticketInfo,
      i = a.ticketid,
      n = parseInt(t.currentTarget.dataset.index),
      r = this.data.allContactsArr,
      o = this.data.selectDataArr,
      s = this.data.elseSelectArr,
      c = r[n];
    if (1 != c.childSelected || c.leaderContactId == this.data.leaderContactId)
      if (0 == c.selected && o.length >= this.data.maxCount) {
        var l = "最多只能添加" + this.data.maxCount + "人！";
        wx.showToast({
          title: l,
          icon: "none",
          duration: 2e3
        })
      } else {
        var h = [];
        r.forEach((function(t, a) {
          n == a && (t.selected = !t.selected), 1 == t.selected && (1 == e.data.isAddChild && (t.leaderContactId = e.data.leaderContactId), i && (t.ticketId = i, t.tickInfo = d, s = s.filter((function(e) {
            return e.customerContactId !== t.customerContactId
          }))), h.push(t))
        }));
        h.length > 0 && "确认添加(" + h.length + ")人", this.setData({
          allContactsArr: r,
          selectDataArr: h,
          elseSelectArr: s
        })
      }
    else wx.showToast({
      title: "已被添加为携带儿童",
      icon: "none",
      duration: 2e3
    })
  },
  appointBtnClick: function() {
    var t = getCurrentPages(),
      e = t[t.length - 2];
    if (!0 === this.data.isAddChild) e.setData({
      addChildArr: this.data.selectDataArr,
      isAddChild: this.data.isAddChild,
      addIndex: this.data.addIndex
    }), wx.navigateBack({
      delta: 1,
      success: function() {
        e.addChildRefreshData()
      }
    });
    else {
      var a = this.data.selectDataArr.concat(this.data.elseSelectArr);
      console.log("prevPage", e), "exh" == this.data.from ? e.selectedContactBack(a) : ("act" == this.data.from && e.getGreat(), e.setData({
        selectedContactsArr: a
      })), wx.navigateBack({
        delta: 1
      })
    }
  },
  onPullDownRefresh: function() {
    this.reloadContactsData()
  },
  refreshPage: function() {
    wx.showLoading(), this.reloadContactsData()
  },
  reloadContactsData: function() {
    i(this, !0)
  }
});