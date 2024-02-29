(
  function()
  {
    'use strict';

    angular.module('MsgApp', [])
    
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope)
    {
      $scope.name = "BArakaka";
      $scope.whichImage = "1"

      $scope.sayMessage = function()
      {
        return $scope.name + ", you should say something no matter what";
      }

      $scope.showNextImage = function()
      {
        $scope.whichImage = $scope.whichImage == "1" ? "2" : "1"
      }
    }
        
  }
)();