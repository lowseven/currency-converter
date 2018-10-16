import './css-reset.css';
import './styles.css';
import 'angular';
import currencyCard from './currency-card';

const mainModuleName = 'converter';
angular.module(mainModuleName, []);

currencyCard(mainModuleName);
