const onInit = function onInit()
{
    this.toExchangeValue = this.toExchangeValue || 0.0;
    this.baseExchangeValue = this.baseExchangeValue || 0.0;
    this.resultCurr = 0;
    
    this.convertBaseExchange = function convertBaseExchange () {
        const data = this.currencies.filter(e => e.code === this.exchangeCode).pop();
        const exchangeValue = parseFloat(data.value.toFixed(2));
        const baseValue = parseFloat(this.currencies.filter(e => e.code === this.baseCode).pop().value.toFixed(2));

        this.resultCurr = exchangeValue / baseValue;
        this.countryName = data.countryName;

        // this.toExchangeValue = parseFloat((this.baseExchangeValue * this.resultCurr).toFixed(2));
    }

    this.updateInput = () => this.toExchangeValue = parseFloat((this.baseExchangeValue * this.resultCurr).toFixed(2));
    this.convertBaseExchange();
}

const controller = function controller(currencyService)
{
    this.currencies = currencyService.getCurrencies();
    this.$onInit = onInit;
    this.$onChanges = (e) => {
       if(this.convertBaseExchange !== undefined && this.updateInput!== undefined)
       {
           this.convertBaseExchange();
           this.updateInput();
       }
    }
}


export default ['currencyService', controller];
