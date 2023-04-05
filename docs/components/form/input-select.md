<script setup>
import InputSelect from '../../../lib/components/form/InputSelect.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'

const selectOptions = [
  { value: { id: 1, text: 'WORKER' }, text: 'I\'m a worker' },
  { value: { id: 2, text: 'FREELANCE' }, text: 'I\'m a freelance' },
  { value: { id: 3, text: 'COMPANY' }, text: 'I\'m a company' },
  { value: { id: 4, text: 'OTHER' }, text: 'None of the above' }
]
</script>

<style>
.vp-doc .input-select__list {
    padding-left: 0 !important;
    margin: 0 !important;
}

.vp-doc .input-select__error-message {
    height: auto !important;
    line-height: 1.2 !important;
    margin: 0 !important;
}
</style>

# InputSelect

A plain an simple input select.

We will use the following options:

```js
const selectOptions = [
  { value: { id: 1, text: "WORKER" }, text: "I'm a worker" },
  { value: { id: 2, text: "FREELANCE" }, text: "I'm a freelance" },
  { value: { id: 3, text: "COMPANY" }, text: "I'm a company" },
  { value: { id: 4, text: "OTHER" }, text: "None of the above" }
]
```

<Card>
    <Form>
        <InputSelect name="select" label="Select an option" placeholder="Select a job..." required :options="selectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect name="select" label="Select an option" placeholder="Select a job..." required :options="selectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Props

- `options`. Changes selectable options.

<div class="mb-xs-8" />

- `optionValueKey` (default `value`) and `optionDefaultKey` (default `text`). Changes which values from `options` will pick-up.

<div class="mb-xs-8" />

- `allowClear` (default `false`): allows for clearing selected value with a top button.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            required
            allowClear
            :options="selectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            required
            allowClear
            :options="selectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `allowEmpty` (default `false`): allow empty selection. Similar to `required`, but `allowEmpty` has priority.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            allowEmpty
            :options="selectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            allowEmpty
            :options="selectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `readOnly` (default `false`): if `value` is read-only and input select is not selectable.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            readOnly
            :options="selectOptions"
            :initialValue="selectOptions[0].value" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            readOnly
            :options="selectOptions"
            :initialValue="selectOptions[0].value" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `resetValueOnOptionsChange` (default `false`): wether to reset selected value if selectable options prop changes.

<div class="mb-xs-8" />

- `allowSearch` (default `false`): if allow search in selectable options.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            allowSearch
            :options="selectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            allowSearch
            :options="selectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `allowAddOptions` (default `false`): if allow to add a new selectable option from search input.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            allowSearch
            allowAddOptions
            :options="selectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            allowSearch
            allowAddOptions
            :options="selectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `clearWhenDisable` (default `false`): wether to reset selected value if disabled prop changes to enabled.

<div class="mb-xs-8" />

- `clearWhenOptionsChange` (default `false`): wether to reset selected value if selectable options prop changes.

<div class="mb-xs-8" />

- `placeholder` (default `null`): text shown when no selected value.

<Card>
    <Form>
        <InputSelect name="select" label="Select an option" placeholder="Select your current job status..." required :options="selectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect name="select" label="Select an option" placeholder="Select your current job status..." required :options="selectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `mountOptionsOutside` (default `false`): wether to mount selectable values drop-down outside or inside the component. Inside should be faster, but outside can prevent some glitches when input is on a modal or inside a box with `overflow: hidden;`.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            mountOptionsOutside
            :options="selectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputSelect
            name="select"
            label="Select an option"
            placeholder="Select a job..."
            mountOptionsOutside
            :options="selectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />