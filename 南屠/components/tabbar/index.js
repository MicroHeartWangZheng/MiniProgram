var e = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  r = require("../../42DF72329CEDE14F24B91A35674AA3A7.js"),
  t = {
    components: {
      emptyCom: function() {
        return "./empty.js"
      }
    },
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    computed: e({
      indexIsGray: function() {
        return this.$store.state.indexIsGray
      }
    }, n.mapState(["versioncontrol"])),
    data: function() {
      return {}
    },
    mounted: function() {},
    methods: {
      skip: function(e) {
        if (e != this.currentIndex) {
          var r = "";
          0 == e ? r = "/pages/index/index" : 1 == this.versioncontrol ? r = "/jdm_pages/my/index" : 2 == this.versioncontrol ? r = "/oldage_pages/my/index" : 3 == this.versioncontrol && (r = "/english_pages/my/index"), n.index.reLaunch({
            url: r
          })
        }
      }
    }
  };
Array || n.resolveComponent("emptyCom")();
var o = n._export_sfc(t, [
  ["render", function(e, t, o, s, i, c) {
    return n.e({
      a: 0 == o.currentIndex
    }, 0 == o.currentIndex ? {
      b: r._imports_0$11
    } : {
      c: r._imports_1$7
    }, {
      d: n.t(3 == e.versioncontrol ? "home page" : "首页"),
      e: 0 == o.currentIndex ? 1 : "",
      f: n.o((function(e) {
        return c.skip(0)
      })),
      g: 1 == o.currentIndex
    }, 1 == o.currentIndex ? {
      h: r._imports_2$3
    } : {
      i: r._imports_3$3
    }, {
      j: n.t(3 == e.versioncontrol ? "my" : "我的"),
      k: 1 == o.currentIndex ? 1 : "",
      l: n.o((function(e) {
        return c.skip(1)
      })),
      m: c.indexIsGray ? "grayscale(.95)" : "none"
    })
  }],
  ["__scopeId", "data-v-d133ac2f"]
]);
wx.createComponent(o);