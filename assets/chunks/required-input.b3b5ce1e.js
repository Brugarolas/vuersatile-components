import{B as e}from"./basic-input.d366dd0e.js";const t={mixins:[e],props:{required:{type:Boolean,default:!0}},computed:{isValid(){return this.disabled?!0:!this.required||!!this.value}},methods:{shouldSetInitialValue(){return!!this.initialValue}}};export{t as R};