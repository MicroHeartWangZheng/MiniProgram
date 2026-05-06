var e = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = {
    props: {
      weeks: {
        type: Object,
        default: function() {
          return {}
        }
      },
      calendar: {
        type: Object,
        default: function() {
          return {}
        }
      },
      selected: {
        type: Array,
        default: function() {
          return []
        }
      },
      isCustomSelect: {
        type: [Boolean],
        default: !1
      },
      checkHover: {
        type: Boolean,
        default: !1
      }
    },
    methods: {
      choiceDate: function(e) {
        this.$emit("change", e)
      },
      handleMousemove: function(e) {
        this.$emit("handleMouse", e)
      }
    }
  },
  s = e._export_sfc(t, [
    ["render", function(t, s, o, l, c, n) {
      return e.e({
        a: !o.isCustomSelect && o.selected && o.weeks.extraInfo
      }, (!o.isCustomSelect && o.selected && o.weeks.extraInfo, {}), {
        b: e.t(o.weeks.date),
        c: o.calendar.fullDate !== o.weeks.fullDate || !o.calendar.userChecked && o.checkHover ? "" : 1,
        d: o.checkHover ? 1 : "",
        e: o.weeks.beforeMultiple ? 1 : "",
        f: o.weeks.multiple ? 1 : "",
        g: o.weeks.afterMultiple ? 1 : "",
        h: o.weeks.disable ? 1 : "",
        i: !o.isCustomSelect && o.weeks.isToday ? 1 : "",
        j: o.isCustomSelect ? 1 : "",
        k: o.isCustomSelect && o.selected && o.weeks.extraInfo ? 1 : "",
        l: o.weeks.disable ? 1 : "",
        m: o.weeks.beforeMultiple ? 1 : "",
        n: o.weeks.multiple ? 1 : "",
        o: o.weeks.afterMultiple ? 1 : "",
        p: e.o((function(e) {
          return n.choiceDate(o.weeks)
        })),
        q: e.o((function(e) {
          return n.handleMousemove(o.weeks)
        }))
      })
    }]
  ]);
wx.createComponent(s);