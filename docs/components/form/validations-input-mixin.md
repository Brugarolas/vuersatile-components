<script setup>
import InputText from '../../../lib/components/form/InputText.vue'
import InputPassword from '../../../lib/components/form/InputPassword.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# ValidationsInputMixin

`RequiredInputMixin` implements `BasicInputMixin` and extends it to add complex validations to complex formulary components. Check [`Validations Plugin`](/plugins/validations) to learn more about what types of validations are included and how to register new ones.

<div class="mb-xs-8" />

## Props

- `validations`: array of validations. Type `Array`, default `[]`.

<Card>
    <Form>
        <div class="row">
            <div class="col-12 col-md-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-12 col-md-6 mb-xs-4">
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
            <div class="col-12 col-md-6 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    :validations="['not-empty', 'email']"
                />
            </div>
            <div class="col-12 col-md-6 mb-xs-4">
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

<div class="mb-xs-8" />
