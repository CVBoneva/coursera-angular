(
  function()
  {
    'use strict';

    angular.module('ShoppingListCheckOff', [])    
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    ;

    function ShoppingListCheckOffService()
    {
      var service = this;
      var items = [];

      //array initialization
      var i = 0;
      while(i < 10)
      {
        var item = {idx: i, name:"product #" + i, quantity: 5+i, state:"0"};
        items.push(item);
        i++;
      }

      service.getItems = function()
      {
        return items;
      }

      service.checkState = function(state)
      {
        return items.find(x=>x.state == state) === undefined;
      }

      service.removeItem = function(index)
      {
        items.find(x=>x.idx == index).state = '1';
      }
    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService)
    {
      var list1 = this;
      list1.items = ShoppingListCheckOffService.getItems();

      list1.isEverythingBought = function()
      {
        return ShoppingListCheckOffService.checkState(0);
      }

      list1.removeItem = function(index)
      {
        return ShoppingListCheckOffService.removeItem(index);
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
      var list2 = this;
      list2.items = ShoppingListCheckOffService.getItems();

      list2.isNothingBought = function()
      {
        return ShoppingListCheckOffService.checkState(1);
      }
    }
 }
)();