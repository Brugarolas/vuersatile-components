<script setup>
import { ref } from 'vue'
import Card from '../../../lib/components/info/Card.vue'
import Button from '../../../lib/components/interactive/Button.vue'
import StepManager from '../../../lib/components/interactive/StepManager.vue'
import Form from '../../../lib/components/form/Form.vue'
import InputText from '../../../lib/components/form/InputText.vue'
import InputNumber from '../../../lib/components/form/InputNumber.vue'

const stepManagerData = [
  { title: 'Profile data', description: 'Data settings' },
  { title: 'Interest data', description: 'Attribution and interest settings' },
  { title: 'User data', description: 'User settings' }
]
const step = ref(0)
const stepAhead = () => {
  step.value += 1
}
const stepBack = () => {
  step.value -= 1
}

const moneyValidations = ['not-empty', { name: 'min-value', params: [25000] }]

const log = (formData) => {
    console.log('formData', formData)
}
</script>

<style>
.vp-doc .step-manager__title,
.vp-doc .step-manager__description {
    line-height: 1.2;
    margin: 0;
}
</style>

# StepManager

A simple step manager.

We will be using the following options:

```js
import { ref } from 'vue'

const stepManagerData = [
  { title: 'Profile data', description: 'Data settings' },
  { title: 'Interest data', description: 'Attribution and interest settings' },
  { title: 'User data', description: 'User settings' }
]
const step = ref(0)
const stepAhead = () => {
  step.value += 1
}
const stepBack = () => {
  step.value -= 1
}
```

<div class="mb-xs-8" />

<Card>
    <StepManager :steps="stepManagerData" :currentStep="step">
        <template v-slot:step1>
            <Form @submit="stepAhead">
                <InputText
                    class="mb-xs-4"
                    name="birthdate"
                    label="Enter your birthdate"
                    placeholder="MM/DD/YYYY"
                    :validations="['not-empty', 'date']"
                    inputType="tel"
                    customType="datetext"
                />
            </Form>
        </template>
        <template v-slot:step2>
            <Form @submit="stepAhead">
                <InputNumber
                    class="mb-xs-4"
                    name="money"
                    label="Yearly salary"
                    placeholder="Enter your salary in € gross per year"
                    :validations="moneyValidations"
                />
                <template v-slot:buttons>
                    <Button text="Back" type="tertiary" @click="stepBack" />
                </template>
            </Form>
        </template>
        <template v-slot:step3>
            <Form @submit="log">
                <InputText class="mb-xs-4" name="name" label="Name" :validations="['not-empty']" />
                <InputText class="mb-xs-4" name="lastName" label="Last name" :validations="['not-empty']" />
                <template v-slot:buttons>
                    <Button text="Back" type="tertiary" @click="stepBack" />
                </template>
            </Form>
        </template>
    </StepManager>
</Card>

```html
<Card>
    <StepManager :steps="stepManagerData" :currentStep="step">
        <template v-slot:step1>
            <Form @submit="stepAhead">
                <InputText
                    class="mb-xs-4"
                    name="birthdate"
                    label="Enter your birthdate"
                    placeholder="MM/DD/YYYY"
                    :validations="['not-empty', 'date']"
                    inputType="tel"
                    customType="datetext"
                />
            </Form>
        </template>
        <template v-slot:step2>
            <Form @submit="stepAhead">
                <InputNumber
                    class="mb-xs-4"
                    name="money"
                    label="Yearly salary"
                    placeholder="Enter your salary in € gross per year"
                    :validations="moneyValidations"
                />
                <template v-slot:buttons>
                    <Button text="Back" type="tertiary" @click="stepBack" />
                </template>
            </Form>
        </template>
        <template v-slot:step3>
            <Form @submit="log">
                <InputText name="name" label="Name" :validations="['not-empty']" />
                <InputText name="lastName" label="Last name" :validations="['not-empty']" />
                <template v-slot:buttons>
                    <Button text="Back" type="tertiary" @click="stepBack" />
                </template>
            </Form>
        </template>
    </StepManager>
</Card>
```

<div class="mb-xs-8" />
