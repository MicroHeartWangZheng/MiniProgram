var e = require("../../88BC74C5AD7FA6DFEEDA1CC20FC30E96.js");
require("../../3D59DF82AD7FA6DF5B3FB785C1340E96.js");
Component({
  properties: {
    objectId: {
      type: String,
      value: "",
      observer: function(e) {
        e && this.checkSurvey(e)
      }
    },
    textColor: {
      type: String,
      value: "#000"
    },
    fontSize: {
      type: String,
      value: ""
    }
  },
  data: {
    visible: !1,
    surveyData: null
  },
  methods: {
    checkSurvey: function(t) {
      var a = this;
      (0, e.getQuestionnaireByObjectId)(t).then((function(e) {
        200 === e.code && null != e.data ? a.setData({
          visible: !0,
          surveyData: e.data
        }) : a.setData({
          visible: !1,
          surveyData: null
        })
      })).catch((function(e) {
        console.error("问卷获取失败:", e), a.setData({
          visible: !1,
          surveyData: null
        })
      }))
    },
    handleTap: function() {
      if (this.data.visible) {
        var e = encodeURIComponent(JSON.stringify(this.data.surveyData));
        wx.navigateTo({
          url: "/pages/other/questionSurvey?objectId=" + this.data.objectId + "&surveyData=" + e
        })
      }
    }
  }
});