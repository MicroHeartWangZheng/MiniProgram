var e = require("302F12419CEDE14F56497A46F35AA3A7.js"),
  t = require("C2C981E19CEDE14FA4AFE9E627F9A3A7.js"),
  n = require("E6064C639CEDE14F806024649ACAA3A7.js"),
  o = new e.JSEncrypt;
e.index.addInterceptor("request", {
  invoke: function(n) {
    if (n.noToken || -1 !== n.url.indexOf("https://image")) n.header = {
      "request-t": t.config.requestt + ""
    };
    else {
      var o = e.index.getStorageSync("token");
      n.header = o ? {
        Authorization: "bearer " + o,
        "request-t": t.config.requestt + ""
      } : {
        "request-t": t.config.requestt + ""
      }
    }
    if (n.userCode) {
      var i = e.index.getStorageSync("userInfo");
      i && i.userCode && (n.data.userCode = i.userCode)
    }
    return n
  },
  success: function() {},
  fail: function() {},
  complete: function() {},
  returnValue: function(e) {
    return e.then((function(e) {
      return e
    }))
  }
}), exports.request = function(i, a) {
  i.data || (i.data = {});
  var r = i.data;
  if (t.config.requestt) {
    (new Date).getTime();
    var s = e.index.getStorageSync("versioncontrol");
      r.langType = 3 == s ? 1 : 0,
          r.requestNo = n.utils.getuuid(),
          r.timestamp = (new Date).getTime(),
          o.setPublicKey(n.utils.getEncrypt()),
          r.timestamp = (new Date).getTime(),
          console.log("请求Url：", i.url);
      console.log("请求data：", JSON.stringify(r));
          r = {
            data: r = o.encryptLong(JSON.stringify(r))
    }
  }
  return e.index.request({
    url: i.url,
    data: "post" == i.method ? r : i.data,
    method: i.method || "GET",
    withCredentials: !1,
    noToken: i.noToken || !1,
    userCode: i.userCode || !1
  }).then((function (t) {
      console.log("返回：", t);
      console.log("返回data：", t.data);
    var o = e.index.getStorageSync("versioncontrol");
    if (t && 500 == t.code);
    else if (t && 200 == t.statusCode) {
      if (!t.data || 2007 != t.data.code) {
        if (0 === t.data.type) {
            console.log("返回的数据：", t.data.data);
            var i = n.utils.decryptSm4(t.data.data);
            i = decodeURIComponent(i);

            console.log("解密后的数据：", i);
          try {
            i = JSON.parse(i)
          } catch (e) {}
          t.data.data = i
        }
        return t.data
      }
      n.utils.removeStorageSync(["isLogin", "token", "userInfo"]), 3 == o ? e.index.navigateTo({
        url: "/english_pages/login/index"
      }) : 2 == o ? e.index.navigateTo({
        url: "/oldage_pages/login/index"
      }) : e.index.navigateTo({
        url: "/jdm_pages/login/index"
      })
    } else if (!t || 401 != t.statusCode && 2007 != t.statusCode)
      if (t && 2023 == t.statusCode) e.index.navigateTo({
        url: "/pages/index/index"
      });
      else if (t && 509 == t.statusCode) {
      var a;
      a = 3 === e.index.getStorageSync("versioncontrol") ? "Currently busy. Please try again." : "当前操作人数过多，请再次提交试试", e.index.showModal({
        title: "提示",
        content: a,
        showCancel: !1,
        showConfirm: !1,
        success: function(e) {
          e.confirm || e.cancel
        }
      })
    } else {
      if (t && t.data && "Document not found" == t.data.error) return;
      var r;
      (r = 3 === e.index.getStorageSync("versioncontrol") ? "Currently busy. Please try again." : "当前操作人数过多，请再次提交试试").length < 18 ? e.index.showToast({
        title: r,
        icon: "none",
        duration: 2e3
      }) : e.index.showModal({
        title: "提示",
        content: r,
        showCancel: !1,
        showConfirm: !1,
        success: function(e) {
          e.confirm || e.cancel
        }
      })
    } else n.utils.removeStorageSync(["isLogin", "token", "userInfo"]), 3 == o ? e.index.navigateTo({
      url: "/english_pages/login/index"
    }) : 2 == o ? e.index.navigateTo({
      url: "/oldage_pages/login/index"
    }) : e.index.navigateTo({
      url: "/jdm_pages/login/index"
    })
  })).catch((function(e) {}))
};
