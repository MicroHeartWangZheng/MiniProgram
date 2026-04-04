$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];
function gz$gwx_XC_18_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
Z([3,'capsule width-100 relative data-v-f9ae89e7'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[7],[3,'i']]],[1,';']],[[2,'+'],[1,'height:'],[[7],[3,'j']]]])
Z([[6],[[7],[3,'$slots']],[3,'d']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./components/navigator.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
var xKN=_v()
_(r,xKN)
if(_oz(z,0,e,s,gg)){xKN.wxVkey=1
var oLN=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var fMN=_v()
_(oLN,fMN)
if(_oz(z,3,e,s,gg)){fMN.wxVkey=1
var cNN=_n('slot')
_(fMN,cNN)
}
else{fMN.wxVkey=2
}
fMN.wxXCkey=1
_(xKN,oLN)
}
xKN.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_18";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/navigator.wxml'] = [$gwx_XC_18, './components/navigator.wxml'];else __wxAppCode__['components/navigator.wxml'] = $gwx_XC_18( './components/navigator.wxml' );
	;__wxRoute = "components/navigator";__wxRouteBegin = true;__wxAppCurrentFile__="components/navigator.js";define("components/navigator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=require("../@babel/runtime/helpers/defineProperty"),n=require("../302F12419CEDE14F56497A46F35AA3A7.js"),i=require("../42DF72329CEDE14F24B91A35674AA3A7.js"),a={options:{styleIsolation:"shared"},name:"navigator",props:(t={title:{type:String,default:""},isSticky:{type:Boolean,default:!0},capsule:{type:Boolean,default:!0},isEmpty:{type:Boolean,default:!1},isDarkColor:{type:Boolean,default:!1}},e(t,"title",String),e(t,"isShowLogo",{type:Boolean,default:!1}),e(t,"isShowLeft",{type:Boolean,default:!1}),e(t,"homeUrl",{type:String,default:""}),e(t,"backUrl",{type:String,default:""}),e(t,"isCustomBack",{type:Boolean,default:!1}),t),data:function(){return{navInfo:{navHeight:0,btnWidth:0,btnHeight:0,statusBar:0},logoIcon:this.$settings.imgUrl+"nav/logo.png",backIcon:this.$settings.imgUrl+"nav/icon-back.png",homeIcon:this.$settings.imgUrl+"nav/icon-home.png",backIconWhite:this.$settings.imgUrl+"nav/icon-back-white.png",homeIconWhite:this.$settings.imgUrl+"nav/icon-home-white.png",urlPath:["/pages/index/index","/pages/activity/index","/pages/space/index","/pages/mine/index"]}},mounted:function(){try{var t=n.index.getStorageSync("storage_nav_info");t?(this.$emit("emit",t),this.navInfo=JSON.parse(t)):this.getNavHeight()}catch(t){this.getNavHeight()}},methods:{getNavHeight:function(){var t=this;n.index.getSystemInfo({success:function(e){if(n.index.getMenuButtonBoundingClientRect){var i=n.index.getMenuButtonBoundingClientRect();t.navInfo.navHeight=2*(i.top-Number(e.statusBarHeight))+i.height,t.navInfo.btnWidth=i.width,t.navInfo.btnHeight=i.height,t.navInfo.navTop=i.top,t.navInfo.statusBar=e.statusBarHeight,t.$emit("emit",t.navInfo),n.index.setStorage({key:"storage_nav_info",data:JSON.stringify(t.navInfo),success:function(){}})}}})},back:function(){n.index.navigateBack({delta:1})},backHome:function(){n.index.reLaunch({url:"/pages/index/index"})}}},o=n._export_sfc(a,[["render",function(t,e,a,o,s,r){return n.e({a:a.capsule},a.capsule?{b:i._imports_0,c:n.o((function(){return r.back&&r.back.apply(r,arguments)})),d:i._imports_1,e:n.o((function(){return r.backHome&&r.backHome.apply(r,arguments)})),f:s.navInfo.btnWidth+"px",g:s.navInfo.btnHeight+"px",h:n.t(a.title),i:s.navInfo.navTop+"px",j:s.navInfo.btnHeight+"px"}:{},{k:a.isSticky?1:"",l:s.navInfo.navHeight+s.navInfo.statusBar+"px"})}],["__scopeId","data-v-f9ae89e7"]]);wx.createComponent(o);
},{isPage:false,isComponent:true,currentFile:'components/navigator.js'});require("components/navigator.js");