var e = require("F13970549CEDE14F975F18534C3AA3A7.js"),
  t = require("C2C981E19CEDE14FA4AFE9E627F9A3A7.js"),
  r = t.config.mallApi;
t.config.productApi, exports.calendarGetAppointmentTime = function(t) {
  return e.request({
    url: "".concat(r, "/app-server/calendar/getAppointmentTime"),
    method: "post",
    data: t
  })
}, exports.calendarGetCalendar = function(t) {
  return e.request({
    url: "".concat(r, "/app-server/calendar/getCalendar"),
    method: "post",
    data: t
  })
}, exports.readFileDeail = function(t) {
  return e.request({
    url: t,
    method: "get"
  })
};