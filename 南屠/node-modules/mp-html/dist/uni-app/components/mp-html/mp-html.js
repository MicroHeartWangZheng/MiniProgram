var e = require("../../../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = [],
  n = {
    name: "mp-html",
    data: function() {
      return {
        nodes: []
      }
    },
    props: {
      containerStyle: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      copyLink: {
        type: [Boolean, String],
        default: !0
      },
      domain: String,
      errorImg: {
        type: String,
        default: ""
      },
      lazyLoad: {
        type: [Boolean, String],
        default: !1
      },
      loadingImg: {
        type: String,
        default: ""
      },
      pauseVideo: {
        type: [Boolean, String],
        default: !0
      },
      previewImg: {
        type: [Boolean, String],
        default: !0
      },
      scrollTable: [Boolean, String],
      selectable: [Boolean, String],
      setTitle: {
        type: [Boolean, String],
        default: !0
      },
      showImgMenu: {
        type: [Boolean, String],
        default: !0
      },
      tagStyle: Object,
      useAnchor: [Boolean, Number]
    },
    emits: ["load", "ready", "imgtap", "linktap", "play", "error"],
    components: {
      node: function() {
        return "./node/node.js"
      }
    },
    watch: {
      content: function(e) {
        this.setContent(e)
      }
    },
    created: function() {
      this.plugins = [];
      for (var e = t.length; e--;) this.plugins.push(new t[e](this))
    },
    mounted: function() {
      this.content && !this.nodes.length && this.setContent(this.content)
    },
    beforeDestroy: function() {
      this._hook("onDetached")
    },
    methods: {
      in: function(e, t, n) {
        e && t && n && (this._in = {
          page: e,
          selector: t,
          scrollTop: n
        })
      },
      navigateTo: function(t, n) {
        var o = this;
        return new Promise((function(i, r) {
          if (o.useAnchor) {
            n = n || parseInt(o.useAnchor) || 0;
            ">>>";
            var s = e.index.createSelectorQuery().in(o._in ? o._in.page : o).select((o._in ? o._in.selector : "._root") + (t ? ">>>#".concat(t) : "")).boundingClientRect();
            o._in ? s.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect() : s.selectViewport().scrollOffset(), s.exec((function(t) {
              if (t[0]) {
                var s = t[1].scrollTop + t[0].top - (t[2] ? t[2].top : 0) + n;
                o._in ? o._in.page[o._in.scrollTop] = s : e.index.pageScrollTo({
                  scrollTop: s,
                  duration: 300
                }), i()
              } else r(Error("Label not found"))
            }))
          } else r(Error("Anchor is disabled"))
        }))
      },
      getText: function(e) {
        var t = "";
        return function e(n) {
          for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if ("text" === i.type) t += i.text.replace(/&amp;/g, "&");
            else if ("br" === i.name) t += "\n";
            else {
              var r = "p" === i.name || "div" === i.name || "tr" === i.name || "li" === i.name || "h" === i.name[0] && i.name[1] > "0" && i.name[1] < "7";
              r && t && "\n" !== t[t.length - 1] && (t += "\n"), i.children && e(i.children), r && "\n" !== t[t.length - 1] ? t += "\n" : "td" !== i.name && "th" !== i.name || (t += "\t")
            }
          }
        }(e || this.nodes), t
      },
      getRect: function() {
        var t = this;
        return new Promise((function(n, o) {
          e.index.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(e) {
            return e[0] ? n(e[0]) : o(Error("Root label not found"))
          }))
        }))
      },
      pauseMedia: function() {
        for (var e = (this._videos || []).length; e--;) this._videos[e].pause()
      },
      setPlaybackRate: function(e) {
        this.playbackRate = e;
        for (var t = (this._videos || []).length; t--;) this._videos[t].playbackRate(e)
      },
      setContent: function(t, n) {
        var o = this;
        n && this.imgList || (this.imgList = []);
        var i = new e.Parser(this).parse(t);
        if (this.$set(this, "nodes", n ? (this.nodes || []).concat(i) : i), this._videos = [], this.$nextTick((function() {
            o._hook("onLoad"), o.$emit("load")
          })), this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
          var r = 0,
            s = function e(t) {
              t && t.height || (t = {}), t.height === r ? o.$emit("ready", t) : (r = t.height, setTimeout((function() {
                o.getRect().then(e).catch(e)
              }), 350))
            };
          this.getRect().then(s).catch(s)
        } else this.imgList._unloadimgs || this.getRect().then((function(e) {
          o.$emit("ready", e)
        })).catch((function() {
          o.$emit("ready", {})
        }))
      },
      _hook: function(e) {
        for (var n = t.length; n--;) this.plugins[n][e] && this.plugins[n][e]()
      }
    }
  };
Array || e.resolveComponent("node")();
var o = e._export_sfc(n, [
  ["render", function(t, n, o, i, r, s) {
    return e.e({
      a: !r.nodes[0]
    }, r.nodes[0] ? {
      b: e.p({
        childs: r.nodes,
        opts: [o.lazyLoad, o.loadingImg, o.errorImg, o.showImgMenu, o.selectable],
        name: "span"
      })
    } : {}, {
      c: e.n((o.selectable ? "_select " : "") + "_root"),
      d: e.s(o.containerStyle)
    })
  }]
]);
wx.createComponent(o);