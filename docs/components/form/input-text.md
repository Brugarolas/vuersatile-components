<script setup>
import Checkbox from '../../../lib/components/form/Checkbox.vue'
import InputText from '../../../lib/components/form/InputText.vue'
import Form from '../../../lib/components/form/Form.vue'
import Card from '../../../lib/components/info/Card.vue'
</script>

# InputText

Not so plain and not so simple input text.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
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
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
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

- `autocomplete`: The `autocomplete` property specifies whether or not an input field should have autocomplete enabled. Autocomplete allows the browser to predict the value. When a user starts to type in a field, the browser should display options to fill in the field, based on earlier typed values.

<div class="mb-xs-8" />

- `pattern`: The pattern attribute specifies a regular expression that the `<input>` element's value is checked against on form submission.

<div class="mb-xs-8" />

- `icon`: Icon which will show at the end of the input.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
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
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `iconVariant`: in case you are using **Font Awesome**, which icon variant will be used (like `fa-solid` or `fa-regular`).

- `customError`: in case we want to use our own error instead of **Vuersatile** validation errors.

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
                    initialValue="hacked.email@unsafe-company.com"
                    customError="This email is not considered safe"
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
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    :validations="['not-empty', 'email']"
                    initialValue="hacked.email@unsafe-company.com"
                    customError="This email is not considered safe"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `inputType`: HTML input type (`text`, `tel`, `email`, `number`).

<div class="mb-xs-8" />

- `customType`: custom type for input (`null` or `datetext`).

<div class="mb-xs-8" />

- `readOnly`: if input is read-only or not.

<Card>
    <Form>
        <div class="row">
            <div class="col-12">
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    readOnly
                    initialValue="safe.email@google.com"
                    :validations="['not-empty', 'email']"
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
                <InputText
                    name="email"
                    label="E-mail"
                    placeholder="Enter your e-mail..."
                    icon="at"
                    inputType="email"
                    readOnly
                    initialValue="safe.email@google.com"
                    :validations="['not-empty', 'email']"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />
