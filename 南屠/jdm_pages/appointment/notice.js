var e = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = require("../../B5FE78D69CEDE14FD39810D1421AA3A7.js");
require("../../F13970549CEDE14F975F18534C3AA3A7.js"), require("../../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"), require("../../E6064C639CEDE14F806024649ACAA3A7.js"), require("../../99A56A709CEDE14FFFC30277932AA3A7.js"), require("../../97D575919CEDE14FF1B31D960FBAA3A7.js"), require("../../42DF72329CEDE14F24B91A35674AA3A7.js"), require("../../2800CA079CEDE14F4E66A20028DAA3A7.js");
var n = {
  components: {
    mpHtml: function() {
      return "../../node-modules/mp-html/dist/uni-app/components/mp-html/mp-html.js"
    }
  },
  computed: {
    allowClick: function() {
      var e = !1;
      return this.isAgree && this.time <= 0 && (e = !0), e
    }
  },
  data: function() {
    return {
      venue: 0,
      type: 0,
      timer: null,
      time: 5,
      isAgree: !1,
      content: "<p>1.场馆入口所在地址：侵华日军南京大屠杀遇难同胞纪念馆1号门。</p><p>2.开馆时间为8:30-17:30(16:30停止入馆)。每周一例行闭馆。</p><p>3.采取全员线上限量免费预约，每人每次可预约5名参观人员，额满为止。</p><p>4.预约采取实名制，观众提前1~7天通过侵华日军南京大屠杀遇难同胞纪念馆微信公众号，凭本人二代身份证、港澳居民来往内地通行证、台湾居民来往大陆通行证、护照等有效证件进行预约。系统放票时间为每日上午7:00。</p><p>5.预约成功后，观众须在预约时段到馆参观，请合理选择预约参观日期和具体入馆时段。如无法按时入馆，须在参观时段前通过微信公众号预约结果界面取消预约，累计两次逾期未取消预约会影响该账户再次预约。</p><p>6.观众须在预约时段持本人二代身份证、港澳居民来往内地通行证、台湾居民来往大陆通行证、护照等有效证件来馆。已预约参观南京大屠杀史展区的观众自纪念馆1号门入口凭有效证件核录后，经过安检入馆；已预约参观“三个必胜”专题展区的观众自江东中路入口入馆。入馆资格一次性有效，出馆后不能再次入馆。</p><p>7.咨询电话：025-86612230（8:00至20:00）</p><p>8.参观时需遵守《南京市国家公祭保障条例》及本馆有关规定。</p><p>其他未尽事宜，按国家有关法律法规执行。感谢您的理解与支持！</p>",
      url: "https://jemsfile.mochouu.com/nlh/prototype.json"
    }
  },
  onLoad: function(e) {
    this.venue = e.venue, this.type = e.type
  },
  mounted: function() {
    this.startDown()
  },
  unmounted: function() {
    clearTimeout(this.timer)
  },
  methods: {
    startDown: function() {
      var e = this;
      ! function t() {
        e.time > 0 && (e.timer = setTimeout((function() {
          e.time--, t()
        }), 1e3))
      }()
    },
    getDetail: function(e) {
      var n = this;
      e && (e = e + "?a=" + parseInt(1e5 * Math.random()), t.readFileDeail(e).then((function(e) {
        n.content = e.introduce
      })))
    },
    toggleAgree: function() {
      this.isAgree = !this.isAgree
    },
    skip: function() {
      this.allowClick && e.index.redirectTo({
        url: "/jdm_pages/appointment/appointment?venue=" + this.venue + "&type=" + this.type
      })
    }
  }
};
Array || (e.resolveComponent("page-head") + e.resolveComponent("mpHtml") + e.resolveComponent("uni-icons"))(), Math;
var i = e._export_sfc(n, [
  ["render", function(t, n, i, o, r, s) {
    return e.e({
      a: e.p({
        title: "预约须知"
      }),
      b: e.p({
        content: r.content
      }),
      c: e.p({
        type: r.isAgree ? "checkbox-filled" : "circle",
        color: "#A87E6C",
        size: "20"
      }),
      d: e.o((function() {
        return s.toggleAgree && s.toggleAgree.apply(s, arguments)
      })),
      e: r.time
    }, r.time ? {
      f: e.t(r.time)
    } : {}, {
      g: s.allowClick ? "" : 1,
      h: e.o((function() {
        return s.skip && s.skip.apply(s, arguments)
      }))
    })
  }],
  ["__scopeId", "data-v-eed957e1"]
]);
wx.createPage(i);