<script setup>
import InputMultiSelect from '../../../lib/components/form/InputMultiSelect.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'

const multiselectOptions = [
  { value: { id: 1, text: 'VUE' }, text: 'Vue.js' },
  { value: { id: 2, text: 'REACT' }, text: 'React' },
  { value: { id: 3, text: 'ANGULAR' }, text: 'Angular' },
  { value: { id: 4, text: 'EMBER' }, text: 'Ember' },
  { value: { id: 5, text: 'SVELTE' }, text: 'Svelte' },
  { value: { id: 6, text: 'AURELIA' }, text: 'Aurelia' },
  { value: { id: 7, text: 'LIT' }, text: 'Lit/Polymer' }
]
</script>

<style>
.vp-doc .input-multi-select__option-list {
    padding-left: 0 !important;
    margin: 0 !important;
}

.vp-doc .input-multi-select__error {
    height: auto !important;
    line-height: 1.2 !important;
    margin: 0 !important;
}
</style>

# InputMultiSelect

A more complex input multi-select.

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

We will use the following options:

```js
const multiselectOptions = [
  { value: { id: 1, text: 'VUE' }, text: 'Vue.js' },
  { value: { id: 2, text: 'REACT' }, text: 'React' },
  { value: { id: 3, text: 'ANGULAR' }, text: 'Angular' },
  { value: { id: 4, text: 'EMBER' }, text: 'Ember' },
  { value: { id: 5, text: 'SVELTE' }, text: 'Svelte' },
  { value: { id: 6, text: 'AURELIA' }, text: 'Aurelia' },
  { value: { id: 7, text: 'LIT' }, text: 'Lit/Polymer' }
]
```

<Card>
    <Form>
        <InputMultiSelect name="select" label="Select one or multiple options" placeholder="Favourites JavaScript frameworks..." required :options="multiselectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputMultiSelect name="select" label="Select one or multiple options" placeholder="Favourites JavaScript frameworks..." required :options="multiselectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Props

- `options`. Changes selectable options.

<div class="mb-xs-8" />

- `optionValueKey` (default `value`), `optionDefaultKey` (default `text`) and `optionDisabledKey` (default `disabled`). Changes which values from `options` will pick-up and which ones will be disabled.

<div class="mb-xs-8" />

- `allowClear` (default `false`): allows for clearing selected value with a top button.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputMultiSelect
            name="select"
            label="Select one or multiple options"
            placeholder="Favourites JavaScript frameworks..."
            required
            allowClear
            :options="multiselectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputMultiSelect
            name="select"
            label="Select one or multiple options"
            placeholder="Favourites JavaScript frameworks..."
            required
            allowClear
            :options="multiselectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `allowSearch` (default `false`): if allow search in selectable options.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputMultiSelect
            name="select"
            label="Select one or multiple options"
            placeholder="Favourites JavaScript frameworks..."
            allowSearch
            :options="multiselectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputMultiSelect
            name="select"
            label="Select one or multiple options"
            placeholder="Favourites JavaScript frameworks..."
            allowSearch
            :options="multiselectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `placeholder` (default `null`): text shown when no selected value.

<Card>
    <Form>
        <InputMultiSelect name="select" label="Select one or multiple options" placeholder="Select your favourites JavaScript frameworks..." required :options="multiselectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputMultiSelect name="select" label="Select one or multiple options" placeholder="Select your favourites JavaScript frameworks..." required :options="multiselectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `mountOptionsOutside` (default `false`): wether to mount selectable values drop-down outside or inside the component. Inside should be faster, but outside can prevent some glitches when input is on a modal or inside a box with `overflow: hidden;`.

<div class="mb-xs-4" />

<Card>
    <Form>
        <InputMultiSelect
            name="select"
            label="Select one or multiple options"
            placeholder="Favourites JavaScript frameworks..."
            mountOptionsOutside
            :options="multiselectOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <InputMultiSelect
            name="select"
            label="Select one or multiple options"
            placeholder="Favourites JavaScript frameworks..."
            mountOptionsOutside
            :options="multiselectOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Emits

- `changeField`. Custom change event.

<div class="mb-xs-8" />