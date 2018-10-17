import controller from './currency-card.controller';
import template from './currency-card.html';
import './currency-card-styles.css';

const bindings = 
{
    toExchangeValue: '=',
    baseExchangeValue: '=',
    exchangeCode: '=',
    baseCode: '<',
};

export default function (moduleName) {
    angular.module(moduleName)
    .component('currencyCard', {template, controller, bindings, controllerAs: 'con'});
}