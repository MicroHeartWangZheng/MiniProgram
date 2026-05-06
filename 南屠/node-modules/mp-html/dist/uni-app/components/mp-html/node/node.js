var t = require("../../../../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  a = {},
  r = {
    name: "node",
    options: {
      virtualHost: !0
    },
    data: function() {
      return {
        ctrl: {},
        isiOS: t.index.getSystemInfoSync().system.includes("iOS")
      }
    },
    props: {
      name: String,
      attrs: {
        type: Object,
        default: function() {
          return {}
        }
      },
      childs: Array,
      opts: Array
    },
    components: {
      node: function() {
        return Promise.resolve().then((function() {
          return s
        }))
      }
    },
    mounted: function() {
      var t = this;
      this.$nextTick((function() {
        for (t.root = t.$parent;
          "mp-html" !== t.root.$options.name; t.root = t.root.$parent);
      }))
    },
    beforeDestroy: function() {},
    methods: {
      toJSON: function() {
        return this
      },
      play: function(a) {
        if (this.root.$emit("play"), this.root.pauseVideo) {
          for (var r = !1, e = a.target.id, s = this.root._videos.length; s--;) this.root._videos[s].id === e ? r = !0 : this.root._videos[s].pause();
          if (!r) {
            var i = t.index.createVideoContext(e, this);
            i.id = e, this.root.playbackRate && i.playbackRate(this.root.playbackRate), this.root._videos.push(i)
          }
        }
      },
      imgTap: function(a) {
        var r = this.childs[a.currentTarget.dataset.i];
        r.a ? this.linkTap(r.a) : r.attrs.ignore || (this.root.$emit("imgtap", r.attrs), this.root.previewImg && t.index.previewImage({
          showmenu: this.root.showImgMenu,
          current: parseInt(r.attrs.i),
          urls: this.root.imgList
        }))
      },
      imgLongTap: function(t) {},
      imgLoad: function(t) {
        var a = t.currentTarget.dataset.i;
        this.childs[a].w ? (this.opts[1] && !this.ctrl[a] || -1 === this.ctrl[a]) && this.$set(this.ctrl, a, 1) : this.$set(this.ctrl, a, t.detail.width), this.checkReady()
      },
      checkReady: function() {
        var t = this;
        this.root && !this.root.lazyLoad && (this.root._unloadimgs -= 1, this.root._unloadimgs || setTimeout((function() {
          t.root.getRect().then((function(a) {
            t.root.$emit("ready", a)
          })).catch((function() {
            t.root.$emit("ready", {})
          }))
        }), 350))
      },
      linkTap: function(a) {
        var r = a.currentTarget ? this.childs[a.currentTarget.dataset.i] : {},
          e = r.attrs || a,
          s = e.href;
        this.root.$emit("linktap", Object.assign({
          innerText: this.root.getText(r.children || [])
        }, e)), s && ("#" === s[0] ? this.root.navigateTo(s.substring(1)).catch((function() {})) : s.split("?")[0].includes("://") ? this.root.copyLink && t.index.setClipboardData({
          data: s,
          success: function() {
            return t.index.showToast({
              title: "链接已复制"
            })
          }
        }) : t.index.navigateTo({
          url: s,
          fail: function() {
            t.index.switchTab({
              url: s,
              fail: function() {}
            })
          }
        }))
      },
      mediaError: function(t) {
        var a = t.currentTarget.dataset.i,
          r = this.childs[a];
        if ("video" === r.name || "audio" === r.name) {
          var e = (this.ctrl[a] || 0) + 1;
          if (e > r.src.length && (e = 0), e < r.src.length) return void this.$set(this.ctrl, a, e)
        } else "img" === r.name && (this.opts[2] && this.$set(this.ctrl, a, -1), this.checkReady());
        this.root && this.root.$emit("error", {
          source: r.name,
          attrs: r.attrs,
          errMsg: t.detail.errMsg
        })
      }
    }
  };
Array || t.resolveComponent("node")(), "function" == typeof a && a(r);
var e = t._export_sfc(r, [
  ["render", function(a, r, e, s, i, n) {
    return {
      a: t.f(e.childs, (function(a, r, s) {
        return t.e({
          a: "img" === a.name && !a.t && (e.opts[1] && !i.ctrl[r] || i.ctrl[r] < 0)
        }, "img" === a.name && !a.t && (e.opts[1] && !i.ctrl[r] || i.ctrl[r] < 0) ? {
          b: t.s(a.attrs.style),
          c: i.ctrl[r] < 0 ? e.opts[2] : e.opts[1]
        } : {}, {
          d: "img" === a.name && a.t
        }, "img" === a.name && a.t ? {
          e: t.s("display:" + a.t),
          f: [{
            attrs: {
              style: a.attrs.style,
              src: a.attrs.src
            },
            name: "img"
          }],
          g: r,
          h: t.o((function() {
            return n.imgTap && n.imgTap.apply(n, arguments)
          }), r)
        } : "img" === a.name ? {
          j: a.attrs.id,
          k: t.n("_img " + a.attrs.class),
          l: t.s((-1 === i.ctrl[r] ? "display:none;" : "") + "width:" + (i.ctrl[r] || 1) + "px;height:1px;" + a.attrs.style),
          m: a.attrs.src,
          n: a.h ? a.w ? "" : "heightFix" : "widthFix",
          o: e.opts[0],
          p: a.webp,
          q: e.opts[3] && !a.attrs.ignore,
          r: !e.opts[3] || a.attrs.ignore,
          s: r,
          t: t.o((function() {
            return n.imgLoad && n.imgLoad.apply(n, arguments)
          }), r),
          v: t.o((function() {
            return n.mediaError && n.mediaError.apply(n, arguments)
          }), r),
          w: t.o((function() {
            return n.imgTap && n.imgTap.apply(n, arguments)
          }), r),
          x: t.o((function() {
            return n.imgLongTap && n.imgLongTap.apply(n, arguments)
          }), r)
        } : a.text ? {
          z: t.t(a.text),
          A: "force" == e.opts[4] && i.isiOS
        } : "br" === a.name ? {} : "a" === a.name ? {
          D: "37dccea6-0-" + s,
          E: t.p({
            name: "span",
            childs: a.children,
            opts: e.opts
          }),
          F: a.attrs.id,
          G: t.n((a.attrs.href ? "_a " : "") + a.attrs.class),
          H: t.s("display:inline;" + a.attrs.style),
          I: r,
          J: t.o((function() {
            return n.linkTap && n.linkTap.apply(n, arguments)
          }), r)
        } : "video" === a.name ? {
          L: a.attrs.id,
          M: t.n(a.attrs.class),
          N: t.s(a.attrs.style),
          O: a.attrs.autoplay,
          P: a.attrs.controls,
          Q: a.attrs.loop,
          R: a.attrs.muted,
          S: a.attrs["object-fit"],
          T: a.attrs.poster,
          U: a.src[i.ctrl[r] || 0],
          V: r,
          W: t.o((function() {
            return n.play && n.play.apply(n, arguments)
          }), r),
          X: t.o((function() {
            return n.mediaError && n.mediaError.apply(n, arguments)
          }), r)
        } : "audio" === a.name ? {
          Z: a.attrs.id,
          aa: t.n(a.attrs.class),
          ab: t.s(a.attrs.style),
          ac: a.attrs.author,
          ad: a.attrs.controls,
          ae: a.attrs.loop,
          af: a.attrs.name,
          ag: a.attrs.poster,
          ah: a.src[i.ctrl[r] || 0],
          ai: r,
          aj: t.o((function() {
            return n.play && n.play.apply(n, arguments)
          }), r),
          ak: t.o((function() {
            return n.mediaError && n.mediaError.apply(n, arguments)
          }), r)
        } : "table" === a.name && a.c || "li" === a.name ? t.e({
          am: "li" === a.name
        }, "li" === a.name ? {
          an: "37dccea6-1-" + s,
          ao: t.p({
            childs: a.children,
            opts: e.opts
          })
        } : {
          ap: t.f(a.children, (function(a, r, i) {
            return t.e({
              a: "td" === a.name || "th" === a.name
            }, "td" === a.name || "th" === a.name ? {
              b: "37dccea6-2-" + s + "-" + i,
              c: t.p({
                childs: a.children,
                opts: e.opts
              })
            } : {
              d: t.f(a.children, (function(a, r, n) {
                return t.e({
                  a: "td" === a.name || "th" === a.name
                }, "td" === a.name || "th" === a.name ? {
                  b: "37dccea6-3-" + s + "-" + i + "-" + n,
                  c: t.p({
                    childs: a.children,
                    opts: e.opts
                  }),
                  d: t.n("_" + a.name + " " + a.attrs.class),
                  e: t.s(a.attrs.style)
                } : {
                  f: t.f(a.children, (function(a, r, o) {
                    return {
                      a: "37dccea6-4-" + s + "-" + i + "-" + n + "-" + o,
                      b: t.p({
                        childs: a.children,
                        opts: e.opts
                      }),
                      c: r,
                      d: t.n("_" + a.name + " " + a.attrs.class),
                      e: t.s(a.attrs.style)
                    }
                  })),
                  g: t.n("_" + a.name + " " + a.attrs.class),
                  h: t.s(a.attrs.style)
                }, {
                  i: r
                })
              }))
            }, {
              e: r,
              f: t.n("_" + a.name + " " + a.attrs.class),
              g: t.s(a.attrs.style)
            })
          }))
        }, {
          aq: a.attrs.id,
          ar: t.n("_" + a.name + " " + a.attrs.class),
          as: t.s(a.attrs.style)
        }) : a.c ? 2 === a.c ? {
          aB: t.f(a.children, (function(a, r, i) {
            return {
              a: r,
              b: t.s(a.f),
              c: "37dccea6-5-" + s + "-" + i,
              d: t.p({
                name: a.name,
                attrs: a.attrs,
                childs: a.children,
                opts: e.opts
              })
            }
          })),
          aC: a.attrs.id,
          aD: t.n("_block _" + a.name + " " + a.attrs.class),
          aE: t.s(a.f + ";" + a.attrs.style)
        } : {
          aF: t.s(a.f),
          aG: "37dccea6-6-" + s,
          aH: t.p({
            name: a.name,
            attrs: a.attrs,
            childs: a.children,
            opts: e.opts
          })
        } : {
          av: a.attrs.id,
          aw: t.s("display:inline;" + a.f),
          ax: e.opts[4],
          ay: e.opts[4],
          az: [a]
        }, {
          i: "img" === a.name,
          y: a.text,
          B: "br" === a.name,
          C: "a" === a.name,
          K: "video" === a.name,
          Y: "audio" === a.name,
          al: "table" === a.name && a.c || "li" === a.name,
          at: !a.c,
          aA: 2 === a.c,
          aI: r
        })
      })),
      b: e.attrs.id,
      c: t.n("_block _" + e.name + " " + e.attrs.class),
      d: t.s(e.attrs.style)
    }
  }]
]);
wx.createComponent(e);
var s = Object.freeze(Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, {
  value: "Module"
}));