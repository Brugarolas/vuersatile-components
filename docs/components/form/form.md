<script setup>
import InputText from '../../../lib/components/form/InputText.vue'
import InputPassword from '../../../lib/components/form/InputPassword.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# Form

<Card>
    <Form>
        <div class="row">
            <div class="col-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-6 mb-xs-4">
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
            <div class="col-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-6 mb-xs-4">
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