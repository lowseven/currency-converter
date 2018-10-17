import { data, countryNames } from './dummyModel';
const isDev = true;

function service($http) 
{
    const url = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
    // const config = 
    // {
    //     url,
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/xhtml+xml,application/xml',
    //         'Content-Type': 'text/xml',
    //         'Access-Control-Allow-Credentials': true,
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Request-Methods': 'GET,HEAD,POST,OPTIONS,TRACE',
    //         'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
    //     },
    // };

    // this.getCurrencies = async () => await $http.get(url)
    
    let results = null;
    if (isDev)
    {
        results = data.map((e) => {
             const result = countryNames.filter(i => i.code === e.currency).pop();
             result.value = e.rate;
             return result;
            });
    }

    results.push({ countryName: 'Europen Euro', code: 'EUR', value: 1 });
    this.getCurrencies = () => results;
}


export default ['$http', service];