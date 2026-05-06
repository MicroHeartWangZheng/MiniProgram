var t = require("../../@babel/runtime/helpers/defineProperty"),
  i = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  n = {
    props: {},
    data: function() {
      var i;
      return t(i = {
        isRight: null,
        maxLeft: 0,
        allowDrag: !1,
        showTrinsition: !1,
        startX: 0,
        nowX: 0,
        questionInfo: {
          idePicture: "",
          diffL: 3,
          diffR: 3,
          correctOption: {
            originalWidth: 80,
            originalHeight: 80,
            left: 80,
            top: 20
          }
        },
        sLeft: 0,
        diffL: 0,
        diffR: 0,
        windowInfo: null,
        isInit: !1,
        nowPosition: -5,
        sliderStyle: {
          width: "10%",
          height: "10%",
          top: "40%",
          left: "60%"
        },
        sliderStyleFail: {
          width: "10%",
          height: "10%",
          top: "40%",
          left: "60%"
        },
        sliderImgStyle: {
          width: "10%",
          height: "10%",
          top: "40%",
          left: "20%"
        },
        imgStyle: {
          left: "-600%",
          top: "-400%"
        },
        playState: ""
      }, "isRight", 0), t(i, "failImg", this.$utils.getImgUrl("play2/task/differ-error.png")), t(i, "slideSucc", this.$utils.getImgUrl("play2/wow-s.png")), t(i, "slideComBg", this.$utils.getImgUrl("appointment.png")), t(i, "btnBg", this.$utils.getImgUrl("play2/task/slide-btn.png")), i
    },
    unmounted: function() {
      i.index.$off("resetQuestion")
    },
    mounted: function() {
      this.init(), i.index.$on("resetQuestion", this.resetQuestion)
    },
    methods: {
      touchstart: function(t) {
        if (!(t.touches.length > 1 || 1 == this.isRight)) {
          if (null === this.allowDrag) return this.isRight = null, this.allowDrag = !1, this.showTrinsition = !0, this.nowX = 0, void this.init();
          this.showTrinsition = !1, this.allowDrag = !0;
          var i = t.touches[0].clientX - t.currentTarget.offsetLeft;
          this.startX = i
        }
      },
      touchcancel: function() {
        this.showTrinsition = !0, !0 === this.allowDrag && (this.allowDrag = null)
      },
      touchend: function() {
        !0 === this.allowDrag && (this.allowDrag = null), this.showTrinsition = !0
      },
      touchmove: function(t) {
        if (!(t.touches.length > 1) && this.allowDrag) {
          var i = t.changedTouches[0].clientX - this.startX;
          i - this.maxLeft >= 0 ? i = this.maxLeft : i <= 0 && (i = 0), this.nowX = i
        }
      },
      resetQuestion: function() {
        this.start()
      },
      close: function() {
        this.isRight = 0, this.$emit("closeRight")
      },
      start: function() {
        this.playState = "running", this.isRight = 0, this.$set(this.sliderImgStyle, "animationPlayState", "running")
      },
      confirm: function() {
        var t = this;
        this.playState = "paused", this.$set(this.sliderImgStyle, "animationPlayState", "paused"), i.index.createSelectorQuery().in(this).select("#slider").boundingClientRect((function(i) {
          var n = .1307 * t.windowInfo.windowWidth,
            e = t.windowInfo.windowWidth * (1 - .2614);
          t.nowPosition = (i.left - n) / e * 100;
          t.nowPosition + t.diffL >= t.sLeft && t.nowPosition - t.diffR <= t.sLeft ? (t.isRight = !0, t.$emit("afterAnswer")) : t.isRight = !1
        })).exec()
      },
      init: function() {
        var t = Math.round(11 * Math.random() + 1),
          n = this.$settings.verifyImg + "common2/" + t + ".png";
        this.$set(this.questionInfo, "idePicture", n);
        var e = this.questionInfo.correctOption,
          o = e.originalWidth,
          s = o / 554 * 100,
          r = o / 368 * 100,
          h = Math.round(Math.random() * (100 - 2.5 * r) + r),
          l = Math.round(Math.random() * (100 - 2.5 * s) + s),
          a = l + s > 100 - 2.5 * s ? 1.5 * s : l + 1.5 * s,
          u = l + s > 100 - 2.5 * s ? l - 1.5 * s : 100 - s;
        e.top = h, e.left = l;
        var f = Math.round(Math.random() * (u - a) + a),
          d = 554,
          g = i.wx$1.getSystemInfoSync(),
          c = .7386 * g.windowWidth / d;
        this.windowInfo = g;
        var p = e.originalWidth / d * 100,
          w = e.originalHeight / 368 * 100,
          m = this.questionInfo.diffL / (d * c) * 100,
          y = this.questionInfo.diffR / (d * c) * 100;
        w + e.top > 100 && (e.top = 100 - w);
        var I = {
            width: Math.round(c * d * p / 100) + "px",
            height: Math.round(c * d * p / 100) + "px",
            top: e.top + "%",
            left: e.left + "%"
          },
          R = {
            width: Math.round(c * d * p / 100) + "px",
            height: Math.round(c * d * p / 100) + "px",
            top: e.top + "%",
            left: f + "%",
            transform: "scale(1.1)"
          };
        this.maxLeft = Math.round(.7386 * g.windowWidth * (100 - p) / 100);
        var S = {
            width: Math.round(c * d * p / 100) + "px",
            height: Math.round(c * d * p / 100) + "px",
            top: e.top + "%",
            left: "0%"
          },
          v = {
            left: 0 - e.left * (100 / p) + "%",
            top: 0 - e.top * (100 / w) + "%"
          };
        this.sLeft = e.left, this.diffL = m, this.diffR = y, this.sliderStyle = I, this.sliderStyleFail = R, this.sliderImgStyle = S, this.imgStyle = v, this.isInit = !0
      }
    }
  };
Array || i.resolveComponent("uni-icons")(), Math;
var e = i._export_sfc(n, [
  ["render", function(t, n, e, o, s, r) {
    return i.e({
      a: !1 === s.isRight
    }, !1 === s.isRight ? {
      b: i.p({
        type: "closeempty",
        size: "56rpx",
        color: "#fff"
      })
    } : {}, {
      c: !0 === s.isRight
    }, (s.isRight, {}), {
      d: s.questionInfo && s.questionInfo.idePicture && s.isInit
    }, s.questionInfo && s.questionInfo.idePicture && s.isInit ? i.e({
      e: s.questionInfo.idePicture,
      f: 1 == s.isRight ? 1 : "",
      g: i.s(s.sliderStyle),
      h: 1 == s.isRight ? 1 : "",
      i: i.s(s.sliderStyleFail),
      j: s.questionInfo.idePicture,
      k: i.s(s.imgStyle),
      l: -1 == s.isRight
    }, -1 == s.isRight ? {
      m: s.failImg
    } : {}, {
      n: -1 == s.isRight ? 1 : "",
      o: 1 == s.isRight ? 1 : "",
      p: s.showTrinsition ? "" : 1,
      q: s.sliderImgStyle.top,
      r: s.nowX + "px",
      s: s.sliderImgStyle.width,
      t: s.sliderImgStyle.width
    }) : {}, {
      v: s.showTrinsition ? "" : 1,
      w: s.nowX + "px",
      x: !1 === s.allowDrag
    }, (s.allowDrag, {}), {
      y: null === s.allowDrag
    }, null === s.allowDrag ? {
      z: i.p({
        type: "refreshempty",
        size: "30"
      })
    } : {
      A: i.p({
        type: "pulldown",
        size: "30"
      })
    }, {
      B: s.showTrinsition ? "" : 1,
      C: s.nowX + "px",
      D: i.o((function() {
        return r.touchstart && r.touchstart.apply(r, arguments)
      })),
      E: i.o((function() {
        return r.touchcancel && r.touchcancel.apply(r, arguments)
      })),
      F: i.o((function() {
        return r.touchend && r.touchend.apply(r, arguments)
      })),
      G: i.o((function() {
        return r.touchmove && r.touchmove.apply(r, arguments)
      })),
      H: i.t(s.isRight ? "预约中，请等待…" : "确定"),
      I: s.isRight ? 1 : "",
      J: i.o((function() {
        return r.confirm && r.confirm.apply(r, arguments)
      }))
    })
  }],
  ["__scopeId", "data-v-83383211"]
]);
wx.createComponent(e);