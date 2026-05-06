var t = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = require("../../../../46BCF2769CEDE14F20DA9A714F2AA3A7.js"),
  a = require("../../../../42DF72329CEDE14F24B91A35674AA3A7.js");
require("../../../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var n = {
  components: {
    uniDatetimePicker: function() {
      return "../../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js"
    }
  },
  data: function() {
    return {
      atDate: null,
      dateValue: null,
      dateEnd: null,
      legendList: [],
      statementData: {
        storeDetailList: []
      },
      storeZD: {
        1: {
          name: "南京大屠杀馆史实展"
        },
        2: {
          name: "正义必胜 和平必胜 人民必胜中国战区反法西斯战争胜利暨审判日本战犯史实展"
        },
        3: {
          name: "南京利济巷慰安所旧址陈列馆"
        },
        4: {
          name: "纪念馆"
        }
      }
    }
  },
  mounted: function() {
    this.init()
  },
  methods: {
    init: function() {
      this.getDateEnd(), this.getData()
    },
    getData: function() {
      var a = this;
      t.index.showLoading({
        title: "加载中..."
      }), e.cameraStatisticsQueryDetail({
        dateTime: this.dateValue
      }).then((function(t) {
        if (1e3 == t.code) {
          a.dateValue != a.atDate && (t.data.hideRealTime = !0), a.statementData = t.data;
          var e = {};
          t.data.storeDetailList.forEach((function(t) {
            e[t.statusName || "未知"] = t.color || "#C7AB7E"
          }));
          var n = [];
          for (var i in e) n.push({
            name: i,
            color: e[i]
          });
          a.legendList = n
        }
      })).finally((function() {
        t.index.hideLoading()
      }))
    },
    getDate: function() {
      var t = new Date,
        e = t.getFullYear(),
        a = String(t.getMonth() + 1).padStart(2, "0"),
        n = String(t.getDate()).padStart(2, "0"),
        i = String(t.getHours()).padStart(2, "0"),
        r = String(t.getMinutes()).padStart(2, "0"),
        o = String(t.getSeconds()).padStart(2, "0");
      this.atDate = "".concat(e, "-").concat(a, "-").concat(n, " ").concat(i, ":").concat(r, ":").concat(o)
    },
    getDateEnd: function() {
      var t = new Date;
      t.getHours(), t.getMinutes(), t.getSeconds();
      var e = t.getFullYear(),
        a = String(t.getMonth() + 1).padStart(2, "0"),
        n = String(t.getDate()).padStart(2, "0");
      this.dateValue = "".concat(e, "-").concat(a, "-").concat(n), this.atDate = "".concat(e, "-").concat(a, "-").concat(n), this.dateEnd = this.dateValue
    },
    dateChange: function(t) {
      this.dateValue = t, this.getData()
    }
  }
};
Array || t.resolveComponent("uniDatetimePicker")();
var i = t._export_sfc(n, [
  ["render", function(e, n, i, r, o, s) {
    return {
      a: t.o(s.dateChange),
      b: t.o((function(t) {
        return o.dateValue = t
      })),
      c: t.p({
        type: "type",
        "return-type": "string",
        "clear-icon": !1,
        end: o.dateEnd,
        modelValue: o.dateValue
      }),
      d: a._imports_0$14,
      e: t.t(o.dateValue),
      f: a._imports_1$10,
      g: t.t(o.dateValue),
      h: a._imports_2$6,
      i: a._imports_3$2,
      j: t.o((function(t) {
        return s.getData()
      })),
      k: t.t(o.statementData.dayPassengerFlow),
      l: a._imports_4$1,
      m: t.t(o.statementData.monthPassengerFlow),
      n: a._imports_5$1,
      o: t.t(o.statementData.yearPassengerFlow),
      p: a._imports_6$1,
      q: t.t(o.statementData.historyPassengerFlow),
      r: a._imports_7$1,
      s: a._imports_8$1,
      t: a._imports_8$1,
      v: t.f(o.legendList, (function(e, a, n) {
        return {
          a: t.s("background-color: ".concat(e.color, ";")),
          b: t.t(e.name),
          c: a
        }
      })),
      w: t.f(o.statementData.storeDetailList, (function(e, a, n) {
        return t.e({
          a: t.t(o.storeZD[e.storeType].name),
          b: t.s("background-color: ".concat(e.color || "#C7AB7E", ";"))
        }, o.statementData.hideRealTime ? {} : {
          c: t.t(e.passengerStayCount)
        }, {
          d: t.t(e.passengerInCount),
          e: t.t(e.passengerOutCount),
          f: a
        })
      })),
      x: !o.statementData.hideRealTime,
      y: t.s("height: ".concat(o.statementData.hideRealTime ? "260" : "340", "rpx;"))
    }
  }],
  ["__scopeId", "data-v-63b660d0"]
]);
wx.createComponent(i);