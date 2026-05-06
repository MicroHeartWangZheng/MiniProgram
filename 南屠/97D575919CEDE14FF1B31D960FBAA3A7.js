var r = require("./@babel/runtime/helpers/toConsumableArray.js"),
  n = 16,
  t = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72],
  o = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];

function e(r) {
  for (var n = [], t = 0, o = r.length; t < o; t += 2) n.push(parseInt(r.substr(t, 2), 16));
  return n
}

function i(r) {
  for (var n = [], t = 0, o = r.length; t < o; t++) r[t] >= 240 && r[t] <= 247 ? (n.push(String.fromCodePoint(((7 & r[t]) << 18) + ((63 & r[t + 1]) << 12) + ((63 & r[t + 2]) << 6) + (63 & r[t + 3]))), t += 3) : r[t] >= 224 && r[t] <= 239 ? (n.push(String.fromCodePoint(((15 & r[t]) << 12) + ((63 & r[t + 1]) << 6) + (63 & r[t + 2]))), t += 2) : r[t] >= 192 && r[t] <= 223 ? (n.push(String.fromCodePoint(((31 & r[t]) << 6) + (63 & r[t + 1]))), t++) : n.push(String.fromCodePoint(r[t]));
  return n.join("")
}

function u(r, n) {
  var t = 31 & n;
  return r << t | r >>> 32 - t
}

function f(r) {
  return (255 & t[r >>> 24 & 255]) << 24 | (255 & t[r >>> 16 & 255]) << 16 | (255 & t[r >>> 8 & 255]) << 8 | 255 & t[255 & r]
}

function s(r) {
  return r ^ u(r, 2) ^ u(r, 10) ^ u(r, 18) ^ u(r, 24)
}

function a(r) {
  return r ^ u(r, 13) ^ u(r, 23)
}

function p(r, n, t) {
  for (var o = new Array(4), e = new Array(4), i = 0; i < 4; i++) e[0] = 255 & r[4 * i], e[1] = 255 & r[4 * i + 1], e[2] = 255 & r[4 * i + 2], e[3] = 255 & r[4 * i + 3], o[i] = e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3];
  for (var u, a = 0; a < 32; a += 4) u = o[1] ^ o[2] ^ o[3] ^ t[a + 0], o[0] ^= s(f(u)), u = o[2] ^ o[3] ^ o[0] ^ t[a + 1], o[1] ^= s(f(u)), u = o[3] ^ o[0] ^ o[1] ^ t[a + 2], o[2] ^= s(f(u)), u = o[0] ^ o[1] ^ o[2] ^ t[a + 3], o[3] ^= s(f(u));
  for (var p = 0; p < 16; p += 4) n[p] = o[3 - p / 4] >>> 24 & 255, n[p + 1] = o[3 - p / 4] >>> 16 & 255, n[p + 2] = o[3 - p / 4] >>> 8 & 255, n[p + 3] = 255 & o[3 - p / 4]
}

function c(t, u, s) {
  var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    h = c.padding,
    v = void 0 === h ? "pkcs#7" : h,
    g = c.mode,
    l = c.iv,
    d = void 0 === l ? [] : l,
    y = c.output,
    w = void 0 === y ? "string" : y;
  if ("cbc" === g && ("string" == typeof d && (d = e(d)), 16 !== d.length)) throw new Error("iv is invalid");
  if ("string" == typeof u && (u = e(u)), 16 !== u.length) throw new Error("key is invalid");
  if (t = "string" == typeof t ? 0 !== s ? function(r) {
      for (var n = [], t = 0, o = r.length; t < o; t++) {
        var e = r.codePointAt(t);
        if (e <= 127) n.push(e);
        else if (e <= 2047) n.push(192 | e >>> 6), n.push(128 | 63 & e);
        else if (e <= 55295 || e >= 57344 && e <= 65535) n.push(224 | e >>> 12), n.push(128 | e >>> 6 & 63), n.push(128 | 63 & e);
        else {
          if (!(e >= 65536 && e <= 1114111)) throw n.push(e), new Error("input is not supported");
          t++, n.push(240 | e >>> 18 & 28), n.push(128 | e >>> 12 & 63), n.push(128 | e >>> 6 & 63), n.push(128 | 63 & e)
        }
      }
      return n
    }(t) : e(t) : r(t), ("pkcs#5" === v || "pkcs#7" === v) && 0 !== s)
    for (var b = n - t.length % n, m = 0; m < b; m++) t.push(b);
  var A = new Array(32);
  ! function(r, n, t) {
    for (var e = new Array(4), i = new Array(4), u = 0; u < 4; u++) i[0] = 255 & r[0 + 4 * u], i[1] = 255 & r[1 + 4 * u], i[2] = 255 & r[2 + 4 * u], i[3] = 255 & r[3 + 4 * u], e[u] = i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3];
    e[0] ^= 2746333894, e[1] ^= 1453994832, e[2] ^= 1736282519, e[3] ^= 2993693404;
    for (var s, p = 0; p < 32; p += 4) s = e[1] ^ e[2] ^ e[3] ^ o[p + 0], n[p + 0] = e[0] ^= a(f(s)), s = e[2] ^ e[3] ^ e[0] ^ o[p + 1], n[p + 1] = e[1] ^= a(f(s)), s = e[3] ^ e[0] ^ e[1] ^ o[p + 2], n[p + 2] = e[2] ^= a(f(s)), s = e[0] ^ e[1] ^ e[2] ^ o[p + 3], n[p + 3] = e[3] ^= a(f(s));
    if (0 === t)
      for (var c, h = 0; h < 16; h++) c = n[h], n[h] = n[31 - h], n[31 - h] = c
  }(u, A, s);
  for (var k = [], C = d, P = t.length, S = 0; P >= n;) {
    var E = t.slice(S, S + 16),
      x = new Array(16);
    if ("cbc" === g)
      for (var j = 0; j < n; j++) 0 !== s && (E[j] ^= C[j]);
    p(E, x, A);
    for (var q = 0; q < n; q++) "cbc" === g && 0 === s && (x[q] ^= C[q]), k[S + q] = x[q];
    "cbc" === g && (C = 0 !== s ? x : E), P -= n, S += n
  }
  if (("pkcs#5" === v || "pkcs#7" === v) && 0 === s) {
    for (var I = k.length, T = k[I - 1], U = 1; U <= T; U++)
      if (k[I - U] !== T) throw new Error("padding is invalid");
    k.splice(I - T, T)
  }
  return "array" !== w ? 0 !== s ? k.map((function(r) {
    return 1 === (r = r.toString(16)).length ? "0" + r : r
  })).join("") : i(k) : k
}
exports.arrayToUtf8 = i, exports.decrypt = function(r, n, t) {
  return c(r, n, 0, t)
}, exports.encrypt = function(r, n, t) {
  return c(r, n, 1, t)
};