// Vue Dates & Validations
import dates from './plugins/dates';
import Validations from './plugins/validations';

// Font Awesome
import './plugins/font-awesome.js'

const appInit = (app) => {
    app.use(dates);
    app.use(Validations);
}

export default appInit;