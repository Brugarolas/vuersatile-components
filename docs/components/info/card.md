<script setup>
import Checkbox from '../../../lib/components/form/Checkbox.vue'
import Card from '../../../lib/components/info/Card.vue'
import Button from '../../../lib/components/interactive/Button.vue'
</script>

<style>
body {
    overflow-x: scroll !important;
    overflow-y: scroll !important;
}
</style>

# Card

Component `Card`. Simple and elegant.

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

- `title`

<Card title="Card Title"></Card>

```html
<Card title="Card Title"></Card>
```

<div class="mb-xs-8" />

- `subtitle`

<Card title="Card Title" subtitle="Card Subtitle"></Card>

```html
<Card title="Card Title" subtitle="Card Subtitle"></Card>
```

<div class="mb-xs-8" />

## Sots

- Main slot

<Card title="Card Title" subtitle="Card Subtitle">
  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>

```html
<Card title="Card Title" subtitle="Card Subtitle">
  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>
```

<div class="mb-xs-8" />

- `label`

<Card title="Card Title" subtitle="Card Subtitle">
  <template v-slot:label>
    <span>Card Label</span>
  </template>

  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>

```html
<Card title="Card Title" subtitle="Card Subtitle">
  <template v-slot:label>
    <span>Card Label</span>
  </template>

  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>
```

<div class="mb-xs-8" />

- `actions`

<Card title="Card Title" subtitle="Card Subtitle">
  <template v-slot:label>
    <span>Card Label</span>
  </template>

  <template v-slot:actions>
    <Button text="Accept" />
  </template>

  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>

```html
<Card title="Card Title" subtitle="Card Subtitle">
  <template v-slot:label>
    <span>Card Label</span>
  </template>

  <template v-slot:actions>
    <Button text="Accept" />
  </template>

  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>
```

<div class="mb-xs-8" />

- `no-body`

<Card title="Card Title" subtitle="Card Subtitle">
  <template v-slot:label>
    <span>Card Label</span>
  </template>

  <template v-slot:actions>
    <Button text="Accept" />
  </template>

  <template v-slot:no-body>
    <div class="ml-xs-4 mt-xs-4 mb-xs-4">Card No-Body</div>
  </template>

  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>

```html
<Card title="Card Title" subtitle="Card Subtitle">
  <template v-slot:label>
    <span>Card Label</span>
  </template>

  <template v-slot:actions>
    <Button text="Accept" />
  </template>

  <template v-slot:no-body>
    <div class="ml-xs-4 mt-xs-4 mb-xs-4">Card No-Body</div>
  </template>

  <Checkbox name="conditions" label="I accept all the terms and conditions" />
</Card>
```

<div class="mb-xs-8" />