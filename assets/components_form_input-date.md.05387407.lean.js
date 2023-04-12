import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import{B as r,o as l,c as e,D as n,z as p,t as d,A as y,_ as u,x as s,a as o,U as m}from"./chunks/framework.1ccf76a1.js";import{T as _}from"./chunks/TransitionHeight.c16428d4.js";import{I as h}from"./chunks/InputCalendarBase.77687deb.js";import{R as C}from"./chunks/required-input.b3b5ce1e.js";import"./chunks/InputDate.vue_vue_type_style_index_0_lang.4ed993c7.js";import{F as f}from"./chunks/Form.3ebefab6.js";import{C as g}from"./chunks/Card.b69deb87.js";import"./chunks/basic-input.d366dd0e.js";import"./chunks/Button.184a1235.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";const A={class:"input-date"},I={key:0,class:"input-date__error"};function v(a,c,t,O,V,i){const D=r("InputCalendarBase"),F=r("TransitionHeight");return l(),e("div",A,[n(D,{label:a.label,position:t.position,lang:t.lang,placeholder:t.placeholder,error:a.shouldShowErrors,onInput:i.input},null,8,["label","position","lang","placeholder","error","onInput"]),n(F,null,{default:p(()=>[a.shouldShowErrors?(l(),e("span",I,d(a.$t("FORM.ERROR.MANDATORY_LONG")),1)):y("",!0)]),_:1})])}const E={components:{InputCalendarBase:h,TransitionHeight:_},mixins:[C],props:{position:{type:String,default:"center"},lang:{type:String,default:"en"},placeholder:{type:String,default:null}},methods:{input(a){this.dirty=!0,this.value=a,this.$emit("input",a)}}},S=u(E,[["render",v]]),b=s("h1",{id:"inputdate",tabindex:"-1"},[o("InputDate "),s("a",{class:"header-anchor",href:"#inputdate","aria-label":'Permalink to "InputDate"'},"​")],-1),q=s("p",null,"Input for selecting a date.",-1),x=s("p",null,[o("Implements mixins "),s("a",{href:"/vuersatile-components/components/form/required-input-mixin.html"},[s("code",null,"RequiredInputMixin")]),o(" and "),s("a",{href:"/vuersatile-components/components/form/basic-input-mixin.html"},[s("code",null,"BasicInputMixin")]),o(".")],-1),T={class:"row"},N={class:"col-12 mb-xs-4"},R=m("",1),Y=JSON.parse('{"title":"InputDate","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/input-date.md","lastUpdated":1680998659000}'),B={name:"components/form/input-date.md"},K=Object.assign(B,{setup(a){return(c,t)=>(l(),e("div",null,[b,q,x,n(g,null,{default:p(()=>[n(f,null,{default:p(()=>[s("div",T,[s("div",N,[n(S,{name:"date",label:"Select a date",placeholder:"Select date"})])])]),_:1})]),_:1}),R]))}});export{Y as __pageData,K as default};