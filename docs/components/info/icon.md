<script setup>
import Icon from '../../../lib/components/info/Icon.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# Icon

Component `Icon` for `Font Awesome 6`. Plain and simple.

<Card>
  <Icon icon="house" />
</Card>

```html
<Card>
  <Icon icon="house" />
</Card>
```

<div class="mb-xs-8" />

# Props

- `icon`: icon name. Yo don't need to specify `fa-` or `-solid`.

<Card>
  <Icon icon="rocket-launch" />
</Card>

```html
<Card>
  <Icon icon="rocket-launch" />
</Card>
```

<div class="mb-xs-8" />

- `colorType`: icon color (`null`, `primary`, `brand`, `negative`, `greyscale`, `success`, `danger`, `warning`, `info`, `disabled`).

<Card>
  <Icon icon="music" colorType="warning" />
</Card>

```html
<Card>
  <Icon icon="music" colorType="warning" />
</Card>
```

<div class="mb-xs-8" />

- `animation`: icon animation (`null`, `beat`, `beat-fade`, `bounce`, `fade`, `flip`, `shake`, `spin`, `spin-reverse`, `spin-pulse`).

<Card>
  <Icon icon="music" animation="bounce" />
</Card>

```html
<Card>
  <Icon icon="music" animation="bounce" />
</Card>
```

<div class="mb-xs-8" />

- `rotation`: icon rotation (`null`, `rotate-90`, `rotate-180`, `rotate-270`, `flip-horizontal`, `flip-vertical`, `flip-both`).

<Card>
  <Icon icon="rocket-launch" rotation="flip-both" />
</Card>

```html
<Card>
  <Icon icon="rocket-launch" rotation="flip-both" />
</Card>
```

<div class="mb-xs-8" />

- `size`: icon size (default `s`), (`xs`, `s`, `m`, `l`).

<Card>
  <Icon icon="music" size="l" />
</Card>

```html
<Card>
  <Icon icon="music" size="l" />
</Card>
```

<div class="mb-xs-8" />

- `variant`: icon variant, in case you have included more `Font Awesome` variants. `Vuersaile Components` only comes with `solid` bundled. (Default `solid`), (`solid`, `regular`, `light`, `thin`, `duotone`, `brands`).

<Card>
  <Icon icon="rocket" variant="regular" size="l" />
</Card>

```html
<Card>
  <Icon icon="rocket" variant="regular" size="l" />
</Card>
```

<div class="mb-xs-8" />
