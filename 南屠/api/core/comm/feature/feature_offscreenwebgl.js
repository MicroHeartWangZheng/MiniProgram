var e = require("../../utils/promiseutil.js"),
  r = require("../rcode.js"),
  t = require("../../../comm/utils/util"),
  a = (require("../../../comm/utils/logutil"), require("../consts/ft_code.js")),
  i = require("../../../comm/model/resmodel.js");
module.exports = {
  ff2a44dcd: function () {
    return e.buildPromise((function (e, s) {
      ! function (e, s) {
        try {
          if (wx.createOffscreenCanvas) {
            var E = "",
              o = wx.createOffscreenCanvas({
                type: "webgl",
                width: 100,
                height: 100
              });
            o.width = 100, o.height = 100;
            var u = o.getContext("webgl", {
                alpha: !1,
                preserveDrawingBuffer: !0
              }),
              g = u.createBuffer();
            u.bindBuffer(u.ARRAY_BUFFER, g);
            var n = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            u.bufferData(u.ARRAY_BUFFER, n, u.STATIC_DRAW), g.itemSize = 3, g.numItems = 3;
            var m = u.createProgram(),
              _ = u.createShader(u.VERTEX_SHADER);
            u.shaderSource(_, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), u.compileShader(_);
            var R = u.createShader(u.FRAGMENT_SHADER);
            u.shaderSource(R, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), u.compileShader(R), u.attachShader(m, _), u.attachShader(m, R), u.linkProgram(m), u.useProgram(m), m.vertexPosAttrib = u.getAttribLocation(m, "attrVertex"), m.offsetUniform = u.getUniformLocation(m, "uniformOffset"), u.enableVertexAttribArray(m.vertexPosAttrib), u.vertexAttribPointer(m.vertexPosAttrib, g.itemSize, u.FLOAT, !1, 0, 0), u.uniform2f(m.offsetUniform, 1, 1), u.clearColor(0, 0, 0, 0), u.clear(u.COLOR_BUFFER_BIT), u.drawArrays(u.TRIANGLE_STRIP, 0, g.numItems), u.finish(), E += u.canvas.toDataURL();
            var l = [];
            l.push("webgl alpha bits:" + u.getParameter(u.ALPHA_BITS)), l.push("webgl antialiasing:" + (u.getContextAttributes().antialias ? "yes" : "no")), l.push("webgl blue bits:" + u.getParameter(u.BLUE_BITS)), l.push("webgl depth bits:" + u.getParameter(u.DEPTH_BITS)), l.push("webgl green bits:" + u.getParameter(u.GREEN_BITS)), l.push("webgl max combined texture image units:" + u.getParameter(u.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), l.push("webgl max cube map texture size:" + u.getParameter(u.MAX_CUBE_MAP_TEXTURE_SIZE)), l.push("webgl max fragment uniform vectors:" + u.getParameter(u.MAX_FRAGMENT_UNIFORM_VECTORS)), l.push("webgl max render buffer size:" + u.getParameter(u.MAX_RENDERBUFFER_SIZE)), l.push("webgl max texture image units:" + u.getParameter(u.MAX_TEXTURE_IMAGE_UNITS)), l.push("webgl max texture size:" + u.getParameter(u.MAX_TEXTURE_SIZE)), l.push("webgl max varying vectors:" + u.getParameter(u.MAX_VARYING_VECTORS)), l.push("webgl max vertex attribs:" + u.getParameter(u.MAX_VERTEX_ATTRIBS)), l.push("webgl max vertex texture image units:" + u.getParameter(u.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), l.push("webgl max vertex uniform vectors:" + u.getParameter(u.MAX_VERTEX_UNIFORM_VECTORS)), l.push("webgl red bits:" + u.getParameter(u.RED_BITS)), l.push("webgl renderer:" + u.getParameter(u.RENDERER)), l.push("webgl shading language version:" + u.getParameter(u.SHADING_LANGUAGE_VERSION)), l.push("webgl stencil bits:" + u.getParameter(u.STENCIL_BITS)), l.push("webgl vendor:" + u.getParameter(u.VENDOR)), l.push("webgl version:" + u.getParameter(u.VERSION));
            var b = u.getExtension("WEBGL_debug_renderer_info");
            return b && b.UNMASKED_VENDOR_WEBGL && l.push("GPU VENDOR:" + u.getParameter(b.UNMASKED_VENDOR_WEBGL)), b && b.UNMASKED_RENDERER_WEBGL && l.push("GPU RENDER:" + u.getParameter(b.UNMASKED_RENDERER_WEBGL)), void e(E += JSON.stringify(l))
          }
          s(a.buildErrMsg(i.buildResModel(r.ERROR_BIZ_API_FAILD), a.e8ad9d921))
        } catch (e) {
          s(a.buildErrMsg(i.buildResModel(r.ERROR_BIZ_FEATURE_CRASH, "", t.getError(e)), a.e8ad9d921))
        }
      }(e, s)
    }), a.e8ad9d921)
  }
};