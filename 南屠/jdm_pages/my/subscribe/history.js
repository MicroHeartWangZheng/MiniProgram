var r = require("../../../302F12419CEDE14F56497A46F35AA3A7.js");
Array || r.resolveComponent("back-home")();
var e = r._export_sfc({
  props: {},
  data: function() {
    return {
      src: ""
    }
  },
  onLoad: function(r) {
    this.src = r.src
  }
}, [
  ["render", function(r, e, n, o, c, t) {
    return {
      a: c.src
    }
  }]
]);
wx.createPage(e);