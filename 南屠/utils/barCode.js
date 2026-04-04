var t = {
    CHAR_TILDE: 102
  },
  r = 1,
  i = 2,
  e = 3,
  s = 4,
  h = 5;

function n(t, r) {
  return void 0 === r ? t >= 32 ? t - 32 : t + 64 : parseInt(String.fromCharCode(t) + String.fromCharCode(r))
}

function c(t, h) {
  var n = a(t);
  return n == r || (n == i || (n == e && h == e || n == s && h == s))
}

function a(t) {
  return t >= 48 && t <= 57 ? r : t >= 32 && t <= 95 ? i : t < 32 ? e : s
}
exports.code128 = function (r, o, l, d) {
  l = parseInt(l), d = parseInt(d);
  for (var g = function (r) {
      var u = {
          currcs: h
        },
        f = function (t) {
          for (var r = [], i = 0; i < t.length; i++) r.push(t.charCodeAt(i));
          return r
        }(r),
        o = 126 == f[0] ? 1 : 0,
        l = f.length > 0 ? a(f[o++]) : i,
        d = f.length > 0 ? a(f[o++]) : i;
      u.currcs = function (t, r) {
        var i = 0;
        return i += t == e ? 1 : 0, i += t == s ? -1 : 0, i += r == e ? 1 : 0, (i += r == s ? -1 : 0) > 0 ? e : s
      }(l, d), u.currcs = function (t, r) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          if ((s < 48 || s > 57) && 126 != s) return r
        }
        return t.length % 2 == 0 ? h : e
      }(f, u.currcs);
      var g = new Array;
      switch (u.currcs) {
        case e:
          g.push(103);
          break;
        case s:
          g.push(104);
          break;
        default:
          g.push(105)
      }
      for (var p = 0; p < f.length; p++) {
        var v = f[p];
        v in t && (g.push(t[v]), p++, v = f[p]);
        var w = f.length > p + 1 ? f[p + 1] : -1;
        g = g.concat(R(v, w, u.currcs)), u.currcs == h && p++
      }
      for (var _ = g[0], b = 1; b < g.length; b++) _ += b * g[b];
      return g.push(_ % 103), g.push(106), g;

      function R(t, r, i) {
        var a = [],
          f = -1;
        if (c(t, i)) i == h && (-1 == r ? (f = 100, i = s) : -1 == r || c(r, i) || (c(r, e) ? (f = 101, i = e) : (f = 100, i = s)));
        else if (-1 == r || c(r, i)) f = 98;
        else switch (i) {
          case e:
            f = 100, i = s;
            break;
          case s:
            f = 101, i = e
        }
        return -1 != f ? (a.push(f), a.push(n(r))) : i == h ? a.push(n(t, r)) : a.push(n(t)), u.currcs = i, a
      }
    }(o), p = new u(r, l, d), v = p.area.width / (11 * (g.length - 3) + 35), w = p.area.left, _ = p.area.top, b = 0; b < g.length; b++)
    for (var R = g[b], C = 0; C < 8; C += 2) {
      var y = f[R][C] * v,
        z = d - _,
        x = f[R][C + 1] * v;
      y > 0 && p.fillFgRect(w, _, y, z), w += y + x
    }
  r.draw()
};
var u = function (t, r, i) {
  this.width = r, this.height = i, this.quiet = Math.round(this.width / 40), this.border_size = 0, this.padding_width = 0, this.area = {
    width: r - 2 * this.padding_width - 2 * this.quiet,
    height: i - 2 * this.border_size,
    top: this.border_size - 4,
    left: this.padding_width + this.quiet
  }, this.ctx = t, this.fg = "#000000", this.bg = "#ffffff", this.fillBgRect(0, 0, r, i), this.fillBgRect(0, this.border_size, r, i - 2 * this.border_size)
};
u.prototype._fillRect = function (t, r, i, e, s) {
  this.ctx.setFillStyle(s), this.ctx.fillRect(t, r, i, e)
}, u.prototype.fillFgRect = function (t, r, i, e) {
  this._fillRect(t, r, i, e, this.fg)
}, u.prototype.fillBgRect = function (t, r, i, e) {
  this._fillRect(t, r, i, e, this.bg)
};
var f = [
  [2, 1, 2, 2, 2, 2, 0, 0],
  [2, 2, 2, 1, 2, 2, 0, 0],
  [2, 2, 2, 2, 2, 1, 0, 0],
  [1, 2, 1, 2, 2, 3, 0, 0],
  [1, 2, 1, 3, 2, 2, 0, 0],
  [1, 3, 1, 2, 2, 2, 0, 0],
  [1, 2, 2, 2, 1, 3, 0, 0],
  [1, 2, 2, 3, 1, 2, 0, 0],
  [1, 3, 2, 2, 1, 2, 0, 0],
  [2, 2, 1, 2, 1, 3, 0, 0],
  [2, 2, 1, 3, 1, 2, 0, 0],
  [2, 3, 1, 2, 1, 2, 0, 0],
  [1, 1, 2, 2, 3, 2, 0, 0],
  [1, 2, 2, 1, 3, 2, 0, 0],
  [1, 2, 2, 2, 3, 1, 0, 0],
  [1, 1, 3, 2, 2, 2, 0, 0],
  [1, 2, 3, 1, 2, 2, 0, 0],
  [1, 2, 3, 2, 2, 1, 0, 0],
  [2, 2, 3, 2, 1, 1, 0, 0],
  [2, 2, 1, 1, 3, 2, 0, 0],
  [2, 2, 1, 2, 3, 1, 0, 0],
  [2, 1, 3, 2, 1, 2, 0, 0],
  [2, 2, 3, 1, 1, 2, 0, 0],
  [3, 1, 2, 1, 3, 1, 0, 0],
  [3, 1, 1, 2, 2, 2, 0, 0],
  [3, 2, 1, 1, 2, 2, 0, 0],
  [3, 2, 1, 2, 2, 1, 0, 0],
  [3, 1, 2, 2, 1, 2, 0, 0],
  [3, 2, 2, 1, 1, 2, 0, 0],
  [3, 2, 2, 2, 1, 1, 0, 0],
  [2, 1, 2, 1, 2, 3, 0, 0],
  [2, 1, 2, 3, 2, 1, 0, 0],
  [2, 3, 2, 1, 2, 1, 0, 0],
  [1, 1, 1, 3, 2, 3, 0, 0],
  [1, 3, 1, 1, 2, 3, 0, 0],
  [1, 3, 1, 3, 2, 1, 0, 0],
  [1, 1, 2, 3, 1, 3, 0, 0],
  [1, 3, 2, 1, 1, 3, 0, 0],
  [1, 3, 2, 3, 1, 1, 0, 0],
  [2, 1, 1, 3, 1, 3, 0, 0],
  [2, 3, 1, 1, 1, 3, 0, 0],
  [2, 3, 1, 3, 1, 1, 0, 0],
  [1, 1, 2, 1, 3, 3, 0, 0],
  [1, 1, 2, 3, 3, 1, 0, 0],
  [1, 3, 2, 1, 3, 1, 0, 0],
  [1, 1, 3, 1, 2, 3, 0, 0],
  [1, 1, 3, 3, 2, 1, 0, 0],
  [1, 3, 3, 1, 2, 1, 0, 0],
  [3, 1, 3, 1, 2, 1, 0, 0],
  [2, 1, 1, 3, 3, 1, 0, 0],
  [2, 3, 1, 1, 3, 1, 0, 0],
  [2, 1, 3, 1, 1, 3, 0, 0],
  [2, 1, 3, 3, 1, 1, 0, 0],
  [2, 1, 3, 1, 3, 1, 0, 0],
  [3, 1, 1, 1, 2, 3, 0, 0],
  [3, 1, 1, 3, 2, 1, 0, 0],
  [3, 3, 1, 1, 2, 1, 0, 0],
  [3, 1, 2, 1, 1, 3, 0, 0],
  [3, 1, 2, 3, 1, 1, 0, 0],
  [3, 3, 2, 1, 1, 1, 0, 0],
  [3, 1, 4, 1, 1, 1, 0, 0],
  [2, 2, 1, 4, 1, 1, 0, 0],
  [4, 3, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 2, 2, 4, 0, 0],
  [1, 1, 1, 4, 2, 2, 0, 0],
  [1, 2, 1, 1, 2, 4, 0, 0],
  [1, 2, 1, 4, 2, 1, 0, 0],
  [1, 4, 1, 1, 2, 2, 0, 0],
  [1, 4, 1, 2, 2, 1, 0, 0],
  [1, 1, 2, 2, 1, 4, 0, 0],
  [1, 1, 2, 4, 1, 2, 0, 0],
  [1, 2, 2, 1, 1, 4, 0, 0],
  [1, 2, 2, 4, 1, 1, 0, 0],
  [1, 4, 2, 1, 1, 2, 0, 0],
  [1, 4, 2, 2, 1, 1, 0, 0],
  [2, 4, 1, 2, 1, 1, 0, 0],
  [2, 2, 1, 1, 1, 4, 0, 0],
  [4, 1, 3, 1, 1, 1, 0, 0],
  [2, 4, 1, 1, 1, 2, 0, 0],
  [1, 3, 4, 1, 1, 1, 0, 0],
  [1, 1, 1, 2, 4, 2, 0, 0],
  [1, 2, 1, 1, 4, 2, 0, 0],
  [1, 2, 1, 2, 4, 1, 0, 0],
  [1, 1, 4, 2, 1, 2, 0, 0],
  [1, 2, 4, 1, 1, 2, 0, 0],
  [1, 2, 4, 2, 1, 1, 0, 0],
  [4, 1, 1, 2, 1, 2, 0, 0],
  [4, 2, 1, 1, 1, 2, 0, 0],
  [4, 2, 1, 2, 1, 1, 0, 0],
  [2, 1, 2, 1, 4, 1, 0, 0],
  [2, 1, 4, 1, 2, 1, 0, 0],
  [4, 1, 2, 1, 2, 1, 0, 0],
  [1, 1, 1, 1, 4, 3, 0, 0],
  [1, 1, 1, 3, 4, 1, 0, 0],
  [1, 3, 1, 1, 4, 1, 0, 0],
  [1, 1, 4, 1, 1, 3, 0, 0],
  [1, 1, 4, 3, 1, 1, 0, 0],
  [4, 1, 1, 1, 1, 3, 0, 0],
  [4, 1, 1, 3, 1, 1, 0, 0],
  [1, 1, 3, 1, 4, 1, 0, 0],
  [1, 1, 4, 1, 3, 1, 0, 0],
  [3, 1, 1, 1, 4, 1, 0, 0],
  [4, 1, 1, 1, 3, 1, 0, 0],
  [2, 1, 1, 4, 1, 2, 0, 0],
  [2, 1, 1, 2, 1, 4, 0, 0],
  [2, 1, 1, 2, 3, 2, 0, 0],
  [2, 3, 3, 1, 1, 1, 2, 0]
];