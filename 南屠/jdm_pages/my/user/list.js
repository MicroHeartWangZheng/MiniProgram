var t = require("../../../@babel/runtime/helpers/objectSpread2"),
  e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  o = require("../../../46BCF2769CEDE14F20DA9A714F2AA3A7.js"),
  n = require("../../../99A56A709CEDE14FFFC30277932AA3A7.js"),
  a = require("../../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var r = {
  components: {
    confirmDialog: function() {
      return "../../../components/confirmDialog.js"
    },
    dialogWrap: function() {
      return "../../../components/dialogWrap.js"
    }
  },
  data: function() {
    return {
      isLoading: !1,
      isUserBlack: 1,
      options: [{
        text: "删除",
        style: {
          backgroundColor: "#dd524d"
        }
      }],
      editUrl: this.$utils.getImgUrl("my/edit.png"),
      imgUrl: this.$utils.getImgUrl("my/empty-contact.png"),
      list: [],
      searchParams: {
        page: 1,
        rows: 10
      },
      pages: 0,
      loadStatus: "loading",
      contentText: {
        contentdown: "轻轻上拉",
        contentrefresh: "努力加载中",
        contentnomore: "没有更多数据"
      },
      isSelectAddress: !1,
      isSelectAddressupPoint: !1,
      isOperate: !1,
      delId: null,
      id: null,
      selectIds: [],
      status: null,
      typeList: {
        1: "居民身份证",
        2: "港澳居民来往内地通行证",
        3: "台湾居民来往大陆通行证",
        4: "护照",
        5: "中华人民共和国外国人永久居留身份证"
      },
      form: {},
      timer: null,
      time: 5
    }
  },
  onReachBottom: function() {
    this.loadStatus = "loading", this.getPage()
  },
  onPullDownRefresh: function() {
    this.getPageOne()
  },
  onLoad: function(t) {
    t.page && (this.isSelectAddress = !0), t.id && (this.id = t.id), 1 == t.status && (this.status = t.status), t.ids && (this.selectIds = [t.ids])
  },
  unmounted: function() {
    clearTimeout(this.timer), s.index.$emit("userBack")
  },
  onShow: function() {
    this.getUserInfo(), this.getPageOne()
  },
  methods: {
    startDown: function() {
      var t = this;
      this.time = 5, clearTimeout(this.timer);
      ! function e() {
        t.time > 0 && (t.timer = setTimeout((function() {
          t.time--, e()
        }), 1e3))
      }()
    },
    getUserInfo: function() {
      var t = this;
      return i(e().mark((function i() {
        var o;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, n.loginGetUserInfo();
            case 2:
              1e3 == (o = e.sent).code && (s.index.setStorageSync("isUserInfo", !0), s.index.setStorageSync("userInfo", JSON.stringify(o.data)), t.isUserBlack = o.data.status);
            case 4:
            case "end":
              return e.stop()
          }
        }), i)
      })))()
    },
    saveSuccFc: function() {
      this.$refs.contactOperateRef.close(), this.getPageOne()
    },
    getPhone: function(t) {
      return t ? t.replace(t.substring(3, 9), "******") : "-"
    },
    changeFn: function(t, e) {
      var i = this;
      setDefault({
        id: e
      }).then((function(t) {
        1e3 == t.code && (s.index.showToast({
          title: "设置成功！",
          icon: "none"
        }), i.getPageOne())
      }))
    },
    onClick: function(t, e) {
      this.selectIds = [e.id]
    },
    change: function(t, e) {},
    getPageOne: function() {
      this.searchParams.page = 1, this.getpageList()
    },
    getPage: function() {
      this.searchParams.page = this.searchParams.page + 1, this.pages >= this.searchParams.page ? this.getpageList() : (this.loadStatus = "nomore", s.index.stopPullDownRefresh())
    },
    getpageList: function() {
      var e = this,
        i = t({}, this.searchParams);
      o.visitorList(i).then((function(t) {
        1e3 == t.code ? (t.data = t.data ? t.data : [], t.data.forEach((function(t) {
          if (t.visitorIdTypeName = e.typeList[t.visitorIdType], t.deleteEffectTime) {
            var i = new Date(t.deleteEffectTime),
              s = i.getMonth() + 1,
              o = i.getDate(),
              n = i.getHours(),
              a = i.getMinutes(),
              r = s < 10 ? "0".concat(s) : s,
              c = o < 10 ? "0".concat(o) : o,
              u = n < 10 ? "0".concat(n) : n,
              l = a < 10 ? "0".concat(a) : a;
            t.deleteEffectTime = "".concat(r, ".").concat(c, " ").concat(u, ":").concat(l)
          }
        })), 1 == e.searchParams.page ? e.list = t.data : e.list = e.list.concat(t.data), e.pages = t.data.pages, e.searchParams.page >= e.pages ? e.loadStatus = "nomore" : e.loadStatus = "loadmore") : s.index.showToast({
          title: t.msg,
          icon: "none",
          duration: 2e3
        })
      })).finally((function() {
        s.index.stopPullDownRefresh()
      }))
    },
    selectAddress: function(t) {},
    addContact: function() {
      var t = this;
      return i(e().mark((function i() {
        var o;
        return e().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (3 != t.isUserBlack) {
                e.next = 2;
                break
              }
              return e.abrupt("return");
            case 2:
              return e.next = 4, n.loginGetUserInfo();
            case 4:
              if (1e3 != (o = e.sent).code) {
                e.next = 13;
                break
              }
              if (2 != o.data.status) {
                e.next = 10;
                break
              }
              s.index.navigateTo({
                url: "/jdm_pages/my/user/info"
              }), e.next = 13;
              break;
            case 10:
              if (10 != t.list.length) {
                e.next = 12;
                break
              }
              return e.abrupt("return", void s.index.showToast({
                title: "观众最多添加十个",
                icon: "none"
              }));
            case 12:
              s.index.navigateTo({
                url: "/jdm_pages/my/user/info"
              });
            case 13:
            case "end":
              return e.stop()
          }
        }), i)
      })))()
    },
    del: function(t) {
      3 != this.isUserBlack ? (this.form = t, this.startDown(), this.$refs.dialogWrapRef.open()) : this.$refs.dialogWrapRef2.open()
    },
    confirm: function() {
      var t = this;
      this.time > 0 || this.isLoading || (this.isLoading = !0, o.visitorDel({
        visitorCode: this.form.visitorCode
      }).then((function(e) {
        1e3 == e.code ? (s.index.showToast({
          title: "操作成功！",
          icon: "none"
        }), t.$refs.dialogWrapRef.close(), t.getPageOne()) : (s.index.showToast({
          title: e.msg || "删除失败",
          icon: "none"
        }), t.$refs.dialogWrapRef.close())
      })).finally((function() {
        setTimeout((function() {
          t.isLoading = !1
        }), 1e3)
      })))
    },
    editContact: function(t) {
      3 != this.isUserBlack ? s.index.navigateTo({
        url: "/jdm_pages/my/user/info?data=".concat(JSON.stringify(t))
      }) : this.$refs.dialogWrapRef2.open()
    },
    delContact: function() {
      var t = this,
        e = {
          ids: this.selectIds
        };
      removeContact(e).then((function(e) {
        1e3 == e.code && (s.index.showToast({
          title: "删除成功！",
          icon: "none"
        }), t.closeDelDialog(), t.getPageOne())
      }))
    },
    closeDelDialog: function() {
      this.$refs.delContactRef.close()
    },
    sfzVerifiedSuccessfully: function(t) {
      return 1 == t.visitorIdType && 3 == t.sfzAuditStatus || (1 != t.visitorIdType || 3 == t.sfzAuditStatus) && 1 == t.visitorIdType && void 0
    }
  }
};
Array || (s.resolveComponent("page-head") + s.resolveComponent("uni-icons") + s.resolveComponent("Empty") + s.resolveComponent("uni-load-more") + s.resolveComponent("confirmDialog") + s.resolveComponent("dialogWrap"))(), Math || (function() {
  return "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js"
} + function() {
  return "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js"
})();
var c = s._export_sfc(r, [
  ["render", function(t, e, i, o, n, r) {
    var c = this;
    return s.e({
      a: s.p({
        title: "常用观众"
      }),
      b: n.list.length > 0
    }, n.list.length > 0 ? {
      c: s.f(n.list, (function(t, e, i) {
        return s.e({
          a: 3 != t.visitorStatus && t.specialType
        }, 3 != t.visitorStatus && t.specialType ? {
          b: s.t(1 == t.specialType ? "老年人" : 2 == t.specialType ? "献血荣誉证书持有者" : 3 == t.specialType ? "医务人员" : 4 == t.specialType ? "退役军人" : 5 == t.specialType || 8 == t.specialType ? "残障人士" : 6 == t.specialType ? "消防救援人员" : 7 == t.specialType || 9 == t.specialType ? "“三属”" : "")
        } : {}, {
          c: 6 == t.visitorTag && 3 != t.visitorStatus
        }, (6 == t.visitorTag && t.visitorStatus, {}), {
          d: s.t(t.visitorName || "-"),
          e: 3 == t.visitorStatus
        }, 3 == t.visitorStatus ? {} : t.differenceStr ? {
          g: s.t(t.differenceStr)
        } : {}, {
          f: t.differenceStr,
          h: s.t(t.visitorIdTypeName),
          i: s.t(t.visitorIdNo),
          j: 3 != t.visitorStatus && !(3 == t.visitorTag && 4 != t.auditStatus && 3 != t.visitorStatus)
        }, 3 == t.visitorStatus || 3 == t.visitorTag && 4 != t.auditStatus && 3 != t.visitorStatus ? {} : s.e({
          k: s.o((function(e) {
            return r.del(t)
          }), e),
          l: a._imports_0$8,
          m: 1 != t.editFlag
        }, 1 != t.editFlag ? {
          n: s.o((function(e) {
            return r.editContact(t)
          }), e),
          o: n.editUrl
        } : {}), {
          p: 2 == t.visitorStatus && 3 != t.visitorStatus
        }, (2 == t.visitorStatus && t.visitorStatus, {}), {
          q: 3 == t.visitorStatus
        }, 3 == t.visitorStatus ? {
          r: s.t(t.deleteEffectTimeStr)
        } : {}, {
          s: 3 == t.visitorTag && 4 != t.auditStatus && 3 != t.visitorStatus && 2 != t.visitorStatus
        }, (3 == t.visitorTag && 4 != t.auditStatus && 3 != t.visitorStatus && t.visitorStatus, {}), {
          t: 4 == t.auditStatus && 3 != t.visitorStatus && 3 == t.visitorTag
        }, 4 == t.auditStatus && 3 != t.visitorStatus && 3 == t.visitorTag ? {
          v: s.t(4 == t.sfzAuditStatus ? "实名验证失败" : "审核失败"),
          w: 4 == t.sfzAuditStatus ? 1 : ""
        } : {}, {
          x: (1 == t.visitorStatus || 4 == t.visitorStatus) && 1 == t.visitorIdType && 3 != t.visitorTag
        }, 1 != t.visitorStatus && 4 != t.visitorStatus || 1 != t.visitorIdType || 3 == t.visitorTag ? {} : {
          y: s.t(2 == t.sfzAuditStatus ? "待实名验证" : 4 == t.sfzAuditStatus ? "实名验证失败" : "")
        }, {
          z: t.rejectReasonType && 4 == t.auditStatus && 3 != t.visitorStatus && 3 == t.visitorTag
        }, t.rejectReasonType && 4 == t.auditStatus && 3 != t.visitorStatus && 3 == t.visitorTag ? {
          A: "56e9de20-1-" + i,
          B: s.p({
            type: "help-filled",
            size: "36rpx",
            color: "#C7AB7E"
          }),
          C: s.t("refuse_other" == t.rejectReasonType ? t.rejectReason : t.rejectReasonTypeName)
        } : {}, {
          D: s.o((function(e) {
            return r.onClick(e, t)
          }), e),
          E: s.o((function(e) {
            return r.change(e, t)
          }), e),
          F: t.isDel ? 1 : "",
          G: e
        })
      })),
      d: n.options
    } : {}, {
      e: 0 == n.list.length
    }, 0 == n.list.length ? {
      f: s.p({
        imgUrl: "imgUrl",
        tips: "暂无数据"
      })
    } : {}, {
      g: n.list.length > 0
    }, n.list.length > 0 ? {
      h: s.p({
        status: n.loadStatus,
        "content-text": n.contentText
      })
    } : {}, {
      i: 3 == n.isUserBlack ? 1 : "",
      j: s.o((function() {
        return r.addContact && r.addContact.apply(r, arguments)
      })),
      k: s.sr("delContactRef", "56e9de20-4"),
      l: s.o(r.delContact),
      m: s.p({
        cancelText: "我再想想",
        confirmText: "删除地址",
        title: "您确定要删除该联系人吗？",
        content: "删除后将无法恢复和查看联系人，确认删除联系人吗"
      }),
      n: a._imports_3,
      o: s.t(n.form ? n.form.deleteEffectDay : ""),
      p: s.o((function() {
        c.$refs.dialogWrapRef.close()
      })),
      q: s.t(n.isLoading ? "删除中..." : "确定"),
      r: s.t(n.time ? "（0".concat(n.time, "s）") : ""),
      s: n.time > 0 ? 1 : "",
      t: s.o((function() {
        return r.confirm && r.confirm.apply(r, arguments)
      })),
      v: s.sr("dialogWrapRef", "56e9de20-5"),
      w: s.p({
        position: "center",
        isMaskClick: !1
      }),
      x: a._imports_3,
      y: s.o((function() {
        c.$refs.dialogWrapRef2.close()
      })),
      z: s.sr("dialogWrapRef2", "56e9de20-6"),
      A: s.p({
        position: "center",
        isMaskClick: !1
      })
    })
  }],
  ["__scopeId", "data-v-56e9de20"]
]);
wx.createPage(c);