(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
	 	$scope.lunch = "";
		$scope.message = "";
		$scope.border = "";

		$scope.checkLunch = function() {

			var data = $scope.lunch.split(',');
			if($scope.lunch.length == 0) {
				$scope.message = "Please enter data first";
				$scope.border = "borderred";
				$scope.textcolor = "red";
				return;
			}

			if(data.length <= 3) {
				$scope.message = "Enjoy!";
				$scope.border = "bordergreen";
				$scope.textcolor = "green";
			}

			else {
				$scope.message = "Too much!";
				$scope.border = "bordergreen";
				$scope.textcolor = "green";
			}
		}
	};

})();