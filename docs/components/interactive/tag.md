<script setup>
import Card from '../../../lib/components/info/Card.vue'
import Tag from '../../../lib/components/interactive/Tag.vue'
</script>

# Tag

Component `Tag`.

<Card>
  <Tag text="Orange" />
</Card>

```html
<Card>
  <Tag text="Orange" />
</Card>
```

<div class="mb-xs-8" />

## Props

- `icon` icon & `iconVariant` icon variant, in case you have included more `Font Awesome` variants. `Vuersatile Components` only comes with `solid` bundled. (Default `solid`), (`solid`, `regular`, `light`, `thin`, `duotone`, `brands`).

<Card>
  <Tag text="Orange" icon="paint-roller" />
</Card>

```html
<Card>
  <Tag text="Orange" icon="paint-roller" />
</Card>
```

<div class="mb-xs-8" />

- `color` tag color. (Default `greyscale`), (`amber`, `orange`, `red`, `pink`, `purple`, `blue`, `turquoise`, `green`, `lime`, `greyscale`).

<Card>
  <Tag text="Orange" icon="paint-roller" color="orange" />
</Card>

```html
<Card>
  <Tag text="Orange" icon="paint-roller" color="orange" />
</Card>
```

<div class="mb-xs-8" />

- `size` tag size. (Default `s`), (`s`, `m`).

<Card>
  <Tag text="Orange" icon="paint-roller" color="orange" size="m" />
</Card>

```html
<Card>
  <Tag text="Orange" icon="paint-roller" color="orange" size="m" />
</Card>
```

<div class="mb-xs-8" />

- `showCloseButton` if `Tag` is closable. Emits a `@close` event. Check console for more information.

<script>
const colors = ['amber', 'orange', 'red', 'pink', 'purple', 'blue', 'turquoise', 'green', 'lime', 'greyscale']

const closeColor = (colorToRemove) => {
    console.log(colorToRemove)
}
</script>

<Card>
    <Tag v-for="color in colors" :key="color" class="mr-xs-2 mb-xs-2" :text="color" icon="paint-roller" :color="color" size="m" showCloseButton @close="closeColor(color)" />
</Card>

```js
const colors = ['amber', 'orange', 'red', 'pink', 'purple', 'blue', 'turquoise', 'green', 'lime', 'greyscale']

const closeColor = (colorToRemove) => {
    console.log(colorToRemove)
}
```

```html
<Card>
    <Tag v-for="color in colors" :key="color" class="mr-xs-2 mb-xs-2" :text="color" icon="paint-roller" :color="color" size="m" showCloseButton @close="closeColor(color)" />
</Card>
```

<div class="mb-xs-8" />
