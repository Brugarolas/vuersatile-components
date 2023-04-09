<script setup>
import InputDate from '../../../lib/components/form/InputDate.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# InputDate

Input for selecting a date.

Implements mixins [`RequiredInputMixin`](/components/form/required-input-mixin) and [`BasicInputMixin`](/components/form/basic-input-mixin).

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputDate name="date" label="Select a date" placeholder="Select date" />
            </div>
        </div>
    </Form>
</Card>

```html
<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputDate name="date" label="Select a date" placeholder="Select date" />
            </div>
        </div>
    </Form>
</Card>
```