<script setup>
import SegmentedControl from '../../../lib/components/form/SegmentedControl.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'

const segmentedControlDateOptions = [
  { value: { id: 1, text: 'DAILY' }, text: 'Daily' },
  { value: { id: 2, text: 'WEEKLY' }, text: 'Weekly' },
  { value: { id: 3, text: 'MONTHLY' }, text: 'Monthly' }
];
</script>

<style>
.vp-doc .segmented-control__option-item + .segmented-control__option-item {
    margin-top: 0;
}
</style>

# SegmentedControl

Similar to [`InputSelect`](/components/form/input-select), it manages a multiple states but with a different style.

<Card>
    <Form>
        <SegmentedControl name="periodicity" label="Select payday" :options="segmentedControlDateOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <SegmentedControl name="periodicity" label="Select payday" :options="segmentedControlDateOptions" />
    </Form>
</Card>
```

## Props

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

It will use the following options:

```js
const segmentedControlDateOptions = [
  { value: { id: 1, text: 'DAILY' }, text: 'Daily' },
  { value: { id: 2, text: 'WEEKLY' }, text: 'Weekly' },
  { value: { id: 3, text: 'MONTHLY' }, text: 'Monthly' }
];
```

- `optionValueKey` (default `value`) and `optionDefaultKey` (default `text`). Changes which values from `options` will pick-up.

<div class="mb-xs-8" />

- `allowUnselected`: wether to allow unselected value.

<Card>
    <Form>
        <SegmentedControl name="periodicity" label="Select payday" allowUnselected :options="segmentedControlDateOptions" />
    </Form>
</Card>

```html
<Card>
    <Form>
        <SegmentedControl name="periodicity" label="Select payday" allowUnselected :options="segmentedControlDateOptions" />
    </Form>
</Card>
```
