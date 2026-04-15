var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  e = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  n = require("mini-i18n");

function i(t) {
  (0, a.getContactsArr)(!0).then((function(a) {
    for (var e = !1, i = 0; i < a.length; i++)
      if (1 === a[i].myself) {
        e = !0;
        break
      } var o = a.filter((function(t) {
      return 0 == t.isPartyMember
    }));
    t.setData({
      addBtnStr: (0, n.t)("contactsList.add1", t.data.maxCount) + (0, n.t)("contactsList.add2", o.length),
      isHasSelf: e,
      contactsArr: a
    })
  })).catch((function(t) {
    (0, a.modal)("获取参观者失败，" + t.msg), console.error("获取参观者失败", t)
  }))
}
Page({
  behaviors: [e.languageBehaviors],
  data: {
    contactsArr: [],
    maxCount: 10,
    isHasSelf: !1,
    addBtnStr: "+ 添加参观者"
  },
  onLoad: function(t) {
    i(this)
  },
  addBtnClick: function(t) {
    if (this.data.contactsArr.filter((function(t) {
        return 0 == t.isPartyMember
      })) >= this.data.maxCount) wx.showToast({
      title: "人数已达上限",
      icon: "none"
    });
    else {
      var a = {
        isTeamAppoint: !1
      };
      a.isHasSelf = this.data.isHasSelf, a.isAdd = !0;
      var e = JSON.stringify(a);
      wx.navigateTo({
        url: "addContact?data=" + e
      })
    }
  },
  editeimgClick: function(t) {
    console.log("编辑按钮点击" + JSON.stringify(t.target.dataset.value));
    var a = t.target.dataset.value,
      e = {
        isedite: !0,
        isHasUser: !0,
        customerContactId: a.customerContactId,
        countryTypeStr: a.nationalityName,
        countryTypeIdStr: a.nationality
      },
      n = JSON.stringify(e);
    console.log(n), wx.navigateTo({
      url: "editContact?data=" + n
    })
  },
  deleteClick: function(e) {
    var n = this;
    console.log("删除按钮点击" + e.target.dataset.value);
    var o = e.target.dataset.value;
    (0, a.modalWithCancel)("确定删除吗？", (function() {
      (0, t.customerContactDeleteById)(o).then((function(t) {
        200 == t.code ? (wx.showToast({
          title: "删除成功！"
        }), i(n)) : wx.showToast({
          title: t.msg
        })
      })).catch((function(t) {
        console.error("删除联系人失败" + t)
      }))
    }))
  },
  reloadContactsData: function() {
    i(this)
  }
});