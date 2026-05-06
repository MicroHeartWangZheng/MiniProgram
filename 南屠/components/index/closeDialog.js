var e = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = require("../../42DF72329CEDE14F24B91A35674AA3A7.js"),
  n = {
    computed: {
      closeNoticeImg: function() {
        return 3 == e.index.getStorageSync("versioncontrol") ? "/static/img/closeNoticeEn.png" : "/static/img/closeNotice.png"
      },
      confirmText: function() {
        return 3 == e.index.getStorageSync("versioncontrol") ? "I am already aware" : "我已知晓"
      }
    },
    components: {
      dialogWrap: function() {
        return "../dialogWrap.js"
      },
      mpHtml: function() {
        return "../../node-modules/mp-html/dist/uni-app/components/mp-html/mp-html.js"
      }
    },
    props: {
      hallCode: {
        type: String,
        default: ""
      }
    },
    data: function() {
      return {
        notice: {
          startTime: "2025-11-05 00:00:00",
          endTime: "2025-12-13 23:59:59"
        },
        noticeShow: !1,
        timer: null,
        time: 5,
        closeType: 1,
        info: '\n        <p style="font-weight:500;font-size:38rpx;color:#B67A65;text-align:center;font-style:normal;margin-top:75rpx; ">闭馆通告</p>\n        <p style="text-align:left;margin-top:38rpx; text-indent:32rpx;">因筹备并举行重要活动及场馆设备检修需要，侵华日军南京大屠杀遇难同胞纪念馆将于2025年11月10日(周一)至12月13日(周六)期间闭馆。</p>\n        <p style="text-align:left;text-indent:32rpx">由此造成的不便，请予谅解。</p>\n        <p style="text-align:right;margin-top:38rpx;">侵华日军南京大屠杀遇难同胞纪念馆</p>\n        <p style="text-align:right;">2025年11月4日</p>\n        '
      }
    },
    mounted: function() {
      this.open()
    },
    unmounted: function() {
      clearTimeout(this.timer)
    },
    methods: {
      open: function() {
        var e = (new Date).getTime(),
          t = new Date(this.notice.startTime).getTime(),
          n = new Date(this.notice.endTime).getTime();
        this.notice.startTime && this.notice.endTime && e >= t && e <= n && ("DTSYNTB" == this.hallCode || "SGBS" == this.hallCode) && (this.$refs.dialogWrap.open(), this.noticeShow = !0, this.startDown())
      },
      close: function() {
        1 == this.closeType && this.time > 0 || this.$refs.dialogWrap.close()
      },
      startDown: function() {
        var e = this;
        clearTimeout(this.timer);
        ! function t() {
          e.time > 0 && (e.timer = setTimeout((function() {
            e.time--, t()
          }), 1e3))
        }()
      }
    }
  };
Array || e.resolveComponent("dialog-wrap")();
var o = e._export_sfc(n, [
  ["render", function(n, o, i, r, s, c) {
    return e.e({
      a: s.noticeShow
    }, s.noticeShow ? e.e({
      b: c.closeNoticeImg,
      c: 1 == s.closeType
    }, 1 == s.closeType ? {
      d: e.t(c.confirmText),
      e: e.t(s.time ? "（0".concat(s.time, "s）") : ""),
      f: s.time > 0 ? 1 : "",
      g: e.o((function() {
        return c.close && c.close.apply(c, arguments)
      }))
    } : {}, {
      h: 2 == s.closeType
    }, 2 == s.closeType ? {
      i: t._imports_0$2,
      j: e.o((function() {
        return c.close && c.close.apply(c, arguments)
      }))
    } : {}) : {}, {
      k: e.sr("dialogWrap", "1a6e78e6-0"),
      l: e.p({
        position: "center",
        isMaskClick: !1
      })
    })
  }],
  ["__scopeId", "data-v-1a6e78e6"]
]);
wx.createComponent(o);