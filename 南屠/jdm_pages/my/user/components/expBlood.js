var t = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = {
    props: {
      list: {
        type: Array,
        default: function() {
          return []
        }
      },
      tipWidthType: {
        type: [String, Number],
        default: function() {
          return ""
        }
      }
    },
    data: function() {
      return {}
    },
    mounted: function() {},
    methods: {}
  },
  n = t._export_sfc(e, [
    ["render", function(e, n, r, i, a, u) {
      return {
        a: t.f(r.list, (function(e, n, r) {
          return {
            a: e.picUrl[0] + "?timestamp=" + (new Date).getTime(),
            b: e.picUrl[1] + "?timestamp=" + (new Date).getTime(),
            c: t.t(e.picName),
            d: n
          }
        })),
        b: 1 == r.tipWidthType ? 1 : ""
      }
    }],
    ["__scopeId", "data-v-997a1395"]
  ]);
wx.createComponent(n);