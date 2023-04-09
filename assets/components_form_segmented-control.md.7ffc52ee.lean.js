import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import{B as f,o as t,c as r,x as e,t as i,y as b,z as c,H as S,I as v,L as E,A as y,F as x,K as O,D as a,n as w,_ as k,a as F,U as _}from"./chunks/framework.1ccf76a1.js";import{T}from"./chunks/TransitionHeight.c16428d4.js";import{R as q}from"./chunks/required-input.b3b5ce1e.js";import"./chunks/SegmentedControl.vue_vue_type_style_index_0_lang.4ed993c7.js";import{F as m}from"./chunks/Form.3ebefab6.js";import{C as h}from"./chunks/Card.b69deb87.js";import"./chunks/basic-input.d366dd0e.js";import"./chunks/Button.184a1235.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const N={class:"segmented-control"},V={key:0,class:"segmented-control__label-container"},M={class:"segmented-control__label"},I=["data-num-options"],U=["data-item"],B=["onClick"],K={class:"segmented-control__option-text"},L={key:0,class:"segmented-control__error"};function R(s,n,o,D,d,l){const C=f("TransitionHeight");return t(),r("div",N,[s.label||o.allowUnselected?(t(),r("div",V,[e("label",M,i(s.label),1),o.allowUnselected?(t(),b(C,{key:0},{default:c(()=>[S(e("button",{class:"segmented-control__clear-button",type:"button",onClick:n[0]||(n[0]=v((...p)=>l.clear&&l.clear(...p),["prevent"]))},i(s.$t("GENERIC.CLEAR")),513),[[E,l.showClearButton]])]),_:1})):y("",!0)])):y("",!0),e("ul",{class:"segmented-control__options","data-num-options":l.dataNumOptions},[(t(!0),r(x,null,O(l.selectableOptions,(p,g)=>{var u;return t(),r("li",{class:w(["segmented-control__option-item",{"segmented-control__option-item--selected":p.key===((u=l.optionSelected)==null?void 0:u.key)}]),key:p.key,"data-item":`${s.name}-${g}`},[e("button",{class:"segmented-control__option-button",type:"button",onClick:z=>l.select(p.value)},[e("span",K,i(p.label),1)],8,B)],10,U)}),128))],8,I),a(C,null,{default:c(()=>[s.shouldShowErrors?(t(),r("div",L,i(l.errorMessage),1)):y("",!0)]),_:1})])}const P={components:{TransitionHeight:T},mixins:[q],props:{initialValue:{type:[Object,String,Number],default:null},options:{type:Array,default:()=>[]},optionValueKey:{type:String,default:"value"},optionLabelKey:{type:String,default:"text"},allowUnselected:{type:Boolean,default:!1}},computed:{hasSelected(){return!!this.value||this.value===0},hasSelectableOptions(){var s;return!!((s=this.selectableOptions)!=null&&s.length)},showClearButton(){return this.allowUnselected&&this.hasSelected},dataNumOptions(){return this.hasSelectableOptions?Math.min(4,Math.max(2,this.selectableOptions.length)):2},isValid(){return this.disabled?!0:!this.required||this.allowUnselected||this.hasSelected},errorMessage(){if(this.shouldShowErrors)return this.$t("FORM.ERROR.NOT_EMPTY")},selectableOptions(){return this.options.map(n=>{const o=n[this.optionValueKey],D=n[this.optionLabelKey],d=this.getKeyFromValue(o);return{value:o,label:D,key:d}})},optionSelected(){return this.hasSelected?this.selectableOptions.find(s=>s.value.id===this.value.id):this.allowUnselected||!this.hasSelectableOptions?null:this.selectableOptions[0]}},beforeMount(){!this.allowUnselected&&!this.hasSelected&&this.hasSelectableOptions&&(this.value=this.selectableOptions[0].value)},methods:{getKeyFromValue(s){return s==null?`empty_${this.name}`:typeof s!="object"?s:s._id||s.id?s._id||s.id:JSON.stringify(s)},select(s){this.value!==s&&(this.dirty=!0,this.value=s,this.$emit("change",this.value))},clear(){this.dirty=!0,this.value=null,this.$emit("change",null)}}},A=k(P,[["render",R]]);const Y=e("h1",{id:"segmentedcontrol",tabindex:"-1"},[F("SegmentedControl "),e("a",{class:"header-anchor",href:"#segmentedcontrol","aria-label":'Permalink to "SegmentedControl"'},"​")],-1),H=e("p",null,[F("Similar to "),e("a",{href:"/vuersatile-components/components/form/input-select.html"},[e("code",null,"InputSelect")]),F(", it manages a multiple states but with a different style.")],-1),$=_("",8),j=_("",1),os=JSON.parse('{"title":"SegmentedControl","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/segmented-control.md","lastUpdated":1680757470000}'),W={name:"components/form/segmented-control.md"},ps=Object.assign(W,{setup(s){const n=[{value:{id:1,text:"DAILY"},text:"Daily"},{value:{id:2,text:"WEEKLY"},text:"Weekly"},{value:{id:3,text:"MONTHLY"},text:"Monthly"}];return(o,D)=>(t(),r("div",null,[Y,H,a(h,null,{default:c(()=>[a(m,null,{default:c(()=>[a(A,{name:"periodicity",label:"Select payday",options:n})]),_:1})]),_:1}),$,a(h,null,{default:c(()=>[a(m,null,{default:c(()=>[a(A,{name:"periodicity",label:"Select payday",allowUnselected:"",options:n})]),_:1})]),_:1}),j]))}});export{os as __pageData,ps as default};
