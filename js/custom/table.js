var app = angular.module("nielsenLostBasketApp", []);
app.controller("tableController", function($scope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.personalDetails = data;
	});
});