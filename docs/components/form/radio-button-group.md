<script setup>
import RadioButtonGroup from '../../../lib/components/form/RadioButtonGroup.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'

const radioOptions = [
  { name: 'email', value: 'EMAIL', label: 'E-mail' },
  { name: 'phone', value: 'PHONE', label: 'Phone' }
]
</script>

# RadioButtonGroup

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

We will be using the following options:

```js
const radioOptions = [
  { name: 'email', value: 'EMAIL', label: 'E-mail' },
  { name: 'phone', value: 'PHONE', label: 'Phone' }
]
```

<Card>
    <Form>
        <RadioButtonGroup name="contact" label="Select preferred way of contact" :inputValues="radioOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <RadioButtonGroup name="contact" label="Select preferred way of contact" :inputValues="radioOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Props

- `horizontal`: puts radio buttons on horizontal instead of vertical.

<Card>
    <Form>
        <RadioButtonGroup name="contact" label="Select preferred way of contact" horizontal :inputValues="radioOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <RadioButtonGroup name="contact" label="Select preferred way of contact" horizontal :inputValues="radioOptions" />
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Emits

- `@input`. Native event emit.

<div class="mb-xs-8" />

- `@inputField`. Custom event emit.

<div class="mb-xs-8" />

- `@change`. Native change emit.

<div class="mb-xs-8" />

- `@changeField`. Custom change emit.

<div class="mb-xs-8" />
