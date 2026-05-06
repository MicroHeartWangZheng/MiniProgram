var t = require("F13970549CEDE14F975F18534C3AA3A7.js"),
  e = require("C2C981E19CEDE14FA4AFE9E627F9A3A7.js").config.mallApi;
exports.appointmentQuery = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/appointment/query"),
    method: "post",
    data: r
  })
}, exports.cameraStatisticsQueryDetail = function(r) {
  return t.request({
    url: "".concat(e, "/manager-server/cameraStatistics/queryDetail"),
    method: "post",
    data: r
  })
}, exports.dataReportGetData = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/dataReport/getData"),
    method: "post",
    data: r
  })
}, exports.orderDetail = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/order/detail"),
    method: "post",
    data: r
  })
}, exports.orderList = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/order/list"),
    method: "post",
    data: r
  })
}, exports.orderRefund = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/order/refund"),
    method: "post",
    data: r
  })
}, exports.orderUpdateRelationShipInfo = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/order/updateRelationShipInfo"),
    method: "post",
    data: r
  })
}, exports.visitorDel = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/del"),
    method: "post",
    data: r
  })
}, exports.visitorList = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/list"),
    method: "post",
    data: r
  })
}, exports.visitorSaveGa = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveGa"),
    method: "post",
    data: r
  })
}, exports.visitorSaveHz = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveHz"),
    method: "post",
    data: r
  })
}, exports.visitorSaveSfz = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveSfz"),
    method: "post",
    data: r
  })
}, exports.visitorSaveSfzYd = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveSfzYd"),
    method: "post",
    data: r
  })
}, exports.visitorSaveSfzet = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveSfzet"),
    method: "post",
    data: r
  })
}, exports.visitorSaveSfzlr = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveSfzlr"),
    method: "post",
    data: r
  })
}, exports.visitorSaveTw = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveTw"),
    method: "post",
    data: r
  })
}, exports.visitorSaveYj = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveYj"),
    method: "post",
    data: r
  })
}, exports.visitorSaveYjYd = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveYjYd"),
    method: "post",
    data: r
  })
}, exports.visitorSaveYjet = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveYjet"),
    method: "post",
    data: r
  })
}, exports.visitorSaveYjlr = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/saveYjlr"),
    method: "post",
    data: r
  })
}, exports.visitorUpdate = function(r) {
  return t.request({
    url: "".concat(e, "/app-server/visitor/update"),
    method: "post",
    data: r
  })
};