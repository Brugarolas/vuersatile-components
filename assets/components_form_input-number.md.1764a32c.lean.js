import{I as _}from"./chunks/Icon.14f47361.js";import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import{D as i,o as p,c as d,G as o,A as D,C as F,_ as v,B as t,z as a,a as r,V as h}from"./chunks/framework.2ef82e6b.js";import{I as b}from"./chunks/InputBase.7d275359.js";import{V as g}from"./chunks/validations-input.3cab52d2.js";import"./chunks/InputNumber.vue_vue_type_style_index_0_lang.4ed993c7.js";import{F as u}from"./chunks/Form.92c440b2.js";import{C as y}from"./chunks/Card.9fdd6421.js";import"./chunks/Icon.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/index.ec15b88a.js";import"./chunks/Button.388429ea.js";import"./chunks/TransitionHeight.42bf1ec8.js";import"./chunks/basic-input.d1a3a2b5.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const A={class:"input-number"};function f(s,n,l,B,R,e){const C=i("InputBase"),c=i("Icon");return p(),d("div",A,[o(C,{value:s.value,type:"number",name:s.name,label:s.label,icon:l.icon,iconVariant:l.iconVariant,iconSize:"s",error:s.shouldShowErrors?s.errorMessage:null,placeholder:l.placeholder,step:l.step,min:l.min,max:l.max,disabled:s.disabled,onInput:e.input,onChange:e.change},null,8,["value","name","label","icon","iconVariant","error","placeholder","step","min","max","disabled","onInput","onChange"]),e.showSumClasses?(p(),D(c,{key:0,class:"input-number__icon input-number__icon--left",icon:"minus",onClick:e.minus},null,8,["onClick"])):F("",!0),e.showSumClasses?(p(),D(c,{key:1,class:"input-number__icon input-number__icon--right",icon:"plus",onClick:e.plus},null,8,["onClick"])):F("",!0)])}const E={components:{InputBase:b,Icon:_},mixins:[g],props:{initialValue:{type:[String,Number],default:null},icon:{type:String,default:null},iconVariant:{type:String,default:"fa-solid"},placeholder:{type:String,default:null},step:{type:[String,Number],default:"any"},min:{type:Number,default:null},max:{type:Number,default:null}},computed:{showSumClasses(){return!this.icon},hasMin(){return!!this.min||this.min===0},hasMax(){return!!this.max||this.max===0},realValidations(){return this.validations?this.validations.map(n=>n==="not-empty"?{name:n,errorMessage:"FORM.ERROR.NOT_EMPTY_NUMBER"}:n.name==="not-empty"?{...n,errorMessage:"FORM.ERROR.NOT_EMPTY_NUMBER"}:n):[]}},created(){this.convertInputToNumber(),this.validate()},methods:{plus(){const s=this.step==="any"?1:this.step;this.value=this.hasMax?Math.min(this.max,this.value+s):this.value+s},minus(){const s=this.step==="any"?1:this.step;this.value=this.hasMin?Math.max(this.min,this.value-s):this.value-s},shouldSetInitialValue(){return!!this.initialValue||this.initialValue===0},input(s){this.dirty=!0,this.convertInputToNumber(s.target.value),this.$emit("input",s.target.value),this.validate()},change(){this.dirty=!0,this.$emit("change",this.value)},convertInputToNumber(s){const n=s||this.value;if(!n||typeof n!="string"){this.value=n;return}const l=Number(n.replace(",","."));isNaN(l)||(this.value=l)}}},m=v(E,[["render",f]]);const q=a("h1",{id:"inputnumber",tabindex:"-1"},[r("InputNumber "),a("a",{class:"header-anchor",href:"#inputnumber","aria-label":'Permalink to "InputNumber"'},"​")],-1),x=a("p",null,"Not so plain and not so simple input number.",-1),N=a("p",null,[r("Implements mixins "),a("a",{href:"/vuersatile-components/components/form/validations-input-mixin.html"},[a("code",null,"ValidationsInputMixin")]),r(" and "),a("a",{href:"/vuersatile-components/components/form/basic-input-mixin.html"},[a("code",null,"BasicInputMixin")]),r(".")],-1),I={class:"row"},V={class:"col-12"},T=h("",10),S={class:"row"},w={class:"col-12"},M=h("",2),$=JSON.parse('{"title":"InputNumber","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/input-number.md","lastUpdated":1680998659000}'),k={name:"components/form/input-number.md"},ss=Object.assign(k,{setup(s){return(n,l)=>(p(),d("div",null,[q,x,N,o(y,null,{default:t(()=>[o(u,null,{default:t(()=>[a("div",I,[a("div",V,[o(m,{name:"age",label:"Age",placeholder:"You must be over 18...",icon:"calendar-days",validations:["not-empty",{name:"min-value",params:[18]}]})])])]),_:1})]),_:1}),T,o(y,null,{default:t(()=>[o(u,null,{default:t(()=>[a("div",S,[a("div",w,[o(m,{name:"age",label:"Age",placeholder:"You must be over 18...",min:0,max:50,step:1,validations:["not-empty",{name:"min-value",params:[18]}]})])])]),_:1})]),_:1}),M]))}});export{$ as __pageData,ss as default};