import{o as t,c as s,z as i,t as c,r as l,C as e,_ as d}from"./framework.2ef82e6b.js";import"./Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const n={class:"card",ref:"card"},_={key:0,class:"card__header"},u={key:0,class:"card__title"},h={class:"mr-xs-2"},m={key:1,class:"card__subtitle"},y={key:0,class:"card__actions"},f={key:1,class:"card__body"};function b(a,p,o,v,C,r){return t(),s("div",n,[r.hasHeader?(t(),s("div",_,[i("div",null,[o.title?(t(),s("h4",u,[i("span",h,c(o.title),1),l(a.$slots,"label")])):e("",!0),o.subtitle?(t(),s("h6",m,c(o.subtitle),1)):e("",!0)]),r.hasAction?(t(),s("div",y,[l(a.$slots,"actions")])):e("",!0)])):e("",!0),l(a.$slots,"no-body"),this.$slots.default?(t(),s("div",f,[l(a.$slots,"default")])):e("",!0)],512)}const k={name:"Card",props:{title:{type:String,default:null},subtitle:{type:String,default:null}},computed:{hasAction(){return!!this.$slots.actions},hasHeader(){return this.hasAction||this.title||this.subtitle}}},$=d(k,[["render",b]]);export{$ as C};