import '@/scss/main.scss';

// I18N
import { createI18n } from 'vue-i18n'

// Validations
import Validations from './plugins/validations.js';

// v-click-outside
import clickOutside from './directives/clickOutside.js'

const VuersatileInit = (app, i18nOptions = {}) => {
    console.log(i18nOptions)
    const i18n = createI18n(i18nOptions)
    app.use(i18n);

    app.use(Validations);

    app.directive('clickOutside', clickOutside)
}

export default VuersatileInit;