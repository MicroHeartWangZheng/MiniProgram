var e = require("../../utils/promiseutil.js"),
  t = require("../rcode.js"),
  r = require("../../../comm/utils/util"),
  i = (require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  s = require("../../../comm/model/resmodel.js");
module.exports = {
  f7c96989f: function () {
    return e.buildPromise((function (e, o) {
      ! function (e, o) {
        try {
          if (wx.createOffscreenCanvas) {
            var l = wx.createOffscreenCanvas({
                type: "2d",
                width: 300,
                height: 300
              }),
              u = l.getContext("2d");
            u.fontSize = 10, u.textBaseline = "alphabetic", u.fillStyle = "#069", u.font = "11px sans-serif";
            for (var d = ["It's just a test, 🏆 🏅 🥇 🥈 🥉", "ただのテスト, 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘", "仅仅是一个测试, 🌣 🌞 ⛅ 🌤 🌥 ⛱", "그냥 테스트, 📺 📻 📾 📡 😁 😀 😂.", " 🤠 🤡 🤑 🤓 🤖", "Vetëm një provë, 😅 😆 😊. 😎 ", "😇 😈. 😏 🤣 🤩 🤪 🥳.", "بس ایک امتحان, 🤦 🤷 🙅 🙆", "🙋 🙌 🙍 🙎 🙇 🙏", "แค่ทดสอบ, 👂 👃 👄 🗢 👅 🦷", "ਬੱਸ ਇੱਕ ਪ੍ਰੀਖਿਆ, 💪 🗲 🔥 💡 💩", "فقط یک آزمایش, 🍇 🍑 🍒 🍓 🥝", "පරීක්ෂණයක් පමණි, 🐒 🦍 🦧 🦥 🦘 🐨", "Зүгээр л туршилт, 🎃 🎁 🎂 🎈 🎉 🎊", "🐞 🐜 🕷 🕸 🦂 🦗 🦟 "], n = 0; n < d.length; n++) u.fillText(d[n], 5, 13.3333 * (n + 1));
            return void e(l.toDataURL("image/png"))
          }
          o(i.buildErrMsg(s.buildResModel(t.ERROR_BIZ_API_FAILD), i.e16b9dd22))
        } catch (e) {
          o(i.buildErrMsg(s.buildResModel(t.ERROR_BIZ_FEATURE_CRASH, "", r.getError(e)), i.e16b9dd22))
        }
      }(e, o)
    }), i.e16b9dd22)
  }
};