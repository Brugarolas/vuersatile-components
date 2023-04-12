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
                    :autoResize="false"
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
                    :autoResize="false"
                    :validations="['not-empty']"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

# Props

- `autoResize` (default `true`): if auto-resize input when writing.

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

<div class="mb-xs-8" />

- `allowResize` (default `false`): if allow to manually resize the input (vertically only). Needs `:autoResize="false"` to work.

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputTextarea
                    name="comments"
                    label="CV summary"
                    placeholder="Write here the summary of your employment history"
                    allowResize
                    :autoResize="false"
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
                    allowResize
                    :autoResize="false"
                    :validations="['not-empty']"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />

- `rows` (default `2`): rows by default.

<Card>
    <Form>
        <div class="row">
            <div class="col-12 mb-xs-4">
                <InputTextarea
                    name="comments"
                    label="CV summary"
                    placeholder="Write here the summary of your employment history"
                    :rows="4"
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
                    :rows="4"
                    :validations="['not-empty']"
                />
            </div>
        </div>
    </Form>
</Card>
```

<div class="mb-xs-8" />