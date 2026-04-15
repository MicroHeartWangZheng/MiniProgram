var t, e, n, i = require("../../@babel/runtime/helpers/defineProperty"),
  a = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js"),
  o = require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js"),
  r = require("../../22CF3566AD7FA6DF44A95D614D730E96.js"),
  s = [],
  u = "";
Page({
  behaviors: [r.languageBehaviors],
  options: {
    pureDataPattern: /^_/
  },
  data: {
    list: [],
    _commitList: [],
    otherInputData: {}
  },
  onLoad: function(e) {
    var n = this;
    console.log(e), wx.showNavigationBarLoading(), (0, o.showLoading)(), t = (0, o.getCurrentDateTime)(), "" === getApp().globalData.authorizationc ? getApp().tokenReadyCallback = function(t) {
      200 == t.code ? n.handleOptions(e) : ((0, o.hideLoading)(), console.error("模板消息界面进入时未获取到token"))
    } : this.handleOptions(e)
  },
  handleOptions: function(t) {
    if (null != t.companyInfoId) this.getQuestion(t.companyInfoId);
    else if (null != t.id) this.getQuestion(t.id, 1);
    else if (null != t.surveyData) {
      var i = JSON.parse(decodeURIComponent(t.surveyData));
      e = i.title, n = i.questionnaireId, s = i.questionnaireDetails, this.setData({
        list: s.filter((function(t) {
          return "" == t.activateId
        }))
      }), (0, o.hideLoading)(), wx.hideNavigationBarLoading()
    }
  },
  getQuestion: function(t) {
    var i, r = this,
      d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    (0, o.getRealNameInfo)((function(t) {
      u = t.customerId
    })), 1 == d && (i = (0, a.getQuestionnaireById)(t)), 2 == d ? i = (0, a.getQuestionnaireByObjectId)(t) : (0, a.getQuestionnairePush)(t, 1), i.then((function(t) {
      (0, o.hideLoading)(), wx.hideNavigationBarLoading(), 200 == t.code ? (e = t.data.title, n = t.data.questionnaireId, s = t.data.questionnaireDetails, r.setData({
        list: s.filter((function(t) {
          return "" == t.activateId
        }))
      })) : (0, o.modal)(t.msg, (function() {
        (0, o.back)()
      }))
    })).catch((function(t) {
      (0, a.defaultCatch)(t, "获取问卷调查失败")
    }))
  },
  inputChange: function(i) {
    var a = this,
      o = i.currentTarget.dataset.id,
      r = i.detail.value,
      d = this.data.otherInputData;
    r instanceof Array ? -1 == r.findIndex((function(t) {
      return -1 == parseInt(t)
    })) && delete d[o] : (r = [r], delete d[o]);
    var c = this.data._commitList;
    c = c.filter((function(t) {
      return t.questionId != o
    }));
    var f = s.find((function(t) {
      return t.questionId == o
    }));
    r.forEach((function(i) {
      var a = parseInt(i);
      if (-1 != a) {
        var o = f.question.answers[a],
          r = {
            answer: o.title,
            answerId: o.answerId,
            answerSort: o.sort,
            answerTime: t,
            question: f.question.title,
            questionId: f.questionId,
            questionSort: f.sort,
            questionnaire: e,
            questionnaireId: n,
            userId: u
          };
        c.push(r)
      }
    }));
    var h = s.filter((function(t) {
        return "" == t.activateId || a.isActivate(t.activateId, c)
      })),
      l = function(t) {
        -1 == h.findIndex((function(e) {
          return e.questionId == t
        })) && delete d[t]
      };
    for (var I in d) l(I);
    this.setData({
      list: h,
      _commitList: c,
      otherInputData: d
    })
  },
  isActivate: function(t, e) {
    return "" != t && -1 != t.split(",").findIndex((function(t) {
      return "" != t && -1 != e.findIndex((function(e) {
        return e.answerId == t
      }))
    }))
  },
  otherInputChange: function(t) {
    var e, n = t.currentTarget.dataset.id,
      a = t.currentTarget.dataset.type,
      o = t.detail.value;
    "radio" == a ? this.setData((i(e = {}, "otherInputData.".concat(n), o), i(e, "_commitList", this.data._commitList.filter((function(t) {
      return t.questionId != n
    }))), e)) : this.setData(i({}, "otherInputData.".concat(n), o))
  },
  commit: function() {
    var i = this,
      r = this.data._commitList;
    Object.keys(this.data.otherInputData).forEach((function(a) {
      var o = s.find((function(t) {
          return t.questionId == a
        })),
        d = {
          answer: "(其他)".concat(i.data.otherInputData[a]),
          answerId: "",
          answerSort: 1,
          answerTime: t,
          question: o.question.title,
          questionId: o.questionId,
          questionSort: o.sort,
          questionnaire: e,
          questionnaireId: n,
          userId: u
        };
      r.push(d)
    })), this.setData({
      _commitList: r
    });
    var d = this.data.list.findIndex((function(t) {
      return t.isRequired && -1 == r.findIndex((function(e) {
        return e.questionId == t.questionId
      }))
    })); - 1 != d ? (0, o.toast)("请完成第".concat(d + 1, "题")) : ((0, o.showLoading)(), (0, a.addQuestionnaireRecord)(r).then((function(t) {
      (0, o.hideLoading)(), 200 == t.code ? ((0, o.toast)("提交成功"), setTimeout((function() {
        wx.redirectTo({
          url: "../index/index"
        })
      }), 2e3)) : (0, a.showWarningToast)(t, "提交失败")
    })).catch((function(t) {
      (0, a.defaultCatch)(t, "提交失败")
    })))
  }
});