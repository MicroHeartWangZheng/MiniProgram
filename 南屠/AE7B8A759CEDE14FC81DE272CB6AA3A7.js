var t = require("./@babel/runtime/helpers/regeneratorRuntime.js"),
  e = require("./@babel/runtime/helpers/asyncToGenerator.js");
require("E6064C639CEDE14F806024649ACAA3A7.js");
var r, n = require("302F12419CEDE14F56497A46F35AA3A7.js").createStore({
  state: {
    isDisAllowScroll: !1,
    indexShowDialog: !0,
    indexIsGray: !1,
    versioncontrol: 1,
    formData: null,
    indexAuditResultShowDialog: !0
  },
  mutations: {
    SET_STATE: function(t, e) {
      t[e.key] = e.value
    },
    SHOW_TIP: function(t, e) {
      t.globalTip = e, t.globalTipFlag = !t.globalTipFlag
    },
    SET_FORMDATA: function(t, e) {
      t.formData = e
    }
  },
  getters: {
    currentTestValue: function(t) {
      return t.testState
    },
    currentCheckPointVo: function(t) {
      return t.checkPointVo
    },
    currentTaskId: function(t) {
      return t.taskId
    }
  },
  actions: {
    setStateSync: (r = e(t().mark((function e(r, n) {
      var o;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return o = r.commit, r.state, t.next = 3, new Promise((function(t, e) {
              o("SET_STATE", n), t()
            }));
          case 3:
            return t.abrupt("return", t.sent);
          case 4:
          case "end":
            return t.stop()
        }
      }), e)
    }))), function(t, e) {
      return r.apply(this, arguments)
    }),
    setState: function(t, e) {
      var r = t.commit;
      t.state;
      r("SET_STATE", e)
    },
    showTip: function(t, e) {
      var r = t.commit;
      t.state;
      r("SHOW_TIP", e)
    },
    setFormData: function(t, e) {
      var r = t.commit;
      t.state;
      r("SET_FORMDATA", e)
    }
  }
});
exports.store = n;