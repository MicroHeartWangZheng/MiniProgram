$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
function gz$gwx_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'empty data-v-bc01826a'])
Z([[7],[3,'j']])
Z([[7],[3,'c']])
Z([[7],[3,'e']])
Z([3,'btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./components/empty.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var oZK=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var c1K=_v()
_(oZK,c1K)
if(_oz(z,2,e,s,gg)){c1K.wxVkey=1
}
var o2K=_v()
_(oZK,o2K)
if(_oz(z,3,e,s,gg)){o2K.wxVkey=1
}
var l3K=_n('slot')
_rz(z,l3K,'name',4,e,s,gg)
_(oZK,l3K)
c1K.wxXCkey=1
o2K.wxXCkey=1
_(r,oZK)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_15";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/empty.wxml'] = [$gwx_XC_15, './components/empty.wxml'];else __wxAppCode__['components/empty.wxml'] = $gwx_XC_15( './components/empty.wxml' );
	;__wxRoute = "components/empty";__wxRouteBegin = true;__wxAppCurrentFile__="components/empty.js";define("components/empty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../E6064C639CEDE14F806024649ACAA3A7.js"),n=require("../302F12419CEDE14F56497A46F35AA3A7.js");require("../C2C981E19CEDE14FA4AFE9E627F9A3A7.js"),require("../99A56A709CEDE14FFFC30277932AA3A7.js"),require("../F13970549CEDE14F975F18534C3AA3A7.js"),require("../97D575919CEDE14FF1B31D960FBAA3A7.js"),require("../42DF72329CEDE14F24B91A35674AA3A7.js"),require("../2800CA079CEDE14F4E66A20028DAA3A7.js");var e={props:{imgUrl:{type:String,default:t.utils.getImgUrl("index/empty.png")},emptyType:{type:[String,Number],default:function(){return""}},tips:{type:String,default:function(){return"暂无数据"}},actionButtonsConfig:{type:Array,default:function(){return[]}},leftBtn:{type:String,default:function(){return"草稿箱"}},rightBtn:{type:String,default:function(){return"新建"}},marginTop:{type:String,default:function(){return"334rpx"}}},watch:{actionButtonsConfig:{handler:function(t,n){this.actionButtonsConfigNew=JSON.parse(JSON.stringify(t))},deep:!0}},data:function(){return{utils:t.utils,actionButtonsConfigNew:[]}},mounted:function(){this.actionButtonsConfigNew=JSON.parse(JSON.stringify(this.actionButtonsConfig))},methods:{btnClcik:function(t,n){this.$emit("onBtnClcik",t,n)},addClick:function(){this.$emit("onAddClick")},draftsClick:function(){this.$emit("onDraftsClick")}}},i=function(){n.useCssVars((function(t){return{"118319ec":t.marginTop}}))},r=e.setup;e.setup=r?function(t,n){return i(),r(t,n)}:i;var u=e,o=n._export_sfc(u,[["render",function(t,e,i,r,u,o){return n.e({a:n.t(i.tips||"暂无数据"),b:1==i.emptyType?1:"",c:i.emptyType&&1==i.emptyType},i.emptyType&&1==i.emptyType?{d:n.f(u.actionButtonsConfigNew,(function(t,e,i){return n.e({a:"分享至微信"==t.btnName},"分享至微信"==t.btnName?{b:n.t(t.btnName||"返回"),c:n.n(t.class)}:{d:n.t(t.btnName||"返回"),e:n.n(t.class),f:n.o((function(n){return o.btnClcik(t,n)}),e)},{g:e})}))}:{},{e:i.emptyType&&0==i.emptyType},i.emptyType&&0==i.emptyType?{f:n.t(i.leftBtn),g:n.o((function(){return o.draftsClick&&o.draftsClick.apply(o,arguments)})),h:n.t(i.rightBtn),i:n.o((function(){return o.addClick&&o.addClick.apply(o,arguments)}))}:{},{j:n.s(t.__cssVars())})}],["__scopeId","data-v-bc01826a"]]);wx.createComponent(o);
},{isPage:false,isComponent:true,currentFile:'components/empty.js'});require("components/empty.js");