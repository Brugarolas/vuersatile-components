<script setup>
import InputRange from '../../../lib/components/form/InputRange.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# InputRange

Input date range.

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" placeholder="Select range" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" placeholder="Select range" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Props

- `min` (default `0`) & `max` (default `100`): minimum and maximum selectable numbers.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" :min="-50" :max="50" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" :min="-50" :max="50" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `interval` (default `1`): minimum selectable unit.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" :interval="5" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" :interval="5" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `multiple` (default `true`): wether to select a range or a single unit.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" :multiple="false" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" :interval="false" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `minRange` (default `undefined`) & `maxRange` (default `undefined`): minimum and maximum selectable numbers difference.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" :minRange="5" :maxRange="25" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" :minRange="5" :maxRange="25" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `suffix` (default `null`): number suffix.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" suffix="€" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" suffix="€" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `placeholder` (default `null`): text when no range or number is selected.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" allowClear placeholder="Select range" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" allowClear placeholder="Select range" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `allowClear` (default `false`): wether to allow clear number when selected.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" allowClear placeholder="Select range" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" allowClear placeholder="Select range" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `allowZero` (default `false`): wether to allow zero as a valid selected number.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" allowZero />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" allowZero />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `tooltip` (default `always`): when to show the value tooltip (`always`, `active`, `focus`, `hover`, `none`).

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputRange name="range" label="Select range" tooltip="hover" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputRange name="range" label="Select range" tooltip="hover" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />
