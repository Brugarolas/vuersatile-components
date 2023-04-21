<script setup>
import Checkbox from '../../../lib/components/form/Checkbox.vue'
import InputText from '../../../lib/components/form/InputText.vue'
import InputPassword from '../../../lib/components/form/InputPassword.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'

const log = (formData) => {
  console.log(formData);
}
</script>

# Form

Component `Form` includes everything you need to start building forms without a hustle. It contains a submit button, auto self-validation in each input component which will link to the `Form` they are contained, and finally it builds a submit object with all the names and values of its fields as properties.

Check console when clicking on submitForm button.

<Card>
    <Form @submitForm="log">
        <div class="row">
            <div class="col-12 col-md-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-12 col-md-6 mb-xs-4">
                <InputPassword
                    name="password"
                    label="Password"
                    placeholder="Enter a secure password..."
                    :validations="['not-empty', { name: 'min-length', params: [8] }]"
                />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form @submitForm="log">
        <div class="row">
            <div class="col-12 col-md-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-12 col-md-6 mb-xs-4">
                <InputPassword
                    name="password"
                    label="Password"
                    placeholder="Enter a secure password..."
                    :validations="['not-empty', { name: 'min-length', params: [8] }]"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Props

- `validate`: Wether to auto self-validate the `Form` or not. Type `Boolean`, default `true`.

<div class="mb-xs-8" />

- `submitText`: Custom text for submit button. Type `String`, default `null`.

<Card>
  <Form submitText="Submit" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>

```html
<Card>
  <Form submitText="Submit" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>
```

<div class="mb-xs-8" />

- `loading`: display submit button as loading and prevents clicking on it. Type `Boolean`, default `false`.

<Card>
  <Form loading submitText="Submitting" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>

```html
<Card>
  <Form loading submitText="Submitting" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>
```

<div class="mb-xs-8" />

- `showSubmitButton`: show default submit button or you are going to implement your own submit button. Type `Boolean`, default `true`.

<Card>
  <Form :showSubmitButton="false" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>

```html
<Card>
  <Form :showSubmitButton="false" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>
```

<div class="mb-xs-8" />

- `autoValidateOnStart`: Validate on start and disable submit button if form is not valid, or don't validate. Type `Boolean`, default `true`.

<Card>
  <Form :autoValidateOnStart="false" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>

```html
<Card>
  <Form :autoValidateOnStart="false" @submitForm="log">
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>
```

<div class="mb-xs-8" />

- `scrollOnFail`: scroll to the top of the `Form` if `autoValidateOnStart` is disabled or you are using your own submit button, you click submit button, and validation fails. Type `Boolean`, default `false`.

<div class="mb-xs-8" />

- `scrollToInvalidField` instead of scrolling to top of the `Form`, scroll to the first component its validation failed. Type `Boolean`, default `false`.

<div class="mb-xs-8" />

- `disableSubmitButton`: show submit button as disabled. Type `Boolean`, default `false`.

<div class="mb-xs-8" />

- `resetOnSubmit`: to reset or not all `Form` fields on submit. Type `Boolean`, default `false`.

<Card>
    <Form resetOnSubmit @submitForm="log">
        <div class="row">
            <div class="col-12 col-md-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-12 col-md-6 mb-xs-4">
                <InputPassword
                    name="password"
                    label="Password"
                    placeholder="Enter a secure password..."
                    :validations="['not-empty', { name: 'min-length', params: [8] }]"
                />
            </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Checkbox name="conditions" label="I accept all the terms and conditions" required />
          </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form resetOnSubmit @submitForm="log">
        <div class="row">
            <div class="col-12 col-md-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-12 col-md-6 mb-xs-4">
                <InputPassword
                    name="password"
                    label="Password"
                    placeholder="Enter a secure password..."
                    :validations="['not-empty', { name: 'min-length', params: [8] }]"
                />
            </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Checkbox name="conditions" label="I accept all the terms and conditions" required />
          </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `skipUnmodifiedFields`: Skip fields that have not been modified when generating submit object. Type `Boolean`, default `false`.

<div class="mb-xs-8" />

## Emits

- `@submit`: native submit.

<div class="mb-xs-8" />

- `@submitForm`: custom submit.

<div class="mb-xs-8" />
