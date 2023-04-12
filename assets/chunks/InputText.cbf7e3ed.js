import"./TextareaBase.vue_vue_type_style_index_0_lang.4ed993c7.js";import{B as u,o as i,y as d,_ as c}from"./framework.1ccf76a1.js";import{I as p}from"./InputBase.d9e7a2e8.js";import{V as m}from"./validations-input.bd8dae9a.js";const h=(e,n)=>e.length===2&&n<2?e+"/":e,a=(e,n)=>{const t=e?`${Math.min(e,n)}`:"";return t<10&&e&&e.length===2?`0${t}`:t},y={methods:{formatDate(e){const n=e.replace(/\D/g,"");return[a(n.substr(0,2),31),a(n.substr(2,2),12),n.substr(4,4)].map(h).join("")}}};function f(e,n,t,s,l,r){const o=u("InputBase");return i(),d(o,{class:"input-text",value:l.value,name:e.name,label:e.label,icon:t.icon,iconSize:"s",error:r.realError,placeholder:t.placeholder,autocomplete:t.autocomplete,pattern:t.pattern,disabled:e.disabled,"allow-read-only":t.readOnly,type:t.inputType,onInput:r.input,onChange:r.change,onKeydown:r.enterPressed},null,8,["value","name","label","icon","error","placeholder","autocomplete","pattern","disabled","allow-read-only","type","onInput","onChange","onKeydown"])}const g={components:{InputBase:p},mixins:[m,y],props:{initialValue:{type:[String,Number],default:null},placeholder:{type:String,default:null},autocomplete:{type:String,default:null},pattern:{type:String,default:null},icon:{type:String,default:null},iconVariant:{type:String,default:"fa-solid"},customError:{type:String,default:null},inputType:{type:String,default:"text",validator:e=>["text","tel","email","number"].includes(e)},customType:{type:String,default:null},readOnly:{type:Boolean,default:!1}},data(){return{value:""}},computed:{realError(){return this.customError?this.customError:this.shouldShowErrors?this.errorMessage:null}},methods:{input(e){this.value=this.formatInput(e.target.value),this.$emit("input",this.value),this.validate()},change(){this.dirty=!0,this.$emit("change",this.value)},enterPressed(e){this.keyPressed=e.keyCode,this.keyPressed===13&&this.$emit("enterPressed",this.value)},setFocus(e){this.disabled||(this.focus=e)},formatInput(e){const n=[8,46];switch(this.customType){case"datetext":return n.includes(this.keyPressed)?e:this.formatDate(e);default:return e}}}},w=c(g,[["render",f]]);export{w as I};