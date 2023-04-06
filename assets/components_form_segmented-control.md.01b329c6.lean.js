import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import{B as f,o as a,c as r,x as e,t as i,y as b,z as c,a2 as S,$ as v,a3 as E,A as y,F as x,K as O,D as t,n as w,_ as k,a as F,N as _}from"./chunks/framework.c06bf224.js";import{T}from"./chunks/TransitionHeight.d22f811f.js";import{R as q}from"./chunks/required-input.10ec2602.js";import"./chunks/SegmentedControl.vue_vue_type_style_index_0_lang.4ed993c7.js";import{F as m}from"./chunks/Form.70e16e36.js";import{C as h}from"./chunks/Card.2cd41e23.js";import"./chunks/basic-input.8a1c5aa8.js";import"./chunks/Button.9f70f9b0.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const N={class:"segmented-control"},V={key:0,class:"segmented-control__label-container"},M={class:"segmented-control__label"},I=["data-num-options"],B=["data-item"],K=["onClick"],R={class:"segmented-control__option-text"},U={key:0,class:"segmented-control__error"};function L(s,n,o,D,d,l){const C=f("TransitionHeight");return a(),r("div",N,[s.label||o.allowUnselected?(a(),r("div",V,[e("label",M,i(s.label),1),o.allowUnselected?(a(),b(C,{key:0},{default:c(()=>[S(e("button",{class:"segmented-control__clear-button",type:"button",onClick:n[0]||(n[0]=v((...p)=>l.clear&&l.clear(...p),["prevent"]))},i(s.$t("GENERIC.CLEAR")),513),[[E,l.showClearButton]])]),_:1})):y("",!0)])):y("",!0),e("ul",{class:"segmented-control__options","data-num-options":l.dataNumOptions},[(a(!0),r(x,null,O(l.selectableOptions,(p,g)=>{var u;return a(),r("li",{class:w(["segmented-control__option-item",{"segmented-control__option-item--selected":p.key===((u=l.optionSelected)==null?void 0:u.key)}]),key:p.key,"data-item":`${s.name}-${g}`},[e("button",{class:"segmented-control__option-button",type:"button",onClick:z=>l.select(p.value)},[e("span",R,i(p.label),1)],8,K)],10,B)}),128))],8,I),t(C,null,{default:c(()=>[s.shouldShowErrors?(a(),r("div",U,i(l.errorMessage),1)):y("",!0)]),_:1})])}const P={components:{TransitionHeight:T},mixins:[q],props:{initialValue:{type:[Object,String,Number],default:null},options:{type:Array,default:()=>[]},optionValueKey:{type:String,default:"value"},optionLabelKey:{type:String,default:"text"},allowUnselected:{type:Boolean,default:!1}},computed:{hasSelected(){return!!this.value||this.value===0},hasSelectableOptions(){var s;return!!((s=this.selectableOptions)!=null&&s.length)},showClearButton(){return this.allowUnselected&&this.hasSelected},dataNumOptions(){return this.hasSelectableOptions?Math.min(4,Math.max(2,this.selectableOptions.length)):2},isValid(){return this.disabled?!0:!this.required||this.allowUnselected||this.hasSelected},errorMessage(){if(this.shouldShowErrors)return this.$t("FORM.ERROR.NOT_EMPTY")},selectableOptions(){return this.options.map(n=>{const o=n[this.optionValueKey],D=n[this.optionLabelKey],d=this.getKeyFromValue(o);return{value:o,label:D,key:d}})},optionSelected(){return this.hasSelected?this.selectableOptions.find(s=>s.value.id===this.value.id):this.allowUnselected||!this.hasSelectableOptions?null:this.selectableOptions[0]}},beforeMount(){!this.allowUnselected&&!this.hasSelected&&this.hasSelectableOptions&&(this.value=this.selectableOptions[0].value)},methods:{getKeyFromValue(s){return s==null?`empty_${this.name}`:typeof s!="object"?s:s._id||s.id?s._id||s.id:JSON.stringify(s)},select(s){this.value!==s&&(this.dirty=!0,this.value=s,this.$emit("change",this.value))},clear(){this.dirty=!0,this.value=null,this.$emit("change",null)}}},A=k(P,[["render",L]]);const Y=e("h1",{id:"segmentedcontrol",tabindex:"-1"},[F("SegmentedControl "),e("a",{class:"header-anchor",href:"#segmentedcontrol","aria-label":'Permalink to "SegmentedControl"'},"​")],-1),$=e("p",null,[F("Similar to "),e("a",{href:"/vuersatile-components/components/form/input-select.html"},"InputSelect"),F(", it manages a multiple states but with a different style.")],-1),j=_("",8),H=_("",1),os=JSON.parse('{"title":"SegmentedControl","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/segmented-control.md","lastUpdated":1680753251000}'),W={name:"components/form/segmented-control.md"},ps=Object.assign(W,{setup(s){const n=[{value:{id:1,text:"DAILY"},text:"Daily"},{value:{id:2,text:"WEEKLY"},text:"Weekly"},{value:{id:3,text:"MONTHLY"},text:"Monthly"}];return(o,D)=>(a(),r("div",null,[Y,$,t(h,null,{default:c(()=>[t(m,null,{default:c(()=>[t(A,{name:"periodicity",label:"Select payday",options:n})]),_:1})]),_:1}),j,t(h,null,{default:c(()=>[t(m,null,{default:c(()=>[t(A,{name:"periodicity",label:"Select payday",allowUnselected:"",options:n})]),_:1})]),_:1}),H]))}});export{os as __pageData,ps as default};
