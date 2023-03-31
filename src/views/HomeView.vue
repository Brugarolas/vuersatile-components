<script setup>
import { Card } from '@/components/info'
import {
  Form,
  InputText,
  InputNumber,
  InputPassword,
  ToggleSwitch,
  SegmentedControl,
  Checkbox,
  InputTextarea,
  RadioButtonGroup
} from '@/components/form';

const minAge = 18

const segmentedControlDateOptions = [
  { value: { id: 1, text: 'DAILY' }, text: 'Daily' },
  { value: { id: 2, text: 'WEEKLY' }, text: 'Weekly' },
  { value: { id: 3, text: 'MONTHLY' }, text: 'Monthly' }
];

const radioOptions = [
  { name: 'email', value: 'EMAIL', label: 'E-mail' },
  { name: 'phone', value: 'PHONE', label: 'Phone' }
]

const log = (formData) => {
  console.log(formData);
}
</script>

<template lang="pug">
main.pr-xs-6.pl-xs-6
  Card.mt-xs-6(title="Work in progress!")
    span Documentation will be here...

  Card.mt-xs-6(title="Contact form")
    Form(@submit="log")
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
            :validations="['not-empty']"
          )
      
      .row
        .col-6.mb-xs-4
          ToggleSwitch(name="newsletter", label="Send me weekly")
        
        .col-6.mb-xs-4.mt-xs-4
          Checkbox(name="conditions", label="I accept all the terms and conditions", :required="true")
        
      .row
        .col-12.mb-xs-4
          SegmentedControl(name="periodicity", :options="segmentedControlDateOptions")

      .row
        .col-12.mb-xs-4
          InputTextarea(name="comments", label="CV summary", placeholder="Write here the summary of your employment history", :validations="['not-empty']")

      .row
        .col-6.mb-xs-4
          RadioButtonGroup(name="contact", label="Select preferred way of contact", :inputValues="radioOptions")

        .col-6.mb-xs-4
            InputNumber(
              name="age",
              label="Age",
              placeholder="You must be over 18...",
              icon="calendar-days",
              :validations="['not-empty', { name: 'min-value', params: [minAge] }]"
            )
</template>
