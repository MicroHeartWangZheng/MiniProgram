Component({
  properties: {
    title: String,
    content: {
      type: String,
      value: ""
    },
    signature: {
      type: String,
      value: ""
    },
    showCancel: {
      type: Boolean,
      value: !1
    },
    cancelText: {
      type: String,
      value: "取消"
    },
    confirmText: {
      type: String,
      value: "确定"
    },
    show: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    innerShow: !1,
    height: 0,
    aniClass: "ani openAni",
    contentArray: [],
    signatureArray: []
  },
  observers: {
    show: function(t) {
      t ? this.popUp() : this.disPopUp()
    },
    content: function(t) {
      t ? this.setData({
        contentArray: t.split("\n")
      }) : this.setData({
        contentArray: []
      })
    },
    signature: function(t) {
      t ? this.setData({
        signatureArray: t.split("\n")
      }) : this.setData({
        signatureArray: []
      })
    }
  },
  methods: {
    preventTouchMove: function() {},
    handleDisagree: function(t) {
      this.triggerEvent("disagree"), this.disPopUp()
    },
    handleAgree: function(t) {
      this.triggerEvent("agree"), this.disPopUp()
    },
    popUp: function() {
      this.setData({
        innerShow: !0,
        aniClass: "ani openAni"
      })
    },
    disPopUp: function() {
      var t = this;
      this.setData({
        aniClass: "ani closeAni"
      }), setTimeout((function() {
        t.setData({
          innerShow: !1
        })
      }), 500)
    }
  }
});