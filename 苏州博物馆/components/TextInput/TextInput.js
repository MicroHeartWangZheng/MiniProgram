Component({
  options: {
    pureDataPattern: /^_/
  },
  properties: {
    title: String,
    placeholder: String,
    value: String,
    key: String,
    disabled: {
      type: Boolean,
      value: !1
    },
    notNull: {
      type: Boolean,
      value: !1
    },
    maxlength: {
      type: Number,
      value: 1e3
    },
    errorKey: {
      type: String,
      value: ""
    },
    showErrorToast: {
      type: Boolean,
      value: !0
    },
    multiLine: {
      type: Boolean,
      value: !1
    },
    type: {
      type: String,
      value: "text"
    }
  },
  data: {
    showError: !1
  },
  observers: {
    title: function(e) {
      var t = this.properties,
        r = t.title,
        o = t.placeholder;
      "" == e || null == e || null != o && "" != o || this.setData({
        placeholder: "请输入" + r
      })
    },
    errorKey: function(e) {
      var t = this,
        r = this.properties,
        o = r.title,
        a = r.key,
        i = r.showErrorToast;
      e == a && (i && wx.showToast({
        title: "请输入" + o,
        duration: 2e3,
        icon: "none"
      }), this.setData({
        showError: !0
      }), setTimeout((function() {
        t.setData({
          showError: !1
        })
      }), 2e3))
    }
  },
  methods: {
    _inputChange: function(e) {
      this.triggerEvent("inputChange", {
        key: this.properties.key,
        value: e.detail.value
      })
    }
  }
});