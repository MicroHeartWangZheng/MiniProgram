Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.GetDailyAreaData = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/apfPeriod/getCenterRealTime", {}, 3)
}, exports.GetDailyAreaDataOther = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/apfDay/getOtherLibraryDayData?venue=".concat(t), {}, 3)
}, exports.GetDailyAreaDataWest = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/apfDay/getWestRealTime", {}, 3)
}, exports.GetNewsPage = function(t) {
  var r = t.pageSize,
    i = void 0 === r ? 10 : r,
    o = t.pageIndex,
    p = void 0 === o ? 1 : o;
  return e.default.get(e.api.sbDynamic + "GetNewsPage?where=会员&channelNo=&pageSize=".concat(i, "&pageIndex=").concat(p))
}, exports.GetNewsPageDetail = function(t) {
  return e.default.get(e.api.sbDynamic + "GetNewsByGuid?guid=".concat(t))
}, exports.addMember = function(t) {
  return e.default.post(e.api.vip + "miniApi/addMember", t)
}, exports.addMemberFamily = function(t) {
  var r = t.memberId,
    i = t.name,
    o = t.documentType,
    p = t.documentNumber,
    u = t.phone;
  return e.default.post(e.api.vip + "miniApi/addMemberFamily", {
    memberId: r,
    name: i,
    documentType: o,
    documentNumber: p,
    phone: u
  })
}, exports.cancelOrder = function(t) {
  return e.default.post(e.api.vip + "miniApi/cancelOrder", {
    id: t
  })
}, exports.checkCert = function(t, r) {
  return e.default.post(e.api.storeVip + "api/checkCert", {
    id: t,
    verifyAccountId: r
  })
}, exports.createOrder = function(t) {
  return e.default.post(e.api.vip + "miniApi/createOrder", {
    id: t
  })
}, exports.delXsOverview = function(t) {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/xsOverview/deleteBatch", {
    delIds: t
  }, 3)
}, exports.deleteMember = function(t) {
  return e.default.post(e.api.vip + "miniApi/deleteMember", {
    phone: t
  })
}, exports.deleteMemberFamily = function(t) {
  return e.default.post(e.api.vip + "miniApi/deleteMemberFamily", {
    id: t
  })
}, exports.exchangeGoods = function(t) {
  var r = t.goodsId,
    i = t.receiverAddress,
    o = t.vipId;
  return e.default.post(e.api.storeVip + "api/goods/exchangeGoods", {
    goodsId: r,
    receiverAddress: i,
    vipId: o
  })
}, exports.getBXRJXFData = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/xsOverview/queryPerConsume")
}, exports.getDictionaryByCode = function(t, r) {
  return e.default.get(e.api.storeVip + "common/getDictionaryByCode", {
    dictionaryCode: t,
    prefix: r
  })
}, exports.getDocumentTypeList = function() {
  return e.default.get(e.api.saas + "customerCert/getDocumentTypeList?systemCode=BWG_SUZHOU")
}, exports.getHotGoods = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/wc/queryHotProduct")
}, exports.getLNXSData = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/xsOverview/queryAllByYears")
}, exports.getLNXSXXData = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/xsOverview/queryByVenueAndYears")
}, exports.getNightStat = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/apfDay/getNightStat?venue=".concat(t), {}, 3)
}, exports.getStatOverView = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/apfMonth/statOverView", {}, 3)
}, exports.getTodayPeriodList = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/apfPeriod/getTodayPeriodList", {}, 3)
}, exports.getVolPeoNumYears = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/volPeoNum/getYears", {}, 3)
}, exports.getYearList = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/cockpitActApi/getYearList", {}, 3)
}, exports.importFamilyByExcel = function(t) {
  var r = t.fileId,
    i = t.memberId;
  return e.default.post(e.api.vip + "miniApi/importFamilyByExcel", {
    fileId: r,
    memberId: i
  })
}, exports.queryCanRenew = function(t) {
  return e.default.get(e.api.vip + "miniApi/queryCanRenew?vipId=".concat(t))
}, exports.queryCheckCert = function(t) {
  return e.default.post(e.api.storeVip + "api/queryCheckCert", {
    verifyTime: t
  })
}, exports.queryCkfYears = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/queryCkfYears", {}, 3)
}, exports.queryCulKeepingInfo = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/queryCulKeepingInfo?year=".concat(t), {}, 3)
}, exports.queryCulUseInfo = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/queryCulUseInfo", {}, 3)
}, exports.queryCustomerMenu = function() {
  return e.default.get(e.api.storeVip + "api/queryCustomerMenu")
}, exports.queryDictList = function() {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/xsDictionary/queryDictList", {}, 3)
}, exports.queryExchangeRecord = function(t) {
  var r = t.pageSize,
    i = t.pageNum,
    o = t.categoryId,
    p = t.vipId;
  return e.default.post(e.api.storeVip + "api/goods/queryExchangeRecord", {
    pageSize: r,
    pageNum: i,
    categoryId: o,
    vipId: p
  })
}, exports.queryGoods = function(t) {
  var r = t.categoryId,
    i = t.pageSize,
    o = t.pageNum;
  return e.default.post(e.api.storeVip + "api/goods/queryPageList", {
    categoryId: r,
    pageSize: i,
    pageNum: o
  })
}, exports.queryGoodsById = function(t) {
  return e.default.get(e.api.storeVip + "api/goods/queryById/".concat(t))
}, exports.queryGoodsCategory = function() {
  return e.default.post(e.api.storeVip + "api/goods/queryCategoryList")
}, exports.queryMemberByCustomerId = function() {
  return e.default.get(e.api.vip + "miniApi/queryMemberByCustomerId")
}, exports.queryMemberFamilyList = function(t) {
  return e.default.post(e.api.vip + "miniApi/queryMemberFamilyList", {
    memberId: t
  })
}, exports.queryMemberOperationRecord = function(t) {
  return e.default.post(e.api.vip + "miniApi/queryMemberOperationRecord", {
    vipDataId: t
  })
}, exports.queryMyCertDetailList = function(t) {
  var r = t.vipId,
    i = t.goodsId,
    o = t.isUse;
  return e.default.post(e.api.storeVip + "api/queryMyCertDetailList", {
    vipId: r,
    goodsId: i,
    isUse: o
  })
}, exports.queryMyCertList = function(t) {
  return e.default.post(e.api.storeVip + "api/queryMyCertList", {
    vipId: t
  })
}, exports.queryMyOrderDetail = function(t) {
  return e.default.post(e.api.storeVip + "api/queryMyOrderDetail", {
    id: t
  })
}, exports.queryOperationRecordDetail = function(t) {
  return e.default.post(e.api.vip + "miniApi/queryOperationRecordDetail", {
    id: t
  })
}, exports.queryPayState = function(t) {
  return e.default.post(e.api.vip + "miniApi/queryPayState", {
    id: t
  })
}, exports.queryPlatformList = function() {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/xsPlatformMng/queryPageList", {
    param: {
      pageSize: 999
    }
  })
}, exports.queryReceiptById = function(t) {
  return e.default.get(e.api.storeVip + "api/receipt/queryById/".concat(t))
}, exports.queryReceiptPageList = function(t) {
  var r = t.categoryId,
    i = t.pageSize,
    o = t.pageNum;
  return e.default.post(e.api.storeVip + "api/receipt/queryPageList", {
    categoryId: r,
    pageSize: i,
    pageNum: o
  })
}, exports.queryServiceProvider = function() {
  return e.default.get(e.api.storeVip + "api/queryServiceProvider")
}, exports.querySmsVCode = function(t, r, i) {
  return e.default.get(e.api.saas + "saas/querySmsVCode", {
    phone: t,
    vcode: r,
    vid: i
  })
}, exports.queryStatAgeCount = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/cockpitActApi/statAgeCount?year=".concat(t), {}, 3)
}, exports.queryStatAncientBook = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/cockpitAnbApi/statAncientBook", {}, 3)
}, exports.queryStatCount = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/cockpitActApi/statCount?year=".concat(t), {}, 3)
}, exports.queryStatCurrentExhibition = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/cockpitExhApi/statCurrentExhibition", {}, 3)
}, exports.queryStatIncome = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/cockpitActApi/statIncome?year=".concat(t), {}, 3)
}, exports.queryStatVisitorsByDate = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/apfDay/statVisitorsByDate?date=".concat(t), {}, 3)
}, exports.queryTrmAgeYear = function(t) {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/trmAgeYear/queryPageList", {
    entity: {
      title: t
    }
  }, 3)
}, exports.queryTrmGenderYear = function(t) {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/trmGenderYear/queryPageList", {
    entity: {
      title: t
    }
  }, 3)
}, exports.queryTrmYear = function() {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/trmReserveYear/queryYearList", {}, 3)
}, exports.queryVipCanUseCert = function(t) {
  var r = t.vipId,
    i = t.type;
  return e.default.post(e.api.storeVip + "api/queryVipCanUseCert", {
    vipId: r,
    type: i
  })
}, exports.queryVipConfig = function() {
  return e.default.post(e.api.vip + "miniApi/queryVipConfig", {
    configCode: "VIP_BENEFIT"
  })
}, exports.queryVipConsume = function(t) {
  return e.default.post(e.api.vip + "miniApi/queryVipConsume", {
    year: t
  })
}, exports.queryVipOverview = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/queryVipOverview?year=".concat(t), {}, 3)
}, exports.queryVipPoints = function(t) {
  return e.default.get(e.api.storeVip + "api/queryVipPoints?vipId=".concat(t))
}, exports.queryVipPointsDetail = function(t) {
  return e.default.get(e.api.storeVip + "api/queryVipPointsDetail?vipId=".concat(t))
}, exports.queryVipSexAndType = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/queryVipSexAndType?year=".concat(t), {}, 3)
}, exports.queryVipTypeById = function(t) {
  return e.default.post(e.api.vip + "miniApi/queryVipTypeById", {
    id: t
  })
}, exports.queryVipYears = function() {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/api/queryVipSexAndTypeYear", {}, 3)
}, exports.queryVolPeoNum = function(t) {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/volPeoNum/cockpit", {
    year: t
  }, 3)
}, exports.queryXsInfo = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/api/xsOverview/queryXsInfo?dateName=".concat(t), {}, 3)
}, exports.queryXsOverviewByDate = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/xsOverview/queryByDate/".concat(t), {}, 3)
}, exports.queryXsOverviewById = function(t) {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/xsOverview/queryById/".concat(t), {}, 3)
}, exports.queryXsOverviewPageList = function(t) {
  var r = t.pageSize,
    i = t.pageNum;
  return e.default.post(e.api.cockpit + "sw-dss-cloud/xsOverview/queryPageList", {
    entity: {},
    param: {
      pageNum: i,
      pageSize: r
    }
  }, 3)
}, exports.queryYearInfo = function(t) {
  return e.default.get(e.api.trm + "api/personalReserve/queryYearInfo/".concat(t))
}, exports.renewMember = function(t) {
  return e.default.post(e.api.vip + "miniApi/renewMember", t)
}, exports.saveBatch = function(t) {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/xsOverview/save", t, 3)
}, exports.setAuthorizedPerson = function(t) {
  var r = t.smsCode,
    i = t.authorizedPhone,
    o = t.authorizedExpireTime;
  return e.default.post(e.api.vip + "miniApi/setAuthorizedPerson", {
    smsCode: r,
    authorizedPhone: i,
    authorizedExpireTime: o
  })
}, exports.statCusAnnualReport = function(t, r) {
  return e.default.get(e.api.activity + "api/stat/statCusAnnualReport", {
    customerId: t,
    year: r
  })
}, exports.statTemporaryExhibitionSurvey = function() {
  return e.default.get(e.api.cockpit + "sw-dss-cloud/cockpitExhApi/statTemporaryExhibitionSurvey", {}, 3)
}, exports.szCustomerLogin = function() {
  return e.default.get(e.api.cockpit + "sw-basic-cloud/sw/szCustomerLogin", {}, 4)
}, exports.updateBatch = function(t) {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/xsOverview/update", t, 3)
}, exports.updateMemberFamily = function(t) {
  var r = t.memberId,
    i = t.name,
    o = t.documentType,
    p = t.documentNumber,
    u = t.phone,
    a = t.id;
  return e.default.post(e.api.vip + "miniApi/updateMemberFamily", {
    id: a,
    memberId: r,
    name: i,
    documentType: o,
    documentNumber: p,
    phone: u
  })
}, exports.uploadReceipt = function(t) {
  var r = t.source,
    i = t.orderNo,
    o = t.orderTime,
    p = t.points,
    u = t.picture,
    a = t.remark,
    n = t.vipId,
    s = t.vipName,
    c = t.documentNumber,
    d = t.phoneNumber;
  return e.default.post(e.api.storeVip + "api/receipt/upload", {
    source: r,
    orderNo: i,
    orderTime: o,
    points: p,
    picture: u,
    remark: a,
    vipId: n,
    vipName: s,
    documentNumber: c,
    phoneNumber: d
  })
}, exports.useGoods = function(t) {
  var r = t.id,
    i = t.receiverAddress,
    o = t.vipId;
  return e.default.post(e.api.storeVip + "api/goods/useGoods", {
    id: r,
    receiverAddress: i,
    vipId: o
  })
}, exports.volServiceDuration = function(t) {
  return e.default.post(e.api.cockpit + "sw-dss-cloud/volServiceDuration/cockpit", {
    year: t
  }, 3)
};
var e = function(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var i = t(r);
  if (i && i.has(e)) return i.get(e);
  var o = {},
    p = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var a = p ? Object.getOwnPropertyDescriptor(e, u) : null;
      a && (a.get || a.set) ? Object.defineProperty(o, u, a) : o[u] = e[u]
    } o.default = e, i && i.set(e, o);
  return o
}(require("AC0CE581AD7FA6DFCA6A8D86B5E30E96.js"));
require("FA9D4A90AD7FA6DF9CFB2297F7F30E96.js");

function t(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap,
    i = new WeakMap;
  return (t = function(e) {
    return e ? i : r
  })(e)
}