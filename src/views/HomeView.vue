<script setup>
import { ref } from "vue"

import {
  Card,
  Tooltip,
  LockedIcon,
  TooltipInfo,
  Form,
  InputText,
  InputNumber,
  InputPassword,
  ToggleSwitch,
  SegmentedControl,
  Checkbox,
  InputTextarea,
  RadioButtonGroup,
  InputSelect,
  InputMultiSelect,
  InputDate,
  InputDateRange,
  InputRange,
  StepManager,
  Button
} from '../../dist/vuersatile-components.js';

const passwordValidations = ['not-empty', { name: 'min-length', params: [8] }]
const numberValidations = ['not-empty', { name: 'min-value', params: [18] }]
const moneyValidations = ['not-empty', { name: 'min-value', params: [6000] }]

const segmentedControlDateOptions = [
  { value: { id: 1, text: 'DAILY' }, text: 'Daily' },
  { value: { id: 2, text: 'WEEKLY' }, text: 'Weekly' },
  { value: { id: 3, text: 'MONTHLY' }, text: 'Monthly' }
];

const radioOptions = [
  { name: 'email', value: 'EMAIL', label: 'E-mail' },
  { name: 'phone', value: 'PHONE', label: 'Phone' }
]

const selectOptions = [
  { value: { id: 1, text: 'WORKER' }, text: 'I\'m a worker' },
  { value: { id: 2, text: 'FREELANCE' }, text: 'I\'m a freelance' },
  { value: { id: 3, text: 'COMPANY' }, text: 'I\'m a company' },
  { value: { id: 4, text: 'OTHER' }, text: 'None of the above' }
]

const multiselectOptions = [
  { value: { id: 1, text: 'VUE' }, text: 'Vue.js' },
  { value: { id: 2, text: 'REACT' }, text: 'React' },
  { value: { id: 3, text: 'ANGULAR' }, text: 'Angular' },
  { value: { id: 4, text: 'EMBER' }, text: 'Ember' },
  { value: { id: 5, text: 'SVELTE' }, text: 'Svelte' },
  { value: { id: 6, text: 'AURELIA' }, text: 'Aurelia' },
  { value: { id: 7, text: 'LIT' }, text: 'Lit/Polymer' }
]

const stepManagerData = [
  { title: 'Datos de perfil', description: 'Configuración de datos' },
  { title: 'Datos de interés', description: 'Configuración de atribución e interés' },
  { title: 'Datos de usuario', description: 'Configuración de usuario' }
]
let step = ref(0)
const stepAhead = () => {
  step.value += 1
}
const stepBack = () => {
  step.value -= 1
}

const log = (formData) => {
  console.log(formData);
}
</script>

<template lang="pug">
main.pr-xs-6.pl-xs-6
  Card.mt-xs-6(title="Work in progress!")
    div Documentation will be here...

    .mr-xs-4.ml-xs-4
      LockedIcon(text="You can't do that here!")
    
    .mr-xs-4.ml-xs-4
      TooltipInfo(text="What does that mean?", color="darkblue")

  Card.mt-xs-6(title="Contact form")
    Form(@submit="log", :resetOnSubmit="true")
      .row
        .col-6.mb-xs-4
          InputText(
            name="email",
            label="E-mail",
            placeholder="Enter your e-mail...",
            icon="at",
            :validations="['not-empty', 'email']",
            @input="log",
            @inputField="log",
            @change="log",
            @changeField="log"
          )
      
        .col-6.mb-xs-4
          InputPassword(
            name="password",
            label="Password",
            placeholder="Enter a secure password...",
            :validations="passwordValidations",
            @input="log",
            @inputField="log",
            @change="log",
            @changeField="log"
          )
      
      .row
        .col-6.mb-xs-4
          ToggleSwitch(name="newsletter", label="Send me weekly", @changeField="log")
        
        .col-6.mb-xs-4.mt-xs-4
          Tooltip(text="Required checkbox", position="top")
            Checkbox(name="conditions", label="I accept all the terms and conditions", :required="true", @input="log", @change="log", @changeField="log")
        
      .row
        .col-12.mb-xs-4
          SegmentedControl(name="periodicity", label="Payment periodicity", :options="segmentedControlDateOptions", @changeField="log")

      .row
        .col-12.mb-xs-4
          InputTextarea(
            name="comments",
            label="CV summary",
            placeholder="Write here the summary of your employment history",
            :validations="['not-empty']",
            @input="log",
            @inputField="log",
            @change="log",
            @changeField="log"
          )
      
      .row
        .col-6.mb-xs-4
          InputSelect(
            name="select",
            label="Select an option",
            placeholder="Select a job...",
            :required="true",
            :allowClear="true",
            :allowSearch="true",
            :mountOptionsOutside="true",
            :options="selectOptions",
            @changeField="log"
          )

        .col-6.mb-xs-4
          InputMultiSelect(
            name="multi",
            label="Select one or multiple options",
            placeholder="Favourite JavaScript framework",
            :required="true",
            :allowClear="true",
            :allowSearch="true",
            :options="multiselectOptions",
            :initialValue="[multiselectOptions[0].value]",
            @changeField="log"
          )

      .row
        .col-4.mb-xs-4
          RadioButtonGroup(name="contact", label="Select preferred way of contact", :inputValues="radioOptions", @input="log", @inputField="log", @change="log", @changeField="log")

        .col-4.mb-xs-4
          InputRange(name="range", label="Select range", @changeField="log")

        .col-4.mb-xs-4
            InputNumber(
              name="age",
              label="Age",
              placeholder="You must be over 18...",
              icon="calendar-days",
              :validations="numberValidations",
              @input="log",
              @inputField="log",
              @change="log",
              @changeField="log"
            )

      .row
        .col-6.mb-xs-4
          InputDate(name="date", label="Select a date", placeholder="Select date", @selectDate="log", @reset="log", @input="log")

        .col-6.mb-xs-4
          InputDateRange(name="daterange", label="Select a date range", placeholder="Select date range", @selectDate="log", @reset="log", @input="log")

  Card.mt-xs-6(title="Step Manager")
    StepManager.mt-xs-4(:steps="stepManagerData", :currentStep="step")
      template(v-slot:step1)
        Form(@submit="stepAhead")
          InputText.mb-xs-2(name="birthdate", label="Enter yout birthdate", placeholder="MM/DD/YYYY", :validations="['not-empty', 'date']", inputType="tel", customType="datetext")
      template(v-slot:step2)
        Form(@submit="stepAhead")
          InputNumber.mb-xs-2(name="money", label="Yearly salary", placeholder="Enter your salary in € gross per year", :validations="moneyValidations")

          template(v-slot:buttons)
            Button(text="Back", type="tertiary", @click="stepBack")
      template(v-slot:step3)
        Form(@submit="log")
          InputText.mb-xs-2(name="name", label="Name", :validations="['not-empty']")
          InputText.mb-xs-2(name="lastName", label="Last name", :validations="['not-empty']")

          template(v-slot:buttons)
            Button(text="Back", type="tertiary", @click="stepBack")
</template>
