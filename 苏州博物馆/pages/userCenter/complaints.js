var t = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  a = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js");
Page({
  data: {
    inputData: {}
  },
  onLoad: function(t) {},
  inputChange: function(t) {
    var a = this.data.inputData,
      n = t.detail,
      i = n.key,
      e = n.value;
    a[i] = e, this.setData({
      inputData: a
    })
  },
  btnClick: function() {
    var n = this;
    ! function(t, a) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".validate-field",
        i = t.selectAllComponents(n),
        e = [];
      i.forEach((function(t) {
        var a = t.properties;
        a && !0 === a.notNull && (void 0 !== a.key && null !== a.key ? e.push(a.key) : console.warn("有组件设置了notNull但是缺少key属性"))
      })), console.log("必填项：", e);
      for (var o = 0; o < e.length; o++) {
        var r = e[o],
          u = t.data.inputData;
        if (null == u[r] || "" == u[r].toString().replace(/ /g, "")) return void t.setData({
          errorInput: r
        })
      }
      a && a()
    }(this, (function() {
      (0, a.showLoading)();
      var i = n.data.inputData;
      (0, t.complaintsSuggestionsSave)(i).then((function(n) {
        (0, a.hideLoading)(), 200 == n.code ? (0, a.back)("提交成功") : (0, t.showWarningToast)(n, "提交失败")
      })).catch((function(a) {
        (0, t.defaultCatch)(a, "提交失败")
      }))
    }))
  }
});