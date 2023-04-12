[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/brugarolas)

# Vuersatile Components

## Installation

We can install `Vuersatile Components` with NPM:

```bash
npm install --save vuersatile-components
```


## Usage

First, we need to configure our library. `Vuersatile Components` comes with `vue-i18n` pre-bundled, so we have to pass its options as param to our library configurator. Here us one example of app configuration:

```js
import 'vuersatile-components/index.css'
import { VuersatileInit } from 'vuersatile-components'

import messages from './messages.json';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

VuersatileInit(app, {
    locale: 'en', // set locale
    messages: {
        en: messages // set locale messages
    }
});

app.use(createPinia())
app.use(router)

app.mount('#app')
```

Now we can use our components wherever we want: 

```js
import {
  Card,
  Tooltip,
  BooleanIcon,
  LockedIcon,
  TooltipInfo,
  Form,
  InputText,
  InputNumber,
  InputPassword,
  ToggleSwitch,
  SegmentedControl,
  Checkbox,
  InputTextarea,
  RadioButtonGroup,
  InputSelect,
  InputMultiSelect
} from 'vuersatile-components';
```

## i18n default messages

```json
{
    "FORM": {
        "ERROR": {
            "EMAIL": "Invalid email",
            "MAX_VALUE": "You must enter a number least than indicated",
            "MIN_CURRENT_DATE": "You must enter a date greater than today",
            "MIN_VALUE": "You must enter a number greater than indicated",
            "NOT_DATE": "Field must be valid date",
            "NOT_EMPTY": "Field can't be empty",
            "NOT_EMPTY_NUMBER": "You must enter a number",
            "NOT_EQUAL": "This information does not match",
            "NOT_INT": "Field must be integer",
            "NOT_NUMBER": "Field must be number",
            "NOT_VALID_TIME": "Field is not a valid time",
            "PHONE": "Invalid phone number",
            "MANDATORY_LONG": "Field is mandatory",
            "NOT_MAX_LENGTH": "Invalid max length",
            "NOT_MIN_LENGTH": "Invalid min length"
        }
    },
    "GENERIC": {
        "CLEAR": "Clear",
        "CONTINUE": "Continue",
        "ADD": "Add",
        "NO_RESULTS": "No results",
        "NO": "No",
        "YES": "Yes"
    }
}
```
