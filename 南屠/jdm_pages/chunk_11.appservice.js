$gwx0_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_3 || [];
function gz$gwx0_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'e']])
Z([3,'__l'])
Z([[7],[3,'d']])
Z([3,'r data-v-5d4fa591'])
Z([3,'5d4fa591-0'])
Z(z[0])
Z([3,'popupDialogRef'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_3=true;
var x=['./jdm_pages/my/subscribe/compontents/additionalInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_3_1()
var eRD=_v()
_(r,eRD)
if(_oz(z,0,e,s,gg)){eRD.wxVkey=1
var bSD=_mz(z,'popup-dialog',['bind:__l',1,'bindonSelcetClick',1,'class',2,'uI',3,'uP',4,'uR',5],[],e,s,gg)
_(eRD,bSD)
}
eRD.wxXCkey=1
eRD.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['jdm_pages/my/subscribe/compontents/additionalInfo.wxml'] = [$gwx0_XC_3, './jdm_pages/my/subscribe/compontents/additionalInfo.wxml'];else __wxAppCode__['jdm_pages/my/subscribe/compontents/additionalInfo.wxml'] = $gwx0_XC_3( './jdm_pages/my/subscribe/compontents/additionalInfo.wxml' );
	;__wxRoute = "jdm_pages/my/subscribe/compontents/additionalInfo";__wxRouteBegin = true;__wxAppCurrentFile__="jdm_pages/my/subscribe/compontents/additionalInfo.js";define("jdm_pages/my/subscribe/compontents/additionalInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../302F12419CEDE14F56497A46F35AA3A7.js"),e=require("../../../../42DF72329CEDE14F24B91A35674AA3A7.js"),i={components:{popupDialog:function(){return"../../../../components/popupDialog/popupDialog.js"}},computed:{targetList:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}},itemImgs:function(){return function(t){var e=[],i=this.targetList.filter((function(e){return t==e.visitorCode}));return i[0]&&(e=i[0].dictImgs?i[0].dictImgs:[]),e}}},name:"",data:function(){return{popupData:[{name:"拍照上传"},{name:"从手机相册选择上传"}]}},mounted:function(){},methods:{itemImgs:function(){return function(t){var e=[],i=this.targetList.filter((function(e){return t==e.visitorCode}));return i[0]&&(e=i[0].dictImgs?i[0].dictImgs:[]),e}},addImg:function(t){this.$refs.popupDialogRef.openPopup()},delImg:function(t,e){var i;this.targetList.forEach((function(e,s){t.visitorCode==e.visitorCode&&(i=s)}));var s=JSON.parse(JSON.stringify(this.targetList[i].imgs)),o=JSON.parse(JSON.stringify(this.targetList[i].dictImgs));s.splice(e,1),o.splice(e,1),this.$set(this.targetList[i],"imgs",s),this.$set(this.targetList[i],"dictImgs",o)},onSelcetClick:function(t){"拍照上传"==t.name?this.imgSelect(1):"从手机相册选择上传"==t.name?this.imgSelect(2):this.imgSelect(4)},imgSelect:function(e){var i=this;this.$refs.popupDialogRef.closePopup(),4!=e&&(1!=e&&2!=e?3==e&&t.wx$1.chooseMessageFile({count:1,type:"image",success:function(t){i.imgUpload(t.tempFiles[0])}}):t.index.chooseImage({count:1,sizeType:["original","compressed"],sourceType:1==e?["camera"]:["album"],success:function(t){var e=t.tempFilePaths;i.imgUpload(e[0])}}))},imgUpload:function(e){var i=this,s=t.index.getStorageSync("token");t.wx$1.uploadFile({url:"".concat(this.$settings.fileUploadUrl,"/file/oss/uploadFile"),filePath:e,name:"file",formData:{fileName:""},header:{Authorization:"bearer "+s},success:function(t){t.data=JSON.parse(t.data),t.data=i.$utils.decryptSm4(t.data.data);var s=decodeURIComponent(t.data);try{s=JSON.parse(s)}catch(t){}var o=[],a=[];o.push(s.url),a.push(e),i.$set(i.targetList[0],"imgs",o),i.$set(i.targetList[0],"dictImgs",a)}})}}};Array||t.resolveComponent("popup-dialog")();var s=t._export_sfc(i,[["render",function(i,s,o,a,n,r){return{a:t.o((function(t){return r.addImg(i.item)})),b:e._imports_2$4,c:t.sr("popupDialogRef","5d4fa591-0"),d:t.o(r.onSelcetClick),e:t.p({isActive:!1,popupData:n.popupData,isMaskClick:!0})}}],["__scopeId","data-v-5d4fa591"]]);wx.createComponent(s);
},{isPage:false,isComponent:true,currentFile:'jdm_pages/my/subscribe/compontents/additionalInfo.js'});require("jdm_pages/my/subscribe/compontents/additionalInfo.js");