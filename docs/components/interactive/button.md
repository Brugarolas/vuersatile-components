<script setup>
import Card from '../../../lib/components/info/Card.vue'
import Button from '../../../lib/components/interactive/Button.vue'

const log = () => {
    console.log('button clicked')
}
</script>

# Button

Component `Button`. Check the console for more info.

<Card>
  <Button text="Button" @click="log" />
</Card>

```html
<Card>
  <Button text="Button" @click="log" />
</Card>
```

<div class="mb-xs-8" />

## Props

- `icon` icon & `iconVariant` icon variant, in case you have included more `Font Awesome` variants. `Vuersaile Components` only comes with `solid` bundled. (Default `solid`), (`solid`, `regular`, `light`, `thin`, `duotone`, `brands`).

<Card>
  <Button text="Button" icon="rocket-launch" iconVariant="regular" @click="log" />
</Card>

```html
<Card>
  <Button text="Button" icon="rocket-launch" iconVariant="regular" @click="log" />
</Card>
```

<div class="mb-xs-8" />

- `type` button type. (Default `primary`), (`primary`, `secondary`, `secondary-transparent`, `tertiary`, `tertiary-transparent`, `approve`, `reject`).

<Card>
  <Button text="Button" type="reject" @click="log" />
</Card>

```html
<Card>
  <Button text="Button" type="reject" @click="log" />
</Card>
```

<div class="mb-xs-8" />

- `size` button size. (Default `m`), (`xs`, `s`, `m`, `l`).

<Card>
  <Button text="Button" size="l" @click="log" />
</Card>

```html
<Card>
  <Button text="Button" size="l" @click="log" />
</Card>
```

<div class="mb-xs-8" />

- `disabled`. (Default `false`).

<Card>
  <Button text="Button" disabled @click="log" />
</Card>

```html
<Card>
  <Button text="Button" disabled @click="log" />
</Card>
```

<div class="mb-xs-8" />

- `loading`. (Default `false`).

<Card>
  <Button text="Button" loading @click="log" />
</Card>

```html
<Card>
  <Button text="Button" loading @click="log" />
</Card>
```

<div class="mb-xs-8" />

- `button` type of button. (Default `button`), (`button`, `submit`, `reset`).

<div class="mb-xs-8" />
