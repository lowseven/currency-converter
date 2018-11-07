const controller = function controller($scope)
{    
    $scope.baseChangeCode = 'EUR';
    $scope.toExchangeCode = 'GBP';

    $scope.baseExchangeValue = 0;
    $scope.toExchangeValue = 0;
}

export default ['$scope', controller];
