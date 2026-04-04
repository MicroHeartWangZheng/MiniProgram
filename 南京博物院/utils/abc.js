var r = t;
! function (r, e) {
  for (var n = t, a = c();;) try {
    if (599153 === parseInt(n(147)) / 1 + -parseInt(n(154)) / 2 * (parseInt(n(143)) / 3) + parseInt(n(133)) / 4 * (parseInt(n(139)) / 5) + parseInt(n(146)) / 6 + parseInt(n(128)) / 7 * (-parseInt(n(134)) / 8) + parseInt(n(155)) / 9 + parseInt(n(142)) / 10) break;
    a.push(a.shift())
  } catch (r) {
    a.push(a.shift())
  }
}();
var e = require(r(125)),
  n = (require(r(126)).sm2, r(140));
r(158);

function t(r, e) {
  var n = c();
  return (t = function (r, e) {
    return n[r -= 125]
  })(r, e)
}

function a(n) {
  var t = r;
  return e[t(135)][t(141)].parse(n)
}

function s(n) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, a = r, s = 0; s < t; s++) n = e[a(157)](n)[a(144)]();
  return n
}

function c() {
    var r = ["AES", "encrypt", "timestamp", "startsWith", "CBC", "test", "1234MfFqBd", "2337813Alyyyh", "substring", "MD5", "04c2d2dddae376eb63b9e1caf0fa3ef06010e59fef0d1e54ff87b8977389aac90c93227f26bda7d88d84e0c1048e9a8dd963f04aa65e175bbea51900e03ba049d8", "./crypto-js.js", "miniprogram-sm-crypto", "stringify", "518jurMZt", "mode", "Base64", "mzblzml210621", "doEncrypt", "5564MqvPkj", "99192zqKpLz", "enc", "replace", "appSecret", "Pkcs7", "1415xAABik", "292dtzsufpq4dcey", "Utf8", "7015310JYhlca", "4584hhcrID", "toString", "userId", "6461034LuHXBX", "27675BNsxSQ"];
  return (c = function () {
    return r
  })()
}
module.exports = {
  decrypt: function (t) {
    var s = r,
      c = a("pblnbs3f8o2z6anb"),
      p = a(n);
    return t = (t = t[s(136)](/\r\n/g, "")).replace(/\n/g, ""), t = e[s(135)][s(130)].parse(t), t = e.enc.Base64[s(127)](t), e[s(148)].decrypt(t, c, {
      iv: p,
      mode: e[s(129)][s(152)],
      padding: e.pad.Pkcs7
    })[s(144)](e.enc[s(141)])
  },
  encrypt: function (t) {
    var s = r,
      c = a("pblnbs3f8o2z6anb"),
      p = a(n);
    return e[s(148)][s(149)](t, c, {
      iv: p,
      mode: e.mode[s(152)],
      padding: e.pad[s(138)]
    }).toString()
  },
  md5: s,
  sign: function (e, n) {
    var t = r;
    return s(t(150) + e + t(145) + n + t(137) + t(131))
  },
  signNoParam: function (e) {
    var n = r;
    return s(n(150) + e + n(137) + n(131))
  }
};