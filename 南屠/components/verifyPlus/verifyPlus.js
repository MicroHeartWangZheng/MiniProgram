var t = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  s = {
    name: "verifyPlus",
    props: {},
    data: function() {
      return {
        idePicture: "",
        isRight: null,
        a: 0,
        b: 0,
        symbol: 1,
        answer: -1,
        res: null,
        placeholderStyle: "font-size:28rpx;color:#B5B5B6;",
        styles: {
          color: "#2C2C2C",
          backgroundColor: "#F9F9F9",
          disableColor: "#F7F6F6",
          borderColor: "#F9F9F9"
        }
      }
    },
    mounted: function() {
      this.init()
    },
    methods: {
      init: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          s = Math.round(11 * Math.random() + 1),
          i = this.$settings.verifyImg + "plus2/" + s + ".png?t=" + (new Date).getTime();
        this.idePicture = i;
        var n = [-1, 0, 1];
        n.sort((function() {
          return Math.random() - .5
        })), this.symbol = n[0], 1 === t ? this.handleArithmetiLessThanTwenty() : 2 === t && this.handleArithmetiLessThanHundred()
      },
      handleArithmetiLessThanHundred: function() {
        if (0 == this.symbol) {
          var t = Math.round(30 * Math.random() + 1),
            s = Math.floor(100 / t),
            i = Math.round(Math.random() * s);
          this.a = t, this.b = i, this.answer = Math.round(t * i)
        } else if (1 == this.symbol) {
          var n = Math.round(80 * Math.random() + 1),
            h = Math.floor(100 - n),
            a = Math.round(Math.random() * h);
          this.a = n > a ? n : a, this.b = n <= a ? n : a, this.answer = Math.round(this.a + this.b * this.symbol)
        } else if (-1 == this.symbol) {
          var o = Math.round(98 * Math.random() + 1),
            r = Math.round(98 * Math.random() + 1);
          this.a = o > r ? o : r, this.b = o <= r ? o : r, this.answer = Math.round(this.a + this.b * this.symbol)
        }
      },
      handleArithmetiLessThanTwenty: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20;
        if (0 == this.symbol) {
          var s = Math.round(Math.random() * (t / 2) + 1),
            i = Math.floor(t / s),
            n = Math.round(Math.random() * i);
          this.a = s, this.b = n, this.answer = Math.round(s * n)
        } else if (1 == this.symbol) {
          var h = Math.round(16 * Math.random() + 1),
            a = Math.floor(t - h),
            o = Math.round(Math.random() * a);
          this.a = h > o ? h : o, this.b = h <= o ? h : o, this.answer = Math.round(this.a + this.b * this.symbol)
        } else if (-1 == this.symbol) {
          var r = Math.round(16 * Math.random() + 1),
            e = Math.round(16 * Math.random() + 1);
          this.a = r > e ? r : e, this.b = r <= e ? r : e, this.answer = Math.round(this.a + this.b * this.symbol)
        }
      },
      handleArithmetiLessThanTen: function() {
        if (0 == this.symbol) {
          var t = Math.round(5 * Math.random() + 1),
            s = Math.floor(10 / t),
            i = Math.round(Math.random() * s);
          this.a = t, this.b = i, this.answer = Math.round(t * i)
        } else if (1 == this.symbol) {
          var n = Math.round(4 * Math.random() + 1),
            h = Math.floor(10 - n),
            a = Math.round(Math.random() * h);
          this.a = n > a ? n : a, this.b = n <= a ? n : a, this.answer = Math.round(this.a + this.b * this.symbol)
        } else if (-1 == this.symbol) {
          var o = Math.round(8 * Math.random() + 1),
            r = Math.round(8 * Math.random() + 1);
          this.a = o > r ? o : r, this.b = o <= r ? o : r, this.answer = Math.round(this.a + this.b * this.symbol)
        }
      },
      submit: function() {
        this.isRight || (this.res || 0 === this.res ? this.res == this.answer ? (this.$emit("afterAnswer"), this.isRight = !0) : (this.isRight = !1, this.res = null, this.init()) : t.index.showToast({
          title: "请输入计算结果",
          icon: "none"
        }))
      }
    }
  };
Array || (t.resolveComponent("uni-icons") + t.resolveComponent("uni-easyinput"))(), Math || (function() {
  return "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js"
} + function() {
  return "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js"
})();
var i = t._export_sfc(s, [
  ["render", function(s, i, n, h, a, o) {
    return t.e({
      a: a.idePicture,
      b: !1 === a.isRight
    }, !1 === a.isRight ? {
      c: t.p({
        type: "closeempty",
        size: "56rpx",
        color: "#fff"
      })
    } : {}, {
      d: !0 === a.isRight
    }, (a.isRight, {}), {
      e: t.t(a.a),
      f: t.t(0 == a.symbol ? "X" : 1 == a.symbol ? "+" : "-"),
      g: t.t(a.b),
      h: t.o((function(t) {
        return a.isRight = null
      })),
      i: t.o((function(t) {
        return a.res = t
      })),
      j: t.p({
        styles: a.styles,
        placeholderStyle: a.placeholderStyle,
        inputBorder: !1,
        clearable: !1,
        disabled: a.isRight,
        errorMessage: !0,
        placeholder: "请输入上图计算结果",
        modelValue: a.res
      }),
      k: t.t(a.isRight ? "预约中，请等待…" : "确定"),
      l: a.isRight ? 1 : "",
      m: t.o((function() {
        return o.submit && o.submit.apply(o, arguments)
      }))
    })
  }],
  ["__scopeId", "data-v-f35ffadc"]
]);
wx.createComponent(i);