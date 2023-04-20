<script setup>
import InputDateRange from '../../../lib/components/form/InputDateRange.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# InputDateRange

Input for selecting a date range.

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputDateRange name="date" label="Select a date range" placeholder="Select date range" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputDateRange name="date" label="Select a date range" placeholder="Select date range" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Props

- `initialValue` and `initialValueEnd`.

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputDateRange name="date" label="Select a date" placeholder="Select date" :initialValue="new Date()" :initialValueEnd="new Date()" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputDateRange name="date" label="Select a date" placeholder="Select date" :initialValue="new Date()" :initialValueEnd="new Date()" />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />
