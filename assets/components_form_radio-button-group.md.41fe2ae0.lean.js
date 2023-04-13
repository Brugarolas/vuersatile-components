import"./chunks/Icon.vue_vue_type_style_index_0_lang.4ed993c7.js";import{o,c as l,x as u,t as i,A as D,n as A,_ as b,B as m,F as v,K as E,D as n,z as t,U as F}from"./chunks/framework.1ccf76a1.js";import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import{T as q}from"./chunks/TransitionHeight.c16428d4.js";import{n as S}from"./chunks/index.ec15b88a.js";import{R as T}from"./chunks/required-input.b3b5ce1e.js";import"./chunks/RadioButtonGroup.vue_vue_type_style_index_0_lang.4ed993c7.js";import{F as _}from"./chunks/Form.7e515a5b.js";import{C}from"./chunks/Card.b69deb87.js";import"./chunks/basic-input.d366dd0e.js";import"./chunks/Button.c8a456c6.js";import"./chunks/Icon.e2ed9238.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const R=["name","id","value","disabled"],I=u("span",{class:"radiobutton__check"},null,-1),V=["for"];function k(s,p,a,y,r,c){return o(),l("div",{class:A(["radiobutton",{"radiobutton--error":a.error}])},[u("input",{class:"radiobutton__input",type:"radio",ref:`radio_${a.value}`,name:a.name,id:`radio_${r.internalId}`,value:a.value,disabled:a.disabled},null,8,R),I,a.label?(o(),l("label",{key:0,class:"radiobutton__label",for:`radio_${r.internalId}`},i(a.label),9,V)):D("",!0)],2)}const B={name:"RadioButton",props:{label:{type:String,default:null},value:{type:String,default:"",require:!0},name:{type:String,require:!0,default:""},error:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},enableEmpty:{type:Boolean,default:!1}},data(){return{internalId:S()}},methods:{radioChanged({target:s}){this.$emit("change",s.value)},radioInput({target:s}){this.$emit("input",s.value)},radioClicked(s){this.$emit("click",s)}}},P=b(B,[["render",k]]),N=["data-field-name"],O={key:0,class:"radiobutton-group__label"},x={class:"radiobutton-group__list"},w={key:0,class:"radiobutton-group__error"};function z(s,p,a,y,r,c){const f=m("RadioButton"),g=m("TransitionHeight");return o(),l("div",{class:"radiobutton-group","data-field-name":a.name},[s.label?(o(),l("div",O,i(s.label),1)):D("",!0),u("ul",x,[(o(!0),l(v,null,E(a.inputValues,(e,d)=>(o(),l("li",{class:A(["radiobutton-group__list-item",{"radiobutton-group__list-item--horizontal":a.horizontal}]),key:d},[n(f,{value:e.value,label:e.label,inputForm:e.inputForm,name:a.name,checked:e.value===r.value,"data-item":`${a.name}-${d}`,disabled:e.disabled,error:s.shouldShowErrors,enableEmpty:!s.required,onInput:c.input,onChange:c.change},null,8,["value","label","inputForm","name","checked","data-item","disabled","error","enableEmpty","onInput","onChange"])],2))),128))]),n(g,null,{default:t(()=>[s.shouldShowErrors?(o(),l("span",w,i(s.$t("FORM.ERROR.MANDATORY_LONG")),1)):D("",!0)]),_:1})],8,N)}const $={components:{TransitionHeight:q,RadioButton:P},mixins:[T],props:{initialValue:{type:[String,Boolean],default:null},inputValues:{type:Array,required:!0},name:{type:String,default:"",require:!0},horizontal:{type:Boolean,default:!1}},data(){return{value:this.initialValue||""}},methods:{change(s){this.dirty=!0,this.value=s.target.value,this.$emit("change",this.value)},input(s){this.dirty=!0,this.value=s.target.value,this.$emit("input",this.value)}}},h=b($,[["render",z]]),G=F("",4),M=F("",4),H=F("",2),es=JSON.parse('{"title":"RadioButtonGroup","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/radio-button-group.md","lastUpdated":1680752179000}'),L={name:"components/form/radio-button-group.md"},ts=Object.assign(L,{setup(s){const p=[{name:"email",value:"EMAIL",label:"E-mail"},{name:"phone",value:"PHONE",label:"Phone"}];return(a,y)=>(o(),l("div",null,[G,n(C,null,{default:t(()=>[n(_,null,{default:t(()=>[n(h,{name:"contact",label:"Select preferred way of contact",inputValues:p})]),_:1})]),_:1}),M,n(C,null,{default:t(()=>[n(_,null,{default:t(()=>[n(h,{name:"contact",label:"Select preferred way of contact",horizontal:"",inputValues:p})]),_:1})]),_:1}),H]))}});export{es as __pageData,ts as default};
