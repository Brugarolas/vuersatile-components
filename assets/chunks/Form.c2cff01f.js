import{B as m}from"./Button.b8c960d2.js";import{B as h,o,c as r,r as l,x as f,D as c,A as a,_ as F,a4 as b,f as n}from"./framework.483dc0f8.js";/* empty css                                             */const p=["novalidate"],y={key:0,class:"form__buttons"},v={class:"form__group-buttons"},B={key:0,class:"form__submit-button"};function S(t,e,i,_,V,s){const d=h("Button");return o(),r("form",{class:"form",novalidate:!i.validate,onSubmit:e[0]||(e[0]=(...u)=>s.submit&&s.submit(...u))},[l(t.$slots,"default"),s.hasButtons?(o(),r("div",y,[f("div",v,[l(t.$slots,"buttons")]),i.showSubmitButton?(o(),r("div",B,[c(d,{button:"submit",type:"approve",text:s.computedSubmitText,disabled:s.disabledSubmit,loading:i.loading,"data-button-role":"continue"},null,8,["text","disabled","loading"])])):a("",!0)])):a("",!0)],40,p)}const g={components:{Button:m},provide(){const t={};return Object.defineProperty(t,"loading",{enumerable:!0,get:()=>this.loading}),Object.defineProperty(t,"isValid",{enumerable:!0,get:()=>this.isValid}),Object.defineProperty(t,"addField",{get:()=>this.insertField}),Object.defineProperty(t,"removeField",{get:()=>this.removeField}),{$form:t}},props:{validate:{type:Boolean,default:!0},submitText:{type:String,default:null},loading:{type:Boolean,default:!1},showSubmitButton:{type:Boolean,default:!0},autoValidateOnStart:{type:Boolean,default:!0},scrollOnFail:{type:Boolean,default:!1},scrollToInvalidField:{type:Boolean,default:!1},disableSubmitButton:{type:Boolean,default:!1},resetOnSubmit:{type:Boolean,default:!1},skipUnmodifiedFields:{type:Boolean,default:!1}},data(){return{dirty:!1,formFields:[]}},computed:{activeFormFields(){return this.formFields.filter(t=>!t.isDisabled)},firstInvalidField(){return this.activeFormFields.find(t=>!t.isValid)},isValid(){return this.activeFormFields.length?!this.firstInvalidField:!0},isDirty(){return this.formFields.some(e=>!!e.valueHasChanged)||this.dirty},disabledSubmit(){return this.disableSubmitButton?!0:this.autoValidateOnStart||this.dirty?!this.isValid:!1},computedSubmitText(){return this.submitText||this.$t("GENERIC.CONTINUE")},hasButtons(){return!!(this.showSubmitButton||this.$slots.buttons&&this.$slots.buttons.length)}},created(){this.$fieldMap=new Map},methods:{insertField(t){this.$fieldMap.has(t.name)||(this.$fieldMap.set(t.name,t),this.formFields.push(t),this.dirty?t.startShowingFieldErrors():this.autoValidateOnStart&&t.setFormIsDirty())},removeField(t){const e=this.formFields.findIndex(i=>i.name===t);e>-1&&(this.formFields.splice(e,1),this.$fieldMap.delete(t))},resetField(t){const e=this.formFields.find(i=>i.name===t);e&&e.component.reset()},submit(t){if(t&&t.preventDefault(),this.setFormIsDirty(),!this.isValid){this.scrollIntoView(this.firstInvalidField&&this.firstInvalidField.element);return}const e=this.buildFormWithFields();this.resetOnSubmit&&this.reset(),this.$emit("submit",e)},reset(){this.dirty=!1,this.formFields.forEach(t=>{t.component.reset()})},buildFormWithFields(){return this.activeFormFields.reduce((t,e)=>(this.skipUnmodifiedFields&&!e.valueHasChanged||(t[e.name]=e.value),t),{})},buildFormValidation(){const t=this;return new b({component:t,element:t.$el,isValid:n(()=>t.isValid),isDirty:n(()=>t.isDirty)})},setFormIsDirty(){this.dirty||(this.dirty=!0,this.formFields.forEach(t=>{t.startShowingFieldErrors()}))},scrollIntoView(t){if(!this.scrollOnFail)return;(this.scrollToInvalidField?t||this.$el:this.$el).scrollIntoView({behavior:"smooth",alignToTop:!0,block:"start"})}}},T=F(g,[["render",S]]);export{T as F};
