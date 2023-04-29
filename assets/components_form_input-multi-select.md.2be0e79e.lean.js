import{C as P}from"./chunks/CheckboxBase.c56daa32.js";import{I as K}from"./chunks/InputBase.32253ba6.js";import{D as F,a7 as M,o as p,c,t as _,C as d,A as S,B as o,J as f,z as i,K as v,N as b,F as E,M as k,G as t,n as w,a1 as L,a4 as x,_ as B,V as y}from"./chunks/framework.61f6be18.js";import"./chunks/TextareaBase.vue_vue_type_style_index_0_lang.04411fc4.js";import{R as N}from"./chunks/required-input.6ef3e628.js";import{I as J}from"./chunks/Icon.dc8a3641.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Tooltip.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/LockedIcon.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/TooltipInfo.vue_vue_type_style_index_0_lang.4ed993c7.js";import{T as U}from"./chunks/TransitionHeight.911f4f4b.js";import{T as j,D as G}from"./chunks/TransitionFadeSelect.82f36910.js";import{T as H}from"./chunks/Tag.11330504.js";import"./chunks/InputMultiSelect.vue_vue_type_style_index_0_lang.4ed993c7.js";import{F as C}from"./chunks/Form.d806116e.js";import{C as h}from"./chunks/Card.bb74d76c.js";import"./chunks/index.ec15b88a.js";import"./chunks/Button.2dc36afe.js";import"./chunks/Tag.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/basic-input.762ff9c0.js";import"./chunks/Icon.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Form.vue_vue_type_style_index_0_lang.4ed993c7.js";const z=["data-field-name","data-options-state"],W={key:0,class:"input-multi-select__label-container"},Y={key:0,class:"input-multi-select__label"},Q={class:"input-multi-select__wrapper"},X=["name","placeholder"],Z={class:"input-multi-select__selected-container"},$={class:"input-multi-select__selected-wrapper"},ss=["data-select-options"],ls={key:0,class:"input-multi-select__search-bar-wrapper"},es=["data-item","data-item-key"],as={key:0,class:"input-multi-select__error"};function ns(s,l,a,r,u,e){const m=F("TransitionHeight"),T=F("Tag"),q=F("Icon"),O=F("InputBase"),I=F("CheckboxBase"),V=F("TransitionFadeSelect"),R=M("click-outside");return p(),c("div",{class:w(["input-multi-select",e.componentClass]),"data-field-name":s.name,"data-options-state":e.dataStateOptions,onKeydown:[l[7]||(l[7]=x((...n)=>e.close&&e.close(...n),["esc"])),l[8]||(l[8]=x((...n)=>e.selectFilteredResults&&e.selectFilteredResults(...n),["enter"]))]},[s.label||a.allowClear?(p(),c("div",W,[s.label?(p(),c("label",Y,_(s.label),1)):d("",!0),a.allowClear?(p(),S(m,{key:1},{default:o(()=>[f(i("button",{class:"input-multi-select__clear-button",type:"button",onClick:l[0]||(l[0]=v((...n)=>e.clear&&e.clear(...n),["prevent"]))},_(s.$t("GENERIC.CLEAR")),513),[[b,e.showClearButton]])]),_:1})):d("",!0)])):d("",!0),f((p(),c("div",Q,[i("input",{class:"input-multi-select__input",ref:"input",type:"text",readonly:"readonly",name:s.name,placeholder:e.placeholderMessage,onClick:l[1]||(l[1]=v((...n)=>e.toggle&&e.toggle(...n),["prevent"]))},null,8,X),i("div",{class:"input-multi-select__content",onClick:l[4]||(l[4]=(...n)=>e.toggle&&e.toggle(...n))},[i("div",Z,[i("div",$,[(p(!0),c(E,null,k(e.optionsSelected,n=>(p(),S(T,{class:"input-multi-select__selected-tag",key:n.key,text:n[a.optionLabelKey],color:"blue",showCloseButton:!0,onClose:D=>{e.stopPropagation(D),e.unselect(n)},onClick:l[2]||(l[2]=D=>e.stopPropagation(D))},null,8,["text","onClose"]))),128))])]),f(i("span",{class:"input-multi-select__num-selected"},_(e.numSelected),513),[[b,e.hasAnySelected&&e.numSelected>1]]),i("button",{class:"input-multi-select__open-button",type:"button",onClick:l[3]||(l[3]=v(()=>{},["prevent"]))},[t(q,{icon:"chevron-down"})])]),t(V,null,{default:o(()=>[f(i("ul",{class:w(["input-multi-select__option-list",{"input-multi-select__option-list--outside":s.mountOptionsOutside}]),ref:"selectOptions",style:L(s.dropdownStyle),"data-select-options":s.name,onClick:l[6]||(l[6]=(...n)=>e.stopPropagation&&e.stopPropagation(...n))},[a.allowSearch?(p(),c("li",ls,[t(O,{class:"input-multi-select__search-bar",value:u.search,name:"Search",icon:"magnifying-glass",placeholder:s.$t("GENERIC.SEARCH"),onInput:e.inputSearch},null,8,["value","placeholder","onInput"])])):d("",!0),(p(!0),c(E,null,k(e.filteredOptions,(n,D)=>(p(),c("li",{class:"input-multi-select__option-item",key:n.key,"data-item":`${s.name}-${D}`,"data-item-key":n.key},[t(I,{class:"input-multi-select__checkbox",checked:u.selected[n.key],name:`${s.name}-${D}`,label:n[a.optionLabelKey],disabled:n.disabled,ref_for:!0,ref:e.saveRef(n.key),onClick:l[5]||(l[5]=g=>e.stopPropagation(g,!1)),onChange:g=>e.toggleSelect(g,n)},null,8,["checked","name","label","disabled","onChange"])],8,es))),128))],14,ss),[[b,u.isOpen]])]),_:1})])),[[R,e.close]]),t(m,null,{default:o(()=>[s.shouldShowErrors?(p(),c("div",as,_(e.errorMessage),1)):d("",!0)]),_:1})],42,z)}const ts={components:{TransitionHeight:U,Tag:H,TransitionFadeSelect:j,CheckboxBase:P,InputBase:K,Icon:J},mixins:[N,G],props:{initialValue:{type:Array,default:null},options:{type:Array,default:()=>[]},placeholder:{type:String,default:null},optionValueKey:{type:String,default:"value"},optionLabelKey:{type:String,default:"text"},optionDisabledKey:{type:String,default:"disabled"},allowClear:{type:Boolean,default:!1},allowSearch:{type:Boolean,default:!1}},data(){return{value:[],emptyValue:[],isOpen:!1,selected:{},search:null,algo:{}}},computed:{componentClass(){return{"input-multi-select--open":this.isOpen,"input-multi-select--disabled":this.disabled,"input-multi-select--error":this.shouldShowErrors}},numSelected(){var s;return((s=this.value)==null?void 0:s.length)||0},hasAnySelected(){return!!this.numSelected},showClearButton(){return this.hasAnySelected&&this.allowClear&&!this.disabled},placeholderMessage(){return this.hasAnySelected?null:this.placeholder},dataStateOptions(){return this.isOpen?"open":"closed"},searchFilter(){var s;return((s=this.search)==null?void 0:s.trim())||""},isSearchActive(){return this.allowSearch&&this.searchFilter},errorMessage(){if(this.shouldShowErrors)return this.$t("FORM.ERROR.NOT_EMPTY")},selectableOptions(){const s=[];for(let l=0;l<this.options.length;l++){const a=this.options[l],r=a[this.optionValueKey],u=a[this.optionLabelKey],e=a[this.optionDisabledKey],m=this.getKeyFromValue(r);s.push({[this.optionValueKey]:r,[this.optionLabelKey]:u,key:m,disabled:e})}return s},filteredOptions(){if(!this.allowSearch||!this.searchFilter)return this.selectableOptions;const s=this.searchFilter.toLowerCase();return this.selectableOptions.filter(l=>{const a=l[this.optionLabelKey].toLowerCase();return this.selected[l.key]||a.includes(s)})},optionsSelected(){return this.value.map(s=>this.selectableOptions.find(a=>a[this.optionValueKey].id===s.id)||{[this.optionValueKey]:s,[this.optionLabelKey]:s,key:s})},isValid(){return this.disabled?!0:!this.required||this.hasAnySelected},dropdownElements(){return{content:this.$refs.selectOptions,sibling:this.$refs.input}}},created(){var s;(s=this.initialValue)!=null&&s.length&&(this.value=[...this.initialValue],this.initialValue.forEach(l=>{const a=this.getKeyFromValue(l);this.selected[a]=!0}))},methods:{saveRef(s){return function(l,a){a.checkboxes||(a.checkboxes={}),a.checkboxes[s]=l}},inputSearch(s){this.search=s.target.value},shouldSetInitialValue(){return!1},_selectOptions(s){s.forEach(a=>{const r=this.$refs.checkboxes[a.key];r&&!r.value&&(r.value=!0)});const l=new Set([...this.optionsSelected,...s].map(a=>a.value));this.value=[...l]},stopPropagation(s,l=!0){s.stopPropagation(),l&&s.preventDefault()},getKeyFromValue(s){return s==null?`empty_${this.name}`:typeof s!="object"?s:s._id||s.id?s._id||s.id:JSON.stringify(s)},change(){this.dirty=!0,this.$emit("changeField",this.value)},clear(){this.dirty=!0,this.selectableOptions.forEach(s=>{const l=this.$refs.checkboxes[s.key];l&&l.value&&(l.value=!1)}),this.value=[],this.selected={},this.$emit("changeField",this.value)},all(){this.dirty=!0,this._selectOptions(this.selectableOptions),this.$emit("changeField",this.value)},toggle(){this.disabled||(this.isOpen=!this.isOpen,this.allowSearch&&!this.isOpen&&(this.search=null),this.mountOptionsOutside&&this.isOpen&&this.mountElement())},close(){this.isOpen=!1,this.search=null},toggleSelect(s,l){this.dirty=!0;const a=s.target.checked;this.selected[l.key]=a,a?this.value.push(l[[this.optionValueKey]]):this.value=this.value.filter(r=>r.id!==l[this.optionValueKey].id),this.change()},selectFilteredResults(){var s;!this.searchFilter||!((s=this.filteredOptions)!=null&&s.length)||(this.dirty=!0,this._selectOptions(this.filteredOptions),this.$emit("changeField",this.value),this.close())},unselect(s){this.dirty=!0,this.selected[s.key]=!1,this.value=this.value.filter(l=>l.id!==s[this.optionValueKey].id),this.change()},reset(){this.dirty=!1,this.formIsDirty=!1,this.value=[],this.selected={},this.$emit("changeField",this.value)}}},A=B(ts,[["render",ns]]);const os=y("",5),ps=y("",9),rs=y("",4),cs=y("",3),is=y("",4),Ds=y("",5),Ps=JSON.parse('{"title":"InputMultiSelect","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/input-multi-select.md","lastUpdated":1682312829000}'),Fs={name:"components/form/input-multi-select.md"},Ks=Object.assign(Fs,{setup(s){const l=[{value:{id:1,text:"VUE"},text:"Vue.js"},{value:{id:2,text:"REACT"},text:"React"},{value:{id:3,text:"ANGULAR"},text:"Angular"},{value:{id:4,text:"EMBER"},text:"Ember"},{value:{id:5,text:"SVELTE"},text:"Svelte"},{value:{id:6,text:"AURELIA"},text:"Aurelia"},{value:{id:7,text:"LIT"},text:"Lit/Polymer"}];return(a,r)=>(p(),c("div",null,[os,t(h,null,{default:o(()=>[t(C,null,{default:o(()=>[t(A,{name:"select",label:"Select one or multiple options",placeholder:"Favourites JavaScript frameworks...",required:"",options:l})]),_:1})]),_:1}),ps,t(h,null,{default:o(()=>[t(C,null,{default:o(()=>[t(A,{name:"select",label:"Select one or multiple options",placeholder:"Favourites JavaScript frameworks...",required:"",allowClear:"",options:l})]),_:1})]),_:1}),rs,t(h,null,{default:o(()=>[t(C,null,{default:o(()=>[t(A,{name:"select",label:"Select one or multiple options",placeholder:"Favourites JavaScript frameworks...",allowSearch:"",options:l})]),_:1})]),_:1}),cs,t(h,null,{default:o(()=>[t(C,null,{default:o(()=>[t(A,{name:"select",label:"Select one or multiple options",placeholder:"Select your favourites JavaScript frameworks...",required:"",options:l})]),_:1})]),_:1}),is,t(h,null,{default:o(()=>[t(C,null,{default:o(()=>[t(A,{name:"select",label:"Select one or multiple options",placeholder:"Favourites JavaScript frameworks...",mountOptionsOutside:"",options:l})]),_:1})]),_:1}),Ds]))}});export{Ps as __pageData,Ks as default};
