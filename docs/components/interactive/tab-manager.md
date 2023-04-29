<script setup>
import Card from '../../../lib/components/info/Card.vue'
import TabManager from '../../../lib/components/interactive/TabManager.vue'
import InputText from '../../../lib/components/form/InputText.vue'
import InputNumber from '../../../lib/components/form/InputNumber.vue'

const tabs = [
  { name: 'money', description: 'Yearly salary' },
  { name: 'personal', description: 'Personal information' }
]

const moneyValidations = ['not-empty', { name: 'min-value', params: [25000] }]
</script>

<style>
.vp-doc .tab-manager__item {
    margin-top: 0;
}
</style>

# TabManager

A simple `TabManager` component.

We will be using the following options:

```js
const tabs = [
  { name: 'money', description: 'Yearly salary' },
  { name: 'personal', description: 'Personal information' }
]
```

<div class="mb-xs-8" />

<Card>
    <TabManager :tabs="tabs" :defaultActive="0">
        <template v-slot:money>
            <InputNumber
                class="mb-xs-4"
                name="money"
                label="Yearly salary"
                placeholder="Enter your salary in € gross per year"
                :validations="moneyValidations"
            />
        </template>
        <template v-slot:personal>
            <InputText class="mb-xs-4" name="name" label="Name" :validations="['not-empty']" />
            <InputText class="mb-xs-4" name="lastName" label="Last name" :validations="['not-empty']" />
        </template>
    </TabManager>
</Card>

```html
<Card>
    <TabManager :tabs="tabs" :defaultActive="0">
        <template v-slot:money>
            <InputNumber
                class="mb-xs-4"
                name="money"
                label="Yearly salary"
                placeholder="Enter your salary in € gross per year"
                :validations="moneyValidations"
            />
        </template>
        <template v-slot:personal>
            <InputText class="mb-xs-4" name="name" label="Name" :validations="['not-empty']" />
            <InputText class="mb-xs-4" name="lastName" label="Last name" :validations="['not-empty']" />
        </template>
    </TabManager>
</Card>
```
