import{s as c}from"./BXAMF18X.js";import{B as u,Z as r,D as p,o as i,g as s,w as f,c as d,m as o,f as h,n as m,h as v,b as L,T as b}from"./sHDbaKsr.js";import{s as S}from"./DrxdMQRe.js";import"./CuNfztYT.js";var w={root:function(n){var l=n.props;return["p-scrolltop p-link p-component",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},y=u.extend({name:"scrolltop",classes:w}),g={name:"BaseScrollTop",extends:S,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"}},style:y,provide:function(){return{$parentInstance:this}}},k={name:"ScrollTop",extends:g,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(r.clear(this.container),this.overlay=null)},methods:{onClick:function(){var n=this.target==="window"?window:this.$el.parentElement;n.scroll({top:0,behavior:this.behavior})},checkVisibility:function(n){n>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(n.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(p.getWindowScrollTop())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(n){r.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(n){r.clear(n)},containerRef:function(n){this.container=n}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:c}},E=["aria-label"];function C(e,n,l,T,a,t){return i(),s(b,o({name:"p-scrolltop",appear:"",onEnter:t.onEnter,onAfterLeave:t.onAfterLeave},e.ptm("transition")),{default:f(function(){return[a.visible?(i(),d("button",o({key:0,ref:t.containerRef,class:e.cx("root"),onClick:n[0]||(n[0]=function(){return t.onClick&&t.onClick.apply(t,arguments)}),type:"button","aria-label":t.scrollTopAriaLabel},e.ptmi("root")),[h(e.$slots,"icon",{class:m(e.cx("icon"))},function(){return[(i(),s(v(e.icon?"span":"ChevronUpIcon"),o({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]})],16,E)):L("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}k.render=C;export{k as default};
