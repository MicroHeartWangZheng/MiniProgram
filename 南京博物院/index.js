var e = require("./api/plus/tdiduaid.js");
module.exports = {
  init: e.uaidInit,
  getTicket: e.getUaidTicket,
  getDeviceToken: e.getUaidDeviceToken,
  getDeviceTokenV2: e.getUaidDeviceTokenV2,
  getDeviceTokenV3: e.getUaidDeviceTokenV3,
  getDeviceTokenX: e.getUaidDeviceTokenX,
  getSDKInfo: e.getUaidSDKInfo,
  getDeviceInfo: e.getUaidDeviceInfo,
  activateSign: e.uaidActivateSign,
  signData: e.uaidSignData,
  isActivate: e.uaidIsActivate
};