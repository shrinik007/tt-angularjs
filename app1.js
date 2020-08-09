(function () {
  'use strict'
  angular.module('NameCalc',[])
  .controller('NameCalcController', function ($scope) {
$scope.name = "";
$scope.totalValue=0;

$scope.displayNumeric = function () {
  var totalNameValue = calculateNumericForString($scope.name);
  $scope.totalValue = totalNameValue;
};

function calculateNumericForString(string) {
  var totalStringVal = 0;
  for(var i=0; i<string.length;i++) {
    totalStringVal = string.charCodeAt(i);
  }
  return totalStringVal;

};
  });
})();
