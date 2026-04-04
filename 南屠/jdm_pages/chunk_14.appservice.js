$gwx0_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_6 || [];
function gz$gwx0_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-14b52501'])
Z([[7],[3,'a']])
Z([[7],[3,'c']])
Z([[7],[3,'e']])
Z([[7],[3,'g']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_6=true;
var x=['./jdm_pages/my/subscribe/compontents/statusIcon.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_6_1()
var eFI=_n('view')
_rz(z,eFI,'class',0,e,s,gg)
var bGI=_v()
_(eFI,bGI)
if(_oz(z,1,e,s,gg)){bGI.wxVkey=1
}
var oHI=_v()
_(eFI,oHI)
if(_oz(z,2,e,s,gg)){oHI.wxVkey=1
}
var xII=_v()
_(eFI,xII)
if(_oz(z,3,e,s,gg)){xII.wxVkey=1
}
var oJI=_v()
_(eFI,oJI)
if(_oz(z,4,e,s,gg)){oJI.wxVkey=1
}
bGI.wxXCkey=1
oHI.wxXCkey=1
xII.wxXCkey=1
oJI.wxXCkey=1
_(r,eFI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['jdm_pages/my/subscribe/compontents/statusIcon.wxml'] = [$gwx0_XC_6, './jdm_pages/my/subscribe/compontents/statusIcon.wxml'];else __wxAppCode__['jdm_pages/my/subscribe/compontents/statusIcon.wxml'] = $gwx0_XC_6( './jdm_pages/my/subscribe/compontents/statusIcon.wxml' );
	;__wxRoute = "jdm_pages/my/subscribe/compontents/statusIcon";__wxRouteBegin = true;__wxAppCurrentFile__="jdm_pages/my/subscribe/compontents/statusIcon.js";define("jdm_pages/my/subscribe/compontents/statusIcon.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),s=require("../../../../42DF72329CEDE14F24B91A35674AA3A7.js"),c={name:"",props:{childOrderStatusDesc:{type:String,default:function(){return""}}},watch:{childOrderStatusDesc:function(t,s){t!=s&&this.successStatus()}},data:function(){return{statusList:{successIconWhite:["order_success","tickets_success"],failIconBlack:["audit_refuse"],infoIconWhite:["relation_ship_wait_add_info","cancel_success","verify_expire","verify_success","audit_refuse"],infoIconBlack:["wait_audit","gongan_check_wait"]},statusStr:""}},mounted:function(){this.successStatus()},methods:{successStatus:function(){var t=this,s=function(s){t.statusList[s].map((function(c){t.childOrderStatusDesc==c&&(t.statusStr=s)}))};for(var c in this.statusList)s(c)}}},e=t._export_sfc(c,[["render",function(c,e,i,a,n,r){return t.e({a:"successIconWhite"==n.statusStr},"successIconWhite"==n.statusStr?{b:s._imports_0$12}:{},{c:"infoIconWhite"==n.statusStr},"infoIconWhite"==n.statusStr?{d:s._imports_1$8}:{},{e:"infoIconBlack"==n.statusStr},"infoIconBlack"==n.statusStr?{f:s._imports_2$5}:{},{g:"failIconBlack"==n.statusStr},"failIconBlack"==n.statusStr?{h:s._imports_3$4}:{})}],["__scopeId","data-v-14b52501"]]);wx.createComponent(e);
},{isPage:false,isComponent:true,currentFile:'jdm_pages/my/subscribe/compontents/statusIcon.js'});require("jdm_pages/my/subscribe/compontents/statusIcon.js");