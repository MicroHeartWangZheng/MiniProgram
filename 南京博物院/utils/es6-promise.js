var t = require("../@babel/runtime/helpers/typeof");
! function (e, n) {
  "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (void 0).ES6Promise = n()
}(0, (function () {
  function e(t) {
    return "function" == typeof t
  }

  function n() {
    var t = setTimeout;
    return function () {
      return t(r, 1)
    }
  }

  function r() {
    for (var t = 0; t < m; t += 2) {
      (0, x[t])(x[t + 1]), x[t] = void 0, x[t + 1] = void 0
    }
    m = 0
  }

  function o(t, e) {
    var n = this,
      r = new this.constructor(s);
    void 0 === r[P] && _(r);
    var o = n._state;
    if (o) {
      var i = arguments[o - 1];
      g((function () {
        return d(o, r, i, n._result)
      }))
    } else p(n, r, t, e);
    return r
  }

  function i(e) {
    if (e && "object" == t(e) && e.constructor === this) return e;
    var n = new this(s);
    return a(n, e), n
  }

  function s() {}

  function u(t) {
    try {
      return t.then
    } catch (t) {
      return F.error = t, F
    }
  }

  function c(t, n, r) {
    n.constructor === t.constructor && r === o && n.constructor.resolve === i ? function (t, e) {
      e._state === O ? l(t, e._result) : e._state === q ? h(t, e._result) : p(e, void 0, (function (e) {
        return a(t, e)
      }), (function (e) {
        return h(t, e)
      }))
    }(t, n) : r === F ? (h(t, F.error), F.error = null) : void 0 === r ? l(t, n) : e(r) ? function (t, e, n) {
      g((function (t) {
        var r = !1,
          o = function (t, e, n, r) {
            try {
              t.call(e, n, r)
            } catch (t) {
              return t
            }
          }(n, e, (function (n) {
            r || (r = !0, e !== n ? a(t, n) : l(t, n))
          }), (function (e) {
            r || (r = !0, h(t, e))
          }), t._label);
        !r && o && (r = !0, h(t, o))
      }), t)
    }(t, n, r) : l(t, n)
  }

  function a(e, n) {
    e === n ? h(e, new TypeError("You cannot resolve a promise with itself")) : function (e) {
      var n = t(e);
      return null !== e && ("object" === n || "function" === n)
    }(n) ? c(e, n, u(n)) : l(e, n)
  }

  function f(t) {
    t._onerror && t._onerror(t._result), v(t)
  }

  function l(t, e) {
    t._state === C && (t._result = e, t._state = O, 0 !== t._subscribers.length && g(v, t))
  }

  function h(t, e) {
    t._state === C && (t._state = q, t._result = e, g(f, t))
  }

  function p(t, e, n, r) {
    var o = t._subscribers,
      i = o.length;
    t._onerror = null, o[i] = e, o[i + O] = n, o[i + q] = r, 0 === i && t._state && g(v, t)
  }

  function v(t) {
    var e = t._subscribers,
      n = t._state;
    if (0 !== e.length) {
      for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? d(n, r, o, i) : o(i);
      t._subscribers.length = 0
    }
  }

  function d(t, n, r, o) {
    var i = e(r),
      s = void 0,
      u = void 0,
      c = void 0,
      f = void 0;
    if (i) {
      if ((s = function (t, e) {
          try {
            return t(e)
          } catch (t) {
            return F.error = t, F
          }
        }(r, o)) === F ? (f = !0, u = s.error, s.error = null) : c = !0, n === s) return void h(n, new TypeError("A promises callback cannot return that same promise."))
    } else s = o, c = !0;
    n._state !== C || (i && c ? a(n, s) : f ? h(n, u) : t === O ? l(n, s) : t === q && h(n, s))
  }

  function _(t) {
    t[P] = Y++, t._state = void 0, t._result = void 0, t._subscribers = []
  }
  var y = Array.isArray ? Array.isArray : function (t) {
      return "[object Array]" === Object.prototype.toString.call(t)
    },
    m = 0,
    b = void 0,
    w = void 0,
    g = function (t, e) {
      x[m] = t, x[m + 1] = e, 2 === (m += 2) && (w ? w(r) : M())
    },
    A = "undefined" != typeof window ? window : void 0,
    j = A || {},
    S = j.MutationObserver || j.WebKitMutationObserver,
    E = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
    T = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
    x = new Array(1e3),
    M = void 0;
  M = E ? function () {
    return process.nextTick(r)
  } : S ? function () {
    var t = 0,
      e = new S(r),
      n = document.createTextNode("");
    return e.observe(n, {
        characterData: !0
      }),
      function () {
        n.data = t = ++t % 2
      }
  }() : T ? function () {
    var t = new MessageChannel;
    return t.port1.onmessage = r,
      function () {
        return t.port2.postMessage(0)
      }
  }() : void 0 === A && "function" == typeof require ? function () {
    try {
      var t = Function("return this")().require("vertx");
      return void 0 !== (b = t.runOnLoop || t.runOnContext) ? function () {
        b(r)
      } : n()
    } catch (t) {
      return n()
    }
  }() : n();
  var P = Math.random().toString(36).substring(2),
    C = void 0,
    O = 1,
    q = 2,
    F = {
      error: null
    },
    Y = 0,
    k = function () {
      function t(t, e) {
        this._instanceConstructor = t, this.promise = new t(s), this.promise[P] || _(this.promise), y(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? l(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && l(this.promise, this._result))) : h(this.promise, new Error("Array Methods must be provided an Array"))
      }
      return t.prototype._enumerate = function (t) {
        for (var e = 0; this._state === C && e < t.length; e++) this._eachEntry(t[e], e)
      }, t.prototype._eachEntry = function (t, e) {
        var n = this._instanceConstructor,
          r = n.resolve;
        if (r === i) {
          var a = u(t);
          if (a === o && t._state !== C) this._settledAt(t._state, e, t._result);
          else if ("function" != typeof a) this._remaining--, this._result[e] = t;
          else if (n === D) {
            var f = new n(s);
            c(f, t, a), this._willSettleAt(f, e)
          } else this._willSettleAt(new n((function (e) {
            return e(t)
          })), e)
        } else this._willSettleAt(r(t), e)
      }, t.prototype._settledAt = function (t, e, n) {
        var r = this.promise;
        r._state === C && (this._remaining--, t === q ? h(r, n) : this._result[e] = n), 0 === this._remaining && l(r, this._result)
      }, t.prototype._willSettleAt = function (t, e) {
        var n = this;
        p(t, void 0, (function (t) {
          return n._settledAt(O, e, t)
        }), (function (t) {
          return n._settledAt(q, e, t)
        }))
      }, t
    }(),
    D = function () {
      function t(e) {
        this[P] = Y++, this._result = this._state = void 0, this._subscribers = [], s !== e && ("function" != typeof e && function () {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }(), this instanceof t ? function (t, e) {
          try {
            e((function (e) {
              a(t, e)
            }), (function (e) {
              h(t, e)
            }))
          } catch (e) {
            h(t, e)
          }
        }(this, e) : function () {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }())
      }
      return t.prototype.catch = function (t) {
        return this.then(null, t)
      }, t.prototype.finally = function (t) {
        var e = this.constructor;
        return this.then((function (n) {
          return e.resolve(t()).then((function () {
            return n
          }))
        }), (function (n) {
          return e.resolve(t()).then((function () {
            throw n
          }))
        }))
      }, t
    }();
  return D.prototype.then = o, D.all = function (t) {
    return new k(this, t).promise
  }, D.race = function (t) {
    var e = this;
    return new e(y(t) ? function (n, r) {
      for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
    } : function (t, e) {
      return e(new TypeError("You must pass an array to race."))
    })
  }, D.resolve = i, D.reject = function (t) {
    var e = new this(s);
    return h(e, t), e
  }, D._setScheduler = function (t) {
    w = t
  }, D._setAsap = function (t) {
    g = t
  }, D._asap = g, D.polyfill = function () {
    var t = void 0;
    if ("undefined" != typeof global) t = global;
    else if ("undefined" != typeof self) t = self;
    else try {
      t = Function("return this")()
    } catch (t) {
      throw new Error("polyfill failed because global object is unavailable in this environment")
    }
    var e = t.Promise;
    if (e) {
      var n = null;
      try {
        n = Object.prototype.toString.call(e.resolve())
      } catch (t) {}
      if ("[object Promise]" === n && !e.cast) return
    }
    t.Promise = D
  }, D.Promise = D, D
}));