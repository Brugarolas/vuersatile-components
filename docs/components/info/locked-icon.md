<script setup>
import LockedIcon from '../../../lib/components/info/LockedIcon.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# LockedIcon

Component `LockedIcon`.

<Card>
  <LockedIcon text="You don't have permissions to do this" />
</Card>

```html
<Card>
  <LockedIcon text="You don't have permissions to do this" />
</Card>
```

<div class="mb-xs-8" />

## Props

- `locked`: to show the icon or not.

<div class="mb-xs-8" />

- `text`.

<Card>
  <LockedIcon text="You don't have permissions to do this" />
</Card>

```html
<Card>
  <LockedIcon text="You don't have permissions to do this" />
</Card>
```

<div class="mb-xs-8" />

- `position`: icon position (default `top`), (`left`, `top`, `right`, `bottom`).

<Card>
  <LockedIcon text="You don't have permissions to do this" position="right" />
</Card>

```html
<Card>
  <LockedIcon text="You don't have permissions to do this" position="right" />
</Card>
```

<div class="mb-xs-8" />
