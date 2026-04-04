$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];
function gz$gwx_XC_17_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'l']])
Z([3,'__l'])
Z([3,'r data-v-1a6e78e6'])
Z([3,'1a6e78e6-0'])
Z(z[0])
Z([3,'dialogWrap'])
Z([[4],[[5],[1,'d']]])
Z([[7],[3,'a']])
Z([3,'main-notice-dialog data-v-1a6e78e6'])
Z([[7],[3,'c']])
Z([[7],[3,'h']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./components/index/closeDialog.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var oDN=_v()
_(r,oDN)
if(_oz(z,0,e,s,gg)){oDN.wxVkey=1
var lEN=_mz(z,'dialog-wrap',['bind:__l',1,'class',1,'uI',2,'uP',3,'uR',4,'uS',5],[],e,s,gg)
var aFN=_v()
_(lEN,aFN)
if(_oz(z,7,e,s,gg)){aFN.wxVkey=1
var tGN=_n('view')
_rz(z,tGN,'class',8,e,s,gg)
var eHN=_v()
_(tGN,eHN)
if(_oz(z,9,e,s,gg)){eHN.wxVkey=1
}
var bIN=_v()
_(tGN,bIN)
if(_oz(z,10,e,s,gg)){bIN.wxVkey=1
}
eHN.wxXCkey=1
bIN.wxXCkey=1
_(aFN,tGN)
}
aFN.wxXCkey=1
_(oDN,lEN)
}
oDN.wxXCkey=1
oDN.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_17";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/index/closeDialog.wxml'] = [$gwx_XC_17, './components/index/closeDialog.wxml'];else __wxAppCode__['components/index/closeDialog.wxml'] = $gwx_XC_17( './components/index/closeDialog.wxml' );
	;__wxRoute = "components/index/closeDialog";__wxRouteBegin = true;__wxAppCurrentFile__="components/index/closeDialog.js";define("components/index/closeDialog.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../302F12419CEDE14F56497A46F35AA3A7.js"),t=require("../../42DF72329CEDE14F24B91A35674AA3A7.js"),n={computed:{closeNoticeImg:function(){return 3==e.index.getStorageSync("versioncontrol")?"/static/img/closeNoticeEn.png":"/static/img/closeNotice.png"},confirmText:function(){return 3==e.index.getStorageSync("versioncontrol")?"I am already aware":"我已知晓"}},components:{dialogWrap:function(){return"../dialogWrap.js"},mpHtml:function(){return"../../node-modules/mp-html/dist/uni-app/components/mp-html/mp-html.js"}},props:{hallCode:{type:String,default:""}},data:function(){return{notice:{startTime:"2025-11-05 00:00:00",endTime:"2025-12-13 23:59:59"},noticeShow:!1,timer:null,time:5,closeType:1,info:'\n        <p style="font-weight:500;font-size:38rpx;color:#B67A65;text-align:center;font-style:normal;margin-top:75rpx; ">闭馆通告</p>\n        <p style="text-align:left;margin-top:38rpx; text-indent:32rpx;">因筹备并举行重要活动及场馆设备检修需要，侵华日军南京大屠杀遇难同胞纪念馆将于2025年11月10日(周一)至12月13日(周六)期间闭馆。</p>\n        <p style="text-align:left;text-indent:32rpx">由此造成的不便，请予谅解。</p>\n        <p style="text-align:right;margin-top:38rpx;">侵华日军南京大屠杀遇难同胞纪念馆</p>\n        <p style="text-align:right;">2025年11月4日</p>\n        '}},mounted:function(){this.open()},unmounted:function(){clearTimeout(this.timer)},methods:{open:function(){var e=(new Date).getTime(),t=new Date(this.notice.startTime).getTime(),n=new Date(this.notice.endTime).getTime();this.notice.startTime&&this.notice.endTime&&e>=t&&e<=n&&("DTSYNTB"==this.hallCode||"SGBS"==this.hallCode)&&(this.$refs.dialogWrap.open(),this.noticeShow=!0,this.startDown())},close:function(){1==this.closeType&&this.time>0||this.$refs.dialogWrap.close()},startDown:function(){var e=this;clearTimeout(this.timer);!function t(){e.time>0&&(e.timer=setTimeout((function(){e.time--,t()}),1e3))}()}}};Array||e.resolveComponent("dialog-wrap")();var o=e._export_sfc(n,[["render",function(n,o,i,r,s,c){return e.e({a:s.noticeShow},s.noticeShow?e.e({b:c.closeNoticeImg,c:1==s.closeType},1==s.closeType?{d:e.t(c.confirmText),e:e.t(s.time?"（0".concat(s.time,"s）"):""),f:s.time>0?1:"",g:e.o((function(){return c.close&&c.close.apply(c,arguments)}))}:{},{h:2==s.closeType},2==s.closeType?{i:t._imports_0$2,j:e.o((function(){return c.close&&c.close.apply(c,arguments)}))}:{}):{},{k:e.sr("dialogWrap","1a6e78e6-0"),l:e.p({position:"center",isMaskClick:!1})})}],["__scopeId","data-v-1a6e78e6"]]);wx.createComponent(o);
},{isPage:false,isComponent:true,currentFile:'components/index/closeDialog.js'});require("components/index/closeDialog.js");