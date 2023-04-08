<script setup>
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
  InputMultiSelect
} from '../../dist/vuersatile-components.js';

/* import {
  Card,
  Tooltip,
  LockedIcon,
  TooltipInfo
} from '@/components/info'

import {
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
  InputMultiSelect
} from '@/components/form' */

// import InputDate from '@/components/form/InputDate.vue';
// import InputDateRange from '@/components/form/InputDateRange.vue';

const passwordValidations = ['not-empty', { name: 'min-length', params: [8] }]
const numberValidations = ['not-empty', { name: 'min-value', params: [18] }]

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
            :validations="['not-empty', 'email']"
          )
      
        .col-6.mb-xs-4
          InputPassword(
            name="password",
            label="Password",
            placeholder="Enter a secure password...",
            :validations="passwordValidations"
          )
      
      .row
        .col-6.mb-xs-4
          ToggleSwitch(name="newsletter", label="Send me weekly")
        
        .col-6.mb-xs-4.mt-xs-4
          Tooltip(text="Required checkbox", position="top")
            Checkbox(name="conditions", label="I accept all the terms and conditions", :required="true")
        
      .row
        .col-12.mb-xs-4
          SegmentedControl(name="periodicity", label="Payment periodicity", :options="segmentedControlDateOptions")

      .row
        .col-12.mb-xs-4
          InputTextarea(name="comments", label="CV summary", placeholder="Write here the summary of your employment history", :validations="['not-empty']")
      
      .row
        .col-5.mb-xs-4
          InputSelect(
            name="select",
            label="Select an option",
            placeholder="Select a job...",
            :required="true",
            :allowClear="true",
            :allowSearch="true",
            :mountOptionsOutside="true",
            :options="selectOptions"
          )

        .col-7.mb-xs-4
          InputMultiSelect(
            name="multi",
            label="Select one or multiple options",
            placeholder="Favourite JavaScript framework",
            :required="true",
            :allowClear="true",
            :allowSearch="true",
            :options="multiselectOptions",
            :initialValue="[multiselectOptions[0].value]"
          )

      .row
        .col-6.mb-xs-4
          RadioButtonGroup(name="contact", label="Select preferred way of contact", :inputValues="radioOptions")

        .col-6.mb-xs-4
            InputNumber(
              name="age",
              label="Age",
              placeholder="You must be over 18...",
              icon="calendar-days",
              :validations="numberValidations"
            )

      .row
        .col-6.mb-xs-4
          InputDate(name="date", label="Select a date", placeholder="Select date")

        .col-6.mb-xs-4
          InputDateRange(name="daterange", label="Select a date range", placeholder="Select date range")
</template>
