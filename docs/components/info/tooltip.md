<script setup>
import Checkbox from '../../../lib/components/form/Checkbox.vue'
import Card from '../../../lib/components/info/Card.vue'
import Icon from '../../../lib/components/info/Icon.vue'
import Tooltip from '../../../lib/components/info/Tooltip.vue'
</script>

# Tooltip

Component `Tooltip`.

<Card>
    <Tooltip text="Required checkbox" position="top">
        <Checkbox name="conditions" label="I accept all the terms and conditions" />
    </Tooltip>
</Card>

```html
<Card>
    <Tooltip text="Required checkbox" position="top">
        <Checkbox name="conditions" label="I accept all the terms and conditions" />
    </Tooltip>
</Card>
```

<div class="mb-xs-8" />

## Props

- `title`.

<Card>
    <Tooltip title="Image" text="An image icon" position="top">
        <Icon icon="image" size="m" />
    </Tooltip>
</Card>

```html
<Card>
    <Tooltip title="Image" text="An image icon" position="top">
        <Icon icon="image" size="m" />
    </Tooltip>
</Card>
```

<div class="mb-xs-8" />

- `text`.

<Card>
    <Tooltip title="Image" text="An image icon" position="top">
        <Icon icon="image" size="m" />
    </Tooltip>
</Card>

```html
<Card>
    <Tooltip title="Image" text="An image icon" position="top">
        <Icon icon="image" size="m" />
    </Tooltip>
</Card>
```

<div class="mb-xs-8" />

- `image`.

<Card>
    <Tooltip title="Music" img="https://i.blogs.es/89ae35/apple-music-note/1366_2000.webp" position="top">
        <Icon icon="music" size="m" />
    </Tooltip>
</Card>

```html
<Card>
    <Tooltip title="Music" img="https://i.blogs.es/89ae35/apple-music-note/1366_2000.webp" position="top">
        <Icon icon="imagmusice" size="m" />
    </Tooltip>
</Card>
```

<div class="mb-xs-8" />

- `position` (default `top`), (`left`, `top`, `right`, `bottom`)

<Card>
    <Tooltip text="Required checkbox" position="right">
        <Checkbox name="conditions" label="I accept all the terms and conditions" />
    </Tooltip>
</Card>

```html
<Card>
    <Tooltip text="Required checkbox" position="right">
        <Checkbox name="conditions" label="I accept all the terms and conditions" />
    </Tooltip>
</Card>
```

<div class="mb-xs-8" />

- `showTooltip`.

<Card>
    <Tooltip text="Required checkbox" :showTooltip="false" position="top">
        <Checkbox name="conditions" label="I accept all the terms and conditions" />
    </Tooltip>
</Card>

```html
<Card>
    <Tooltip text="Required checkbox" :showTooltip="false" position="top">
        <Checkbox name="conditions" label="I accept all the terms and conditions" />
    </Tooltip>
</Card>
```

<div class="mb-xs-8" />

- `openOnClick`: keeps showing icon if we click, not only on hover.

<Card>
    <Tooltip title="Image" text="An image icon" :openOnClick="true" position="top">
        <Icon icon="image" size="m" />
    </Tooltip>
</Card>

```html
<Card>
    <Tooltip title="Image" text="An image icon" :openOnClick="true" position="top">
        <Icon icon="image" size="m" />
    </Tooltip>
</Card>
```

<div class="mb-xs-8" />
