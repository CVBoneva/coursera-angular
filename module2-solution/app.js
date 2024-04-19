(
  function()
  {
    'use strict';

    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope)
    {

      const strEmptyField = "Please enter data first";
      const strEnjoy = "Enjoy!";
      const strTooMuch = "Too much!";
      const strNotValid = "Please enter valid data";
      const fieldColors = {msgOk: "greenValidation", msgNotOk: "redValidation", msgDefault: "defaultValidation"};
      $scope.classColors = fieldColors.msgDefault;

      var initString = function()
      {
        return "";
      }

      $scope.clearMessages = function()
      {
        $scope.errorMsg = initString();
        $scope.resultMsg = initString();
        $scope.classColors = fieldColors.msgDefault;
      }

      $scope.lunchItems = initString();
      $scope.clearMessages();

      $scope.checkIfTooMuch = function()
      {
        
        $scope.clearMessages();

        if (!$scope.checkInput ())
        {
          return true;
        }

        $scope.resultMsg = $scope.countItems();
        return true;
      }

      $scope.checkInput = function()
      {
        if ($scope.lunchItems == "")
        {
          $scope.errorMsg = strEmptyField;
          $scope.classColors = fieldColors.msgNotOk;
          return false;
        }
        return true;
      }

      $scope.countItems = function()
      {
        var str = $scope.lunchItems;
        var arr = str.split(',');

        function isEmpty(value) { 
          console.log(value);
          return !(value == "" || value == null || value == undefined); 
        } 

        var arr1 = arr.filter(isEmpty);

        
        if (arr1.length == 0)
        {
          $scope.errorMsg = strNotValid;
          $scope.classColors = fieldColors.msgNotOk;
          return '';
        }
        else if (arr1.length <= 3)
        {
          $scope.classColors = fieldColors.msgOk;
          return strEnjoy;
        }
        else
        {
          $scope.classColors = fieldColors.msgNotOk;
          return strTooMuch;
        }
      }
     
    }
        
  }
)();