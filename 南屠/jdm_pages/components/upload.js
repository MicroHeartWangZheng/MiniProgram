var e = require("../../302F12419CEDE14F56497A46F35AA3A7.js"),
  t = {
    components: {
      popupDialog: function() {
        return "../../components/popupDialog/popupDialog.js"
      },
      dialogInfo: function() {
        return "../../components/dialogInfo.js"
      },
      mpHtml: function() {
        return "../../node-modules/mp-html/dist/uni-app/components/mp-html/mp-html.js"
      }
    },
    props: {
      item: {
        type: Object,
        default: function() {
          return {}
        }
      },
      form: {
        type: Object,
        default: function() {
          return {}
        }
      },
      flags: {
        type: Boolean,
        default: function() {
          return !1
        }
      },
      tyjr: {
        type: String,
        default: function() {
          return ""
        }
      }
    },
    data: function() {
      return {
        localImg: "",
        tagStyle: {
          color: "#898989",
          text: "color:#898989",
          p: "color:#898989",
          a: "text-decoration:none!important;color: #a87e6c!important"
        },
        tip: "<p>1.证件可参照<a> 《优待人群证件类别要求》</a></p><p>2.请确保照片真实准确、完整清晰，大小须在2M以内，符合优待人群证件类别要求。如存在失实行为，可能会影响您的预约入馆。</p>",
        popupData: [{
          name: "拍照上传"
        }, {
          name: "从手机相册选择上传"
        }],
        headPortrait: "",
        dialogText: '<p class="dialogText">1）“三属”：须提供“中华人民共和国烈士遗属、因公牺牲军人遗属、病故军人遗属优待证”</p><p class="dialogText">2）退役军人：须提供“中华人民共和国退役军人优待证”</p><p class="dialogText">3）消防救援人员：须提供“国家综合性消防救援队伍干部证”或“国家综合性消防救援队伍消防员证”</p><p class="dialogText">4）献血荣誉证持有者：须提供“献血荣誉证”(非无偿献血)</p><p class="dialogText">5）医务人员：须提供“医师执业证”或“注册护士执业证”或“医师资格证”或“注册护士资格证”或“执业药师资格证”或“临床医学检验资格证”。</p><p class="dialogText">6）残疾人：中华人民共和国残疾人证</p><p class="dialogText"> 7）老年人：需满足65周岁（含）以上</p><p class="dialogText">8）直系亲属证明：结婚证、户口簿</p>'
      }
    },
    methods: {
      closesa: function() {
        this.localImg = ""
      },
      upload: function() {
        this.flags ? this.takePhotos() : this.$refs.popupDialog.openPopup()
      },
      onDialogVisibleChange: function(e) {},
      onSelcetClick: function(e) {
        "拍照上传" == e.name ? this.takePhotos() : "从手机相册选择上传" == e.name ? this.selectPhotoFromAlbum() : this.selectPhotoFromMessage(), this.selectData = e, this.$refs.popupDialog.closePopup()
      },
      certificateexplain: function() {
        this.$refs.dialogInfo.open({
          title: "有效证件照片的说明",
          isHtml: !0,
          content: this.dialogText,
          btn: "我已知晓"
        })
      },
      takePhotos: function() {
        var t = this;
        e.index.chooseImage({
          count: 1,
          sourceType: ["camera"],
          sizeType: ["original", "compressed"],
          success: function(e) {
            e && e.tempFilePaths && e.tempFilePaths.length > 0 && t.toCropperImg(e.tempFiles)
          }
        })
      },
      selectPhotoFromAlbum: function() {
        var t = this;
        e.index.chooseImage({
          count: 1,
          sourceType: ["album"],
          success: function(e) {
            e && e.tempFilePaths && e.tempFilePaths.length > 0 && t.toCropperImg(e.tempFiles)
          }
        })
      },
      selectPhotoFromMessage: function() {
        var t = this;
        e.wx$1.chooseMessageFile({
          count: 1,
          type: "image",
          success: function(e) {
            e && e.tempFiles && e.tempFiles.length > 0 && t.toCropperImg(e.tempFiles)
          }
        })
      },
      toCropperImg: function(e) {
        var t = e.length;
        this.wxUploadFile(e, 0, 0, 0, t, [])
      },
      wxUploadFile: function(t, o, a, i, l, n) {
        var s = this;
        e.wx$1.getImageInfo({
          src: t[i].tempFilePath || t[i].path,
          success: function(e) {}
        });
        var p = e.index.getStorageSync("token"),
          c = this;
        e.wx$1.showLoading({
          title: "正在上传" + (1 == l ? "" : "第" + (i + 1) + "个"),
          mask: !0
        }), e.wx$1.uploadFile({
          url: "".concat(this.$settings.fileUploadUrl, "/file/oss/uploadFile"),
          filePath: t[i].tempFilePath || t[i].path,
          name: "file",
          formData: {
            fileName: t[i].name || ""
          },
          header: {
            Authorization: "bearer " + p
          },
          success: function(e) {
            if (e.data) {
              e.data = JSON.parse(e.data), e.data = s.$utils.decryptSm4(e.data.data);
              var a = decodeURIComponent(e.data);
              try {
                a = JSON.parse(a)
              } catch (e) {}
              s.$emit("upload", a), s.$set(s, "headPortrait", a), n.push(a), o++, s.localImg = t[i].tempFilePath || t[i].path, s.$set(s.form, s.item.bind, a.url)
            }
          },
          fail: function(e) {
            a++
          },
          complete: function(s) {
            ++i == l ? (c.$set(c, "files", n), e.wx$1.showToast({
              title: a > 0 ? "上传失败" : "上传成功",
              icon: "success",
              duration: 2e3
            }), e.wx$1.hideLoading()) : c.wxUploadFile(t, o, a, i, l, n)
          }
        })
      }
    }
  };
Array || (e.resolveComponent("uni-icons") + e.resolveComponent("mpHtml") + e.resolveComponent("popup-dialog") + e.resolveComponent("dialogInfo"))(), Math;
var o = e._export_sfc(t, [
  ["render", function(t, o, a, i, l, n) {
    return e.e({
      a: !l.localImg
    }, l.localImg ? {
      f: l.localImg
    } : e.e({
      b: !a.flags
    }, a.flags ? {
      d: a.tyjr + "?timestamp=" + (new Date).getTime()
    } : {
      c: e.p({
        type: "image",
        size: "30",
        color: "#CDCFCD"
      })
    }, {
      e: e.o((function() {
        return n.upload && n.upload.apply(n, arguments)
      }))
    }), {
      g: l.localImg
    }, l.localImg ? {
      h: e.o(n.closesa),
      i: e.p({
        type: "trash-filled",
        size: "24",
        color: "red"
      })
    } : {}, {
      j: e.o(n.certificateexplain),
      k: e.p({
        content: l.tip,
        tagStyle: l.tagStyle
      }),
      l: e.sr("popupDialog", "f9190d02-3"),
      m: e.o(n.onDialogVisibleChange),
      n: e.o(n.onSelcetClick),
      o: e.p({
        isActive: !1,
        popupData: l.popupData,
        isMaskClick: !0
      }),
      p: e.sr("dialogInfo", "f9190d02-4")
    })
  }],
  ["__scopeId", "data-v-f9190d02"]
]);
wx.createComponent(o);