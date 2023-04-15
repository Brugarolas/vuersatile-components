<script setup>
import TooltipInfo from '../../../lib/components/info/TooltipInfo.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# TooltipInfo

Component `TooltipInfo`.

<Card>
  <TooltipInfo text="This is some useless information" />
</Card>

```html
<Card>
  <TooltipInfo text="This is some useless information" />
</Card>
```

<div class="mb-xs-8" />

## Props

- `text`.

<Card>
  <TooltipInfo text="This is some useless information" />
</Card>

```html
<Card>
  <TooltipInfo text="This is some useless information" />
</Card>
```

<div class="mb-xs-8" />

- `color` (default `null`), (`green`, `blue`, `white`, `black`, `red`, `gray`, `yellow`, `violet`, `darkblue`, `brown`, `silver-grey`, `orange`).

<Card>
  <TooltipInfo text="This is some useless information" color="green" />
</Card>

```html
<Card>
  <TooltipInfo text="This is some useless information" color="green" />
</Card>
```

<div class="mb-xs-8" />

- `position`: tooltip position.

<Card>
  <TooltipInfo text="This is some useless information" position="right" />
</Card>

```html
<Card>
  <TooltipInfo text="This is some useless information" position="right" />
</Card>
```

<div class="mb-xs-8" />
