import{I as r}from"./InputText.27536a94.js";import{D as n,o as t,A as l,_ as p}from"./framework.61f6be18.js";function d(o,u,s,c,w,e){const a=n("InputBase");return t(),l(a,{class:"input-password",value:o.value,type:e.inputTypePassword,name:o.name,label:o.label,icon:e.iconShowPassword,iconVariant:o.iconVariant,iconSize:"s",error:o.shouldShowErrors?o.errorMessage:null,placeholder:o.placeholder,autocomplete:s.autocomplete,disabled:o.disabled,onInput:o.input,onChange:o.change,onIconClick:e.switchShowPassword},null,8,["value","type","name","label","icon","iconVariant","error","placeholder","autocomplete","disabled","onInput","onChange","onIconClick"])}const i={mixins:[r],props:{autocomplete:{type:String,default:"current-password"}},data(){return{showPassword:!1}},computed:{iconShowPassword(){return this.showPassword?"eye-slash":"eye"},inputTypePassword(){return this.showPassword?"text":"password"}},methods:{switchShowPassword(){this.showPassword=!this.showPassword}}},P=p(i,[["render",d]]);export{P as I};
