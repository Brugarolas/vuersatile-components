<script setup>
import InputPassword from '../../../lib/components/form/InputPassword.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# InputPassword

Not so plain and not so simple input password.

Has the same API than [`InputText`](/components/form/input-text).

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputPassword
                    name="password"
                    label="Password"
                    placeholder="Enter a secure password..."
                    :validations="['not-empty', { name: 'min-length', params: [8] }]"
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
                <InputPassword
                    name="password"
                    label="Password"
                    placeholder="Enter a secure password..."
                    :validations="['not-empty', { name: 'min-length', params: [8] }]"
                />
            </div>
        </div>
    </Form>
</Card>
```
