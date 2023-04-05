<script setup>
import InputNumber from '../../../lib/components/form/InputNumber.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

<style>
input[type="number"] {
  -moz-appearance: number-input !important;
}
</style>

# InputNumber

Not so plain and not so simple input number.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputNumber
                    name="age"
                    label="Age"
                    placeholder="You must be over 18..."
                    icon="calendar-days"
                    :validations="['not-empty', { name: 'min-value', params: [18] }]"
                />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputNumber
                    name="age"
                    label="Age"
                    placeholder="You must be over 18..."
                    icon="calendar-days"
                    :validations="['not-empty', { name: 'min-value', params: [18] }]"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

## Props

- `placeholder`: text shown when nothing is written.

<div class="mb-xs-8" />

- `icon`: Icon which will show at the end of the input.

<div class="mb-xs-8" />

- `iconVariant`: in case you are using **Font Awesome**, which icon variant will be used (like `fa-solid` or `fa-regular`).

<div class="mb-xs-8" />

- `step`, `max` and `min`: input number's value step, max value and min value.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputNumber
                    name="age"
                    label="Age"
                    placeholder="You must be over 18..."
                    :min="0"
                    :max="50"
                    :step="1"
                    :validations="['not-empty', { name: 'min-value', params: [18] }]"
                />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputNumber
                    name="age"
                    label="Age"
                    placeholder="You must be over 18..."
                    :min="0"
                    :max="50"
                    :step="1"
                    :validations="['not-empty', { name: 'min-value', params: [18] }]"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />
