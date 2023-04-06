<script setup>
import InputTextarea from '../../../lib/components/form/InputTextarea.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# InputTextarea

Not so plain and not so simple input textarea.

Has the same API than [`InputText`](/components/form/input-text).

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputTextarea
                    name="comments"
                    label="CV summary"
                    placeholder="Write here the summary of your employment history"
                    :validations="['not-empty']"
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
                <InputTextarea
                    name="comments"
                    label="CV summary"
                    placeholder="Write here the summary of your employment history"
                    :validations="['not-empty']"
                />
            </div>
        </div>
    </Form>
</Card>
```
