var t = require("../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = {
    props: {
      position: {
        type: String,
        default: "bottom"
      },
      source: {
        type: String,
        default: ""
      },
      isMaskClick: {
        type: Boolean,
        default: !0
      }
    },
    computed: {
      contentClassName: function() {
        var t = this.isOpen ? "" : " content-hide";
        return "bottom" == this.position ? "content-bottom" + t : "center" == this.position ? "content-center" + t : "content-bottom" + t
      }
    },
    data: function() {
      return {
        isOpen: !1
      }
    },
    beforeUnmount: function() {
      this.close()
    },
    methods: {
      maskClick: function() {
        this.isMaskClick && this.close()
      },
      open: function() {
        "collectionSuccess" == this.source && this.$store.dispatch("setState", {
          key: "isCollectionSuccess",
          value: !0
        }), this.$store.dispatch("setState", {
          key: "isDisAllowScroll",
          value: !0
        }), this.isOpen = !0
      },
      close: function() {
        "collectionSuccess" == this.source && this.$store.dispatch("setState", {
          key: "isCollectionSuccess",
          value: !1
        }), this.$store.dispatch("setState", {
          key: "isDisAllowScroll",
          value: !1
        }), this.isOpen = !1
      }
    }
  },
  s = t._export_sfc(e, [
    ["render", function(e, s, o, i, n, c) {
      return {
        a: n.isOpen ? "" : 1,
        b: t.o((function() {
          return c.maskClick && c.maskClick.apply(c, arguments)
        })),
        c: t.n(c.contentClassName)
      }
    }],
    ["__scopeId", "data-v-a611b6f1"]
  ]);
wx.createComponent(s);