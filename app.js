(function () {
'use strict';

  angular.module('myFirstApp',[])

  .controller ('MyFirstController', function($scope){
    $scope.name="NIkhil";
    $scope.sayHello= function(){
      return "Hello Niks";
    }

  });

})();
