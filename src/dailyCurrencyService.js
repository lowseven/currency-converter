import data from './eurofxref-daily.xml';
import countryNames from './countryNames';

//https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml

function service() 
{
    const currencies = data['gesmes:Envelope']['Cube'].pop()['Cube'].pop()['Cube'].map((e) => e['$']);
    const results = currencies.map((e) => {
        const result = countryNames.filter(i => i.code === e.currency).pop();
        result.value = parseFloat(e.rate);
        return result;
    });

    results.push({ countryName: 'Europen Euro', code: 'EUR', value: 1 });
    this.getCurrencies = () => results;
}

export default service;
