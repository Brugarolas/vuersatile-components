import '@/scss/main.scss';

// I18N
import { createI18n } from 'vue-i18n'

// Vue Dates & Validations
import dates from './plugins/dates';
import Validations from './plugins/validations';

// v-click-outside
import clickOutside from './directives/clickOutside.js'

const AppInit = (app, i18nOptions = {}) => {
    const i18n = createI18n(i18nOptions)
    app.use(i18n);

    app.use(dates);
    app.use(Validations);

    app.directive('clickOutside', clickOutside)
}

export default AppInit;