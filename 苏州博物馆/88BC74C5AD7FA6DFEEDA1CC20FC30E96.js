Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.activityOrderPaySuccess = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/checkPayStatus", {
    orderListId: e
  })
}, exports.activityQueryById = function(e) {
  return t.default.post(t.api.activity + "api/activity/queryById", {
    activityId: e
  })
}, exports.activityQueryImgCode = function() {
  return t.default.post(t.api.activity + "api/activityReserve/queryImgCode")
}, exports.activityQueryOrderDetail = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/queryOrderListDetail", {
    orderListId: e
  })
}, exports.activityQueryOrderList = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/queryOrderList", {
    param: {
      pageSize: "100",
      pageNum: e
    },
    entity: {}
  })
}, exports.activityQueryTicketById = function(e) {
  return t.default.post(t.api.activity + "api/activity/queryTicketById", {
    activityId: e
  })
}, exports.activitySignIn = function(e) {
  return t.default.post(t.api.activity + "api/reserveSign/updateCheckOrderActivity", {
    ids: e,
    checkFrom: 2,
    checkType: 2
  })
}, exports.addQuestionnaireRecord = function(e) {
  return t.default.post("".concat(t.api.cms, "api/addQuestionnaireRecord"), e)
}, exports.addTeamMember = function(e, a, s, o, n, i, u) {
  return t.default.post(t.api.trm + "api/teamReserve/addTeamMember", {
    shareCode: e,
    visitorName: a,
    phoneNumber: s,
    documentType: o,
    country: n,
    documentNumber: i,
    systemId: r.systemId,
    isVip: u
  }, 2)
}, exports.addTeamMemberBatch = function(e, a) {
  return t.default.post(t.api.trm + "api/teamReserve/addTeamMemberBatch", {
    shareCode: e,
    systemId: r.systemId,
    list: a
  })
}, exports.cancelActivity = function(e, r, a) {
  return t.default.post(t.api.activity + "api/activityReserve/updateForCancelActivity", {
    ids: e,
    activityId: r,
    orderListId: a
  })
}, exports.cancelActivityPay = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/closeOrder", {
    orderListId: e
  })
}, exports.cancelAllPayLeaseOrder = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/cancelAllPayLeaseOrder"), {
    orderListId: e
  })
}, exports.cancelSinglePayLeaseOrder = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/cancelSinglePayLeaseOrder"), e)
}, exports.checkCompanyCondition = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/checkCompanyCondition", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.closePayLeaseOrder = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/closePayLeaseOrder"), {
    orderListId: e
  })
}, exports.companyQueryById = function(e) {
  return t.default.post(t.api.saas + "weChatCompany/queryById", {
    companyInfoId: e
  })
}, exports.complaintsSuggestionsSave = function(e) {
  return t.default.post("".concat(t.api.trm, "api/complaintsSuggestions/save"), e)
}, exports.confirmPay = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/confirmPay"), {
    orderListId: e
  })
}, exports.createTeam = function(e, a, s, o, n, i, u, p, c, d, m) {
  return t.default.post(t.api.trm + "api/teamReserve/createTeam", {
    reserveDate: e,
    reserveTime: a,
    visitorId: s,
    visitorName: o,
    phoneNumber: n,
    documentNumber: i,
    companyInfoId: u,
    companyName: p,
    teamName: c,
    systemId: r.systemId,
    type: d,
    quantity: m,
    reserveFrom: "TRM0305"
  })
}, exports.customerContactDeleteById = function(e) {
  return t.default.post(t.api.saas + "customerContact/deleteById", {
    customerContactId: e
  })
}, exports.customerContactQueryById = function(e) {
  return t.default.post(t.api.saas + "customerContact/queryById", {
    customerContactId: e
  })
}, exports.customerContactQueryList = function() {
  return t.default.post(t.api.saas + "customerContact/queryList", {
    systemId: r.systemId,
    param: {
      pageNum: 1,
      pageSize: 50
    }
  })
}, exports.customerContactQueryPageList = function() {
  return t.default.post(t.api.saas + "customerContact/queryPageList", {
    systemId: r.systemId,
    param: {
      pageNum: 1,
      pageSize: 50
    }
  })
}, exports.customerContactSave = function(e, r, a, s, o, n) {
  var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  return t.default.post(t.api.saas + "customerContact/save", {
    contactName: e,
    contactPhone: r,
    documentType: a,
    nationality: s,
    documentNumber: o,
    isPartyMember: n,
    myself: i
  })
}, exports.customerUpdateCert = function(e, r, a, s, o) {
  return t.default.post(t.api.saas + "customerCert/updateCert", {
    customerName: e,
    documentType: r,
    documentNumber: a,
    phoneNumber: s,
    svCode: o
  })
}, exports.defaultCatch = function(e, t) {
  wx.hideNavigationBarLoading(), wx.hideLoading(), console.error(e), wx.showToast({
    title: t + "," + JSON.stringify(e),
    icon: "none"
  }), console.error(t + "," + JSON.stringify(e))
}, exports.deleteLeaderDeleteById = function(e, a) {
  return t.default.post(t.api.trm + "api/teamReserve/deleteLeader", {
    agencyId: e,
    guideId: a,
    systemId: r.systemId
  })
}, exports.deleteTeamMember = function(e, r) {
  return t.default.post(t.api.trm + "api/teamReserve/deleteTeamMember", {
    shareCode: e,
    detailId: r
  })
}, exports.dissolveTeam = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/dissolveTeam", {
    shareCode: e
  })
}, exports.encryptSP = function() {
  return t.default.post("".concat(t.api.trm, "api/personalReserve/encryptSP"), {})
}, exports.fullImageUrl = function(e) {
  return null == e ? "" : t.api.file + e
}, exports.fullImageUrl2 = function(e) {
  return null == e ? "" : t.api.cockpit + e
}, exports.fullImageUrlSaaS = function(e) {
  return null == e ? "" : t.api.fileLoad + e
}, exports.getAgencyTypeList = function() {
  return t.default.get(t.api.trm + "api/teamReserve/getAgencyTypeList")
}, exports.getCheckInImgCode = function(e, a) {
  return t.default.post(t.api.trm + "api/teamReserve/getCheckInCode", {
    shareCode: e,
    documentNumber: a,
    systemId: r.systemId
  }, 2)
}, exports.getCheckInQRCode = function(e, a, s) {
  return t.default.post(t.api.trm + "api/teamReserve/getCheckInQRCode", {
    documentNumber: e,
    shareCode: a,
    systemId: r.systemId,
    vcode: s
  }, 2)
}, exports.getCountryListData = function() {
  return t.default.get(t.api.trm + "api/teamReserve/getCountryList")
}, exports.getDocumentTypeList = function() {
  return t.default.get(t.api.trm + "api/teamReserve/getDocumentTypeList")
}, exports.getLeaderCode = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/getLeaderCode", {
    phoneNumber: e
  })
}, exports.getQuerySmsVCode = function(e, r, a) {
  return t.default.get(t.api.saas + "saas/querySmsVCode", {
    phone: e,
    vcode: r,
    vid: a
  })
}, exports.getQuestionnaireById = function(e) {
  return t.default.post("".concat(t.api.cms, "api/getQuestionnaireById/").concat(e))
}, exports.getQuestionnaireByObjectId = function(e) {
  return t.default.get("".concat(t.api.cms, "api/getQuestionnaireByObjectId/").concat(e))
}, exports.getQuestionnairePush = function(e, r) {
  return t.default.post("".concat(t.api.cms, "api/getQuestionnairePush"), {
    venueId: e,
    type: r
  })
}, exports.getTeamContactByFileId = function(e, a, s) {
  return t.default.post(t.api.trm + "api/teamReserve/getTeamContactByFileId", {
    shareCode: e,
    systemId: r.systemId,
    companyInfoId: a,
    fileId: s
  })
}, exports.getTeamTypeListData = function() {
  return t.default.get(t.api.trm + "api/teamReserve/getTeamTypeList", {})
}, exports.logOut = function(e) {
  return t.default.post(t.api.saas + "swSaasCancelRecord/cancel", {
    smsCode: e
  })
}, exports.login = function(e) {
  var r = wx.getAccountInfoSync().miniProgram.appId;
  return t.default.post("".concat(t.api.saas, "saas/smallProgramLogin?code=").concat(e, "&appId=").concat(r))
}, exports.loginPhone = function(e, r, a) {
  return t.default.post("".concat(t.api.saas, "saas/svcodeLoginWx"), {
    phone: e,
    svCode: r,
    code: a,
    appId: wx.getAccountInfoSync().miniProgram.appId
  })
}, exports.passCode = function(e) {
  wx.getAccountInfoSync().miniProgram.appId;
  return t.default.post("".concat(t.api.saas, "saas/passCode?code=").concat(e))
}, exports.payLeaseOrder = function(e, r) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/payLeaseOrder"), {
    orderListId: e,
    name: r
  })
}, exports.payLeaseOrderAgain = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/payLeaseOrderAgain"), {
    orderListId: e
  })
}, exports.personalListForSign = function() {
  return t.default.post(t.api.trmSign + "api/reserveSign/queryListForSign", {
    systemId: r.systemId
  })
}, exports.personalReserveCheckMySubmit = function() {
  return t.default.post(t.api.trm + "api/personalReserve/checkMySubmit", {})
}, exports.personalReserveQueryImgCode = function() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return t.default.post(t.api.trm + "api/personalReserve/queryImgCode", {
    type: e
  }, 1, void 0, 1e4)
}, exports.personalReserveSign = function(e) {
  return t.default.post(t.api.trmSign + "api/reserveSign/checkOrderPersonalForSign", {
    orderPersonalIds: e
  })
}, exports.queryActivityList = function(e, r, a, s) {
  return t.default.post(t.api.activity + "api/activity/queryActivityList", {
    param: {
      pageSize: "10",
      pageNum: e
    },
    entity: {
      activityName: r,
      activityType: a,
      companyInfoId: s
    }
  })
}, exports.queryActivityTicketsById = function(e) {
  return t.default.post("".concat(t.api.activity, "actActivity/queryById"), {
    activityId: e
  })
}, exports.queryActivitysureOrderPay = function(e) {
  var r = e.orderId,
    a = e.payFrom;
  return t.default.post(t.api.activity + "api/activityReserve/prepareToPay", {
    orderListId: r,
    payFrom: a
  })
}, exports.queryAudioGuideById = function(e) {
  return t.default.get("".concat(t.api.trm, "api/leaseReserve/queryById/").concat(e))
}, exports.queryAudioGuidePageList = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/queryPageList"), {
    type: e
  })
}, exports.queryCertList = function() {
  return t.default.post(t.api.saas + "customerCert/queryCertList")
}, exports.queryContactByIdData = function(e) {
  return t.default.get(t.api.saas + "customerContact/queryContactById?customerContactId=" + e, {})
}, exports.queryCurrentCertification = function(e) {
  return t.default.get(t.api.trm + "api/teamReserve/queryCurrentCertification", {})
}, exports.queryDistancePageList = function(e, r) {
  return t.default.post(t.api.saas + "weChatCompany/queryDistancePageList", {
    longitude: e,
    latitude: r
  })
}, exports.queryIsOpenReserve = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryIsOpenReserve", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryIsVip = function() {
  return t.default.post("".concat(t.api.vip, "client/queryVipAllInfo"), {
    certType: 3
  })
}, exports.queryIsVipByDocumentNumber = function(e) {
  return t.default.post("".concat(t.api.vip, "api/queryIsVipByDocumentNumber?documentNumber=").concat(e))
}, exports.queryIsVolByDocumentNumber = function(e) {
  return t.default.post("".concat(t.api.vol, "smallProgram/isVolByIdCard"), e)
}, exports.queryLeaseAndPersonal = function(e, a, s, o) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/queryLeaseAndPersonal"), {
    systemId: r.systemId,
    audioLease: 1 == o ? 0 : void 0,
    arLease: 2 == o ? 0 : void 0,
    companyInfoId: e,
    reserveDate: a,
    reserveTime: s
  })
}, exports.queryLeaseDescription = function(e, a) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/queryLeaseDescription"), {
    ruleCode: e,
    companyInfoId: a,
    systemId: r.systemId
  })
}, exports.queryLeaseList = function(e, r) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/queryLeaseList"), {
    companyInfoId: e,
    type: r
  })
}, exports.queryLeaseReserve = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/queryLeaseReserve"), {
    systemId: r.systemId,
    type: e
  })
}, exports.queryManualByVenueId = function(e) {
  return t.default.get("".concat(t.api.cms, "api/queryManualByVenueId/").concat(e))
}, exports.queryOrderActivityList = function(e) {
  return t.default.post(t.api.activity + "api/reserveSign/queryOrderActivityList", {
    activityId: e
  })
}, exports.queryOrderListDetail = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/queryOrderListDetail", {
    orderListId: e
  })
}, exports.queryOrderPersonalDetail = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryOrderInfo", {
    orderListId: e
  })
}, exports.queryOrderPersonalList = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryOrderList", {
    pageSize: "10",
    pageNum: e
  })
}, exports.queryPersonal = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryPersonal", {
    systemId: r.systemId,
    companyInfoId: e
  }, 2, void 0, 1e4)
}, exports.queryPersonalDescrption = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryPersonalDescrption", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryPersonalReserveRule = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryPersonalReserveRule", {
    systemId: r.systemId,
    companyInfoId: e
  }, 2)
}, exports.queryPublishNotice = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryPublishNotice", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryReserveTipData = function(e, a) {
  return t.default.post(t.api.trm + "api/personalReserve/queryReserveTip", {
    systemId: r.systemId,
    companyInfoId: e,
    ruleCode: a
  })
}, exports.queryRuleTip = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/queryRuleTip", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.querySinglePageInfo = function(e) {
  return t.default.post("".concat(t.api.cms, "api/querySinglePageInfo?path=").concat(e))
}, exports.querySuccessTip = function(e) {
  return t.default.post(t.api.trm + "rule/querySuccessTip", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryTeamAppointOrderList = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/queryOrderList", {
    param: {
      pageNum: e,
      pageSize: 10
    },
    entity: {
      systemId: r.systemId
    }
  })
}, exports.queryTeamAppointPersonal = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/queryTeam", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryTeamCertificationTip = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/queryTeamCertificationTip", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryTeamDetail = function(e) {
  return t.default.get(t.api.trm + "api/teamReserve/queryTeamDetail?code=" + e, {})
}, exports.queryTeamInfo = function(e) {
  return t.default.get(t.api.trm + "api/teamReserve/queryTeamInfo?code=" + e, {}, 2)
}, exports.queryTeamOrderDetail = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/queryOrderDetail", {
    shareCode: e
  })
}, exports.queryTeamPersonalDescrption = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/queryTeamReserveDesc", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryTeamReserveRule = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/queryTeamReserveRule", {
    systemId: r.systemId,
    companyInfoId: e
  })
}, exports.queryVenueById = function(r) {
  return t.default.post("".concat(t.api.baseUrl, "weChatCompany/queryById"), e({
    companyInfoId: r
  }, getApp().globalData.location))
}, exports.queryVipCoupon = function(e) {
  return t.default.post("".concat(t.api.vip, "client/queryVipAllInfo"), {
    certType: e
  })
}, exports.reSubmitOrganizationCertification = function(e, a, s, o, n, i, u, p, c, d, m) {
  return t.default.post(t.api.trm + "api/teamReserve/reSubmitOrganizationCertification", {
    systemId: r.systemId,
    agencyType: e,
    agencyName: a,
    creditCode: s,
    businessLicense: o,
    contactName: n,
    contactDocumentNumber: i,
    contactFrontCard: u,
    contactReverseCard: p,
    officialLetter: c,
    agencyId: d,
    dataType: m
  })
}, exports.saasQueryVCode = function() {
  return t.default.get(t.api.saas + "saas/queryVCode", {})
}, exports.saasSaveCustomer = function(e, r, a) {
  return t.default.post(t.api.saas + "backend/saveCustomer", {
    customerName: e,
    customerPhone: r,
    loginPassword: a
  })
}, exports.saveCert = function(e, r, a) {
  return t.default.post(t.api.saas + "customerCert/saveCert", {
    customerName: e,
    documentType: r,
    documentNumber: a
  })
}, exports.saveForPrepareSubmit = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/saveForPrepareSubmit", e)
}, exports.saveForSubmitActivity = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/saveForSubmitActivity", e)
}, exports.saveForSubmitPersonal = function() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  return t.default.post(t.api.trm + "api/personalReserve/saveForSubmitPersonal", {
    companyInfoId: e
  })
}, exports.showWarningToast = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  wx.hideNavigationBarLoading(), wx.hideLoading(), wx.showToast({
    title: "" == t ? e.msg : "".concat(t, "，").concat(e.msg),
    icon: "none"
  }), console.error(t + "," + JSON.stringify(e))
}, exports.smallProgramLoginByPhone = function(e) {
  return t.default.post(t.api.saas + "saas/smallProgramLoginByPhone", e)
}, exports.submitLeaseOrder = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/submitLeaseOrder"), e)
}, exports.submitLeaseOrderOnSite = function(e) {
  return t.default.post("".concat(t.api.trm, "api/leaseReserve/submitLeaseOrderOnSite"), e)
}, exports.submitOrganizationCertification = function(e, a, s, o, n, i, u, p, c, d) {
  return t.default.post(t.api.trm + "api/teamReserve/submitOrganizationCertification", {
    systemId: r.systemId,
    agencyType: e,
    agencyName: a,
    creditCode: s,
    businessLicense: o,
    contactName: n,
    contactDocumentNumber: i,
    contactFrontCard: u,
    contactReverseCard: p,
    officialLetter: c,
    dataType: d
  })
}, exports.submitTeam = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/submitTeam", {
    shareCode: e,
    systemId: r.systemId
  })
}, exports.sureForSubmitActivity = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/submitActivityOrder", {
    activityId: e
  })
}, exports.teamAppointReserveAgain = function(e, a, s, o, n, i, u, p, c, d, m) {
  return t.default.post(t.api.trm + "api/teamReserve/reserveAgain", {
    reserveDate: e,
    reserveTime: a,
    companyInfoId: s,
    companyName: o,
    systemId: r.systemId,
    shareCode: n,
    teamName: i,
    type: u,
    quantity: p,
    visitorName: c,
    phoneNumber: d,
    documentNumber: m,
    reserveFrom: "TRM0305"
  })
}, exports.teamReserve = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/refund", {
    shareCode: e,
    systemId: r.systemId,
    reserveFrom: "TRM0305"
  })
}, exports.teamReserveAddLeader = function(e, a, s, o, n) {
  return t.default.post(t.api.trm + "api/teamReserve/addLeader", {
    username: e,
    phoneNumber: a,
    documentType: s,
    documentNumber: o,
    systemId: r.systemId,
    vcode: n
  })
}, exports.teamReserveCheckBookConfirm = function(e, a) {
  return t.default.post(t.api.trmSign + "api/teamReserve/checkBookConfirm", {
    reserveNo: e,
    companyInfoId: a,
    systemId: r.systemId
  })
}, exports.teamReserveCheckBookList = function() {
  return t.default.get(t.api.trmSign + "api/teamReserve/checkBookList/" + r.systemId + "/" + getApp().globalData.companyInfoId, {})
}, exports.teamReserveCheckCondition = function() {
  return t.default.post(t.api.trm + "api/teamReserve/checkCondition", {
    systemId: r.systemId
  })
}, exports.teamReserveLeaders = function(e) {
  return t.default.post(t.api.trm + "api/teamReserve/leaders", {
    guideId: e,
    systemId: r.systemId
  })
}, exports.teamReserveQueryListForSign = function() {
  return t.default.get(t.api.trm + "api/teamReserve/checkBook/" + r.systemId + "/" + getApp().globalData.companyInfoId, {})
}, exports.teamReservecheckShow = function() {
  return t.default.post(t.api.trm + "api/teamReserve/checkShow", {})
}, exports.updateCustomerContact = function(e, r, a, s, o, n, i, u) {
  return t.default.post(t.api.saas + "customerContact/updateCustomerContact", {
    customerContactId: e,
    contactName: r,
    contactPhone: a,
    documentType: s,
    nationality: o,
    documentNumber: n,
    isPartyMember: i,
    myself: u
  })
}, exports.updateForCancelActivity = function(e) {
  return t.default.post(t.api.activity + "api/activityReserve/updateForCancelActivity", {
    delIds: e
  })
}, exports.updateForCancelPersonal = function(e) {
  return t.default.post(t.api.trm + "api/personalReserve/updateForCancelPersonal", {
    delIds: e
  })
}, exports.updateForChangePersonal = function(e, r, a) {
  return t.default.post(t.api.trm + "api/personalReserve/updateForChangePersonal", {
    orderPersonalIds: e,
    reserveDate: r,
    reserveTime: a
  })
}, exports.updateTeamMember = function(e, r, a, s, o, n, i, u) {
  return t.default.post(t.api.trm + "api/teamReserve/updateTeamMember", {
    shareCode: e,
    visitorName: r,
    phoneNumber: a,
    documentType: s,
    country: o,
    documentNumber: n,
    detailId: i,
    isVip: u
  })
}, exports.updateUserKey = function(e, r) {
  return t.default.post("".concat(t.api.saas, "saas/updateUserKey"), {
    code: e,
    version: r,
    appId: wx.getAccountInfoSync().miniProgram.appId
  })
};
var e = require("./@babel/runtime/helpers/objectSpread2.js"),
  t = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
      default: e
    };
    var r = a(t);
    if (r && r.has(e)) return r.get(e);
    var s = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in e)
      if ("default" !== n && Object.prototype.hasOwnProperty.call(e, n)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, n) : null;
        i && (i.get || i.set) ? Object.defineProperty(s, n, i) : s[n] = e[n]
      } s.default = e, r && r.set(e, s);
    return s
  }(require("AC0CE581AD7FA6DFCA6A8D86B5E30E96.js")),
  r = require("FA9D4A90AD7FA6DF9CFB2297F7F30E96.js");

function a(e) {
  if ("function" != typeof WeakMap) return null;
  var t = new WeakMap,
    r = new WeakMap;
  return (a = function(e) {
    return e ? r : t
  })(e)
}