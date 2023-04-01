<script setup>
import Checkbox from '../../../lib/components/form/Checkbox.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

<style>
body {
    overflow-x: scroll !important;
    overflow-y: scroll !important;
}
</style>

# Checkbox

Component `Checkbox`. Simple and elegant.

<Card>
  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>

```html
<Card>
  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>
```

<div class="mb-xs-8" />

## Props

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

- `initialValue`: Initial value of the component. Type `Boolean`, default value `false`.

<Card>
  <Checkbox name="conditions" label="I accept all the terms and conditions" initialValue />
</Card>

```html
<Card>
  <Checkbox name="conditions" label="I accept all the terms and conditions" initialValue />
</Card>
```

<div class="mb-xs-8" />


- `initialValue`: Wether if the checkbox is required or not when it is inside a [`Form`](/components/form/form). Type `Boolean`, default value `false`.

<Card>
  <Form>
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>

```html
<Card>
  <Form>
    <Checkbox name="conditions" label="I accept all the terms and conditions" required />
  </Form>
</Card>
```

<div class="mb-xs-8" />