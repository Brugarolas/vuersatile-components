// Vue Dates & Validations
import dates from './plugins/dates';
import Validations from './plugins/validations';

// v-click-outside
import clickOutside from './directives/clickOutside.js'

const appInit = (app) => {
    app.use(dates);
    app.use(Validations);

    app.directive('clickOutside', clickOutside)
}

export default appInit;