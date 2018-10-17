import './css-reset.css';
import './styles.css';
import 'angular';
import currencyService from './dailyCurrencyService';
import currencyCard from './currency-card';
import mainController from './mainController';

const mainModuleName = 'converterModule';
angular
    .module(mainModuleName, [])
    .controller('mainController', mainController)
    .service('currencyService', currencyService);

currencyCard(mainModuleName);