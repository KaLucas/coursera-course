(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;

  buy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  buy.checkOff = function(itemIndex){
  	ShoppingListCheckOffService.checkOff(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
		{
			name: 'cookie',
			quantity: '10'
		},
		{
			name: 'cheese',
			quantity: '20'
		},
		{
			name: 'beer',
			quantity: '30'
		},
		{
			name: 'chocolate',
			quantity: '40'
		},
		{
			name: 'milk',
			quantity: '50'
		}
	];

	var boughtItems = [];

	service.getToBuyItems = function(){
		return toBuyItems;
	};

	service.getBoughtItems = function(){
		return boughtItems;
	};

	service.checkOff = function(itemIndex){
	  var boughtItem = toBuyItems.splice(itemIndex, 1)[0];
    boughtItems.push(boughtItem);
	};
}

})();