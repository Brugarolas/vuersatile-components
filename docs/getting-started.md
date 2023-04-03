# Getting started

## Installation

We can install `Vuersatile Components` with NPM:

```bash
npm install --save vuersatile-components
```


## Usage

First, we need to configure our library. `Vuersatile Components` comes with `vue-i18n` pre-bundled, so we have to pass its options as param to our library configurator. Here us one example of app configuration:

```js{1-2,14-20}
import 'vuersatile-components/index.css'
import { AppInit } from 'vuersatile-components'

import messages from './messages.json';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

AppInit(app, {
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    en: {
        messages // set locale messages
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