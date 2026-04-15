Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = function(e) {
  return null != e && null != e ? e.replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/g, "").replace(/<img/g, "<img class='richTextImg'").replace(/<p/g, "<p class='richTextP'") : null
};