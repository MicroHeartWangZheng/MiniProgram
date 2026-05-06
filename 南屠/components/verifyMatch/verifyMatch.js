var t = require("../../@babel/runtime/helpers/defineProperty"),
  i = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  n = {
    props: {},
    data: function() {
      var i;
      return t(i = {
        moveRate: 1,
        isRight: null,
        maxLeft: 0,
        allowDrag: !1,
        showTrinsition: !1,
        startX: 0,
        nowX: 0,
        initX: 0,
        questionInfo: {
          idePicture: "",
          diffL: 1.5,
          diffR: 1.5,
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
    unmounted: function() {},
    mounted: function() {
      this.init()
    },
    methods: {
      touchstart: function(t) {
        if (!(t.touches.length > 1 || this.isRight)) {
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
      close: function() {
        this.isRight = 0, this.$emit("closeRight")
      },
      start: function() {
        this.playState = "running", this.isRight = 0, this.$set(this.sliderImgStyle, "animationPlayState", "running")
      },
      confirm: function() {
        var t = Math.abs(Math.abs(this.initX + this.nowX * this.moveRate) - Math.abs(this.sliderStyle.left)),
          i = this.windowInfo.windowWidth / 750 * 368 / this.image.height * this.image.width,
          n = t % i,
          o = !1;
        (n - this.questionInfo.diffL <= 0 || n + this.questionInfo.diffR >= i) && (o = !0), o ? (this.$emit("afterAnswer"), this.isRight = !0) : this.isRight = !1
      },
      init: function() {
        var t = this,
          n = Math.round(14 * Math.random() + 1),
          o = this.$settings.verifyImg + "common/" + n + ".jpg";
        this.$set(this.questionInfo, "idePicture", o);
        var e = this.questionInfo.correctOption,
          s = Math.round(40 * Math.random() + 10),
          h = Math.round(40 * Math.random() + 40);
        e.top = s, e.left = h, i.index.getImageInfo({
          src: this.questionInfo.idePicture,
          success: function(n) {
            t.image = n;
            var o = i.wx$1.getSystemInfoSync(),
              s = .7386 * o.windowWidth;
            n.width, t.windowInfo = o;
            var h = t.windowInfo.windowWidth / 750 * 368 / t.image.height * t.image.width,
              a = Math.round(Math.random() * (h - 40) + 20),
              r = -a,
              l = {
                left: r
              };
            t.sliderStyle = l, t.isInit = !0, e.originalWidth, n.width;
            var u = 474 / 554 * s;
            t.maxLeft = Math.round(u);
            var c = 1 * s + s - Math.abs(r),
              f = Math.abs(r + s);
            Math.round(Math.random() * (c - f) + f), t.initX = 2 * -h;
            var g = (h - a) / t.maxLeft + .05;
            t.moveRate = (Math.random() * (2 - g) + g).toFixed(2) - 0
          }
        })
      }
    }
  };
Array || i.resolveComponent("uni-icons")(), Math;
var o = i._export_sfc(n, [
  ["render", function(t, n, o, e, s, h) {
    return i.e({
      a: !1 === s.isRight
    }, (s.isRight, {}), {
      b: !0 === s.isRight
    }, (s.isRight, {}), {
      c: "url('".concat(s.questionInfo.idePicture, "')"),
      d: "".concat(s.sliderStyle.left, "px"),
      e: "url('".concat(s.questionInfo.idePicture, "')"),
      f: s.initX + s.nowX * s.moveRate + "px",
      g: s.showTrinsition ? "" : 1,
      h: s.nowX + "px",
      i: !1 === s.allowDrag
    }, (s.allowDrag, {}), {
      j: null === s.allowDrag
    }, null === s.allowDrag ? {
      k: i.p({
        type: "refreshempty",
        size: "30"
      })
    } : {
      l: i.p({
        type: "pulldown",
        size: "30"
      })
    }, {
      m: s.showTrinsition ? "" : 1,
      n: s.nowX + "px",
      o: i.o((function() {
        return h.touchstart && h.touchstart.apply(h, arguments)
      })),
      p: i.o((function() {
        return h.touchcancel && h.touchcancel.apply(h, arguments)
      })),
      q: i.o((function() {
        return h.touchend && h.touchend.apply(h, arguments)
      })),
      r: i.o((function() {
        return h.touchmove && h.touchmove.apply(h, arguments)
      })),
      s: i.t(s.isRight ? "预约中，请等待…" : "确定"),
      t: s.isRight ? 1 : "",
      v: i.o((function() {
        return h.confirm && h.confirm.apply(h, arguments)
      }))
    })
  }],
  ["__scopeId", "data-v-99c16d5a"]
]);
wx.createComponent(o);