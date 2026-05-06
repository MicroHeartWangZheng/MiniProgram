var t = require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),
  e = require("../../../../42DF72329CEDE14F24B91A35674AA3A7.js"),
  i = {
    components: {
      popupDialog: function() {
        return "../../../../components/popupDialog/popupDialog.js"
      }
    },
    computed: {
      targetList: {
        get: function() {
          return this.value
        },
        set: function(t) {
          this.$emit("update:value", t)
        }
      },
      itemImgs: function() {
        return function(t) {
          var e = [],
            i = this.targetList.filter((function(e) {
              return t == e.visitorCode
            }));
          return i[0] && (e = i[0].dictImgs ? i[0].dictImgs : []), e
        }
      }
    },
    name: "",
    data: function() {
      return {
        popupData: [{
          name: "拍照上传"
        }, {
          name: "从手机相册选择上传"
        }]
      }
    },
    mounted: function() {},
    methods: {
      itemImgs: function() {
        return function(t) {
          var e = [],
            i = this.targetList.filter((function(e) {
              return t == e.visitorCode
            }));
          return i[0] && (e = i[0].dictImgs ? i[0].dictImgs : []), e
        }
      },
      addImg: function(t) {
        this.$refs.popupDialogRef.openPopup()
      },
      delImg: function(t, e) {
        var i;
        this.targetList.forEach((function(e, s) {
          t.visitorCode == e.visitorCode && (i = s)
        }));
        var s = JSON.parse(JSON.stringify(this.targetList[i].imgs)),
          o = JSON.parse(JSON.stringify(this.targetList[i].dictImgs));
        s.splice(e, 1), o.splice(e, 1), this.$set(this.targetList[i], "imgs", s), this.$set(this.targetList[i], "dictImgs", o)
      },
      onSelcetClick: function(t) {
        "拍照上传" == t.name ? this.imgSelect(1) : "从手机相册选择上传" == t.name ? this.imgSelect(2) : this.imgSelect(4)
      },
      imgSelect: function(e) {
        var i = this;
        this.$refs.popupDialogRef.closePopup(), 4 != e && (1 != e && 2 != e ? 3 == e && t.wx$1.chooseMessageFile({
          count: 1,
          type: "image",
          success: function(t) {
            i.imgUpload(t.tempFiles[0])
          }
        }) : t.index.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: 1 == e ? ["camera"] : ["album"],
          success: function(t) {
            var e = t.tempFilePaths;
            i.imgUpload(e[0])
          }
        }))
      },
      imgUpload: function(e) {
        var i = this,
          s = t.index.getStorageSync("token");
        t.wx$1.uploadFile({
          url: "".concat(this.$settings.fileUploadUrl, "/file/oss/uploadFile"),
          filePath: e,
          name: "file",
          formData: {
            fileName: ""
          },
          header: {
            Authorization: "bearer " + s
          },
          success: function(t) {
            t.data = JSON.parse(t.data), t.data = i.$utils.decryptSm4(t.data.data);
            var s = decodeURIComponent(t.data);
            try {
              s = JSON.parse(s)
            } catch (t) {}
            var o = [],
              a = [];
            o.push(s.url), a.push(e), i.$set(i.targetList[0], "imgs", o), i.$set(i.targetList[0], "dictImgs", a)
          }
        })
      }
    }
  };
Array || t.resolveComponent("popup-dialog")();
var s = t._export_sfc(i, [
  ["render", function(i, s, o, a, n, r) {
    return {
      a: t.o((function(t) {
        return r.addImg(i.item)
      })),
      b: e._imports_2$4,
      c: t.sr("popupDialogRef", "5d4fa591-0"),
      d: t.o(r.onSelcetClick),
      e: t.p({
        isActive: !1,
        popupData: n.popupData,
        isMaskClick: !0
      })
    }
  }],
  ["__scopeId", "data-v-5d4fa591"]
]);
wx.createComponent(s);