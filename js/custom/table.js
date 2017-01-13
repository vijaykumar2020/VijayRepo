var app = angular.module("nielsenLostBasketApp", []);
app.controller("tableController", function($scope, $http) {
	$http.get('data.json').success(
			function(data) {
				$scope.personalDetails = data;
				$scope.categorySelects = [ 'Category A', 'Category B',
						'Category C' ];
				$scope.category = '';
				$scope.dateRangeSelects = [ 'Full Year 2017', 'Latest Month',
						'Latest 52 Weeks', 'Latest 26 Weeks',
						'Year Ago 52 Weeks', 'Year Ago 4 Weeks',
						'Year Ago 26 Weeks' ];
				$scope.dateRangeSelectval = '';
				$scope.geographySelects = [ 'Africa', 'Asia', 'Australia',
						'Europe', 'USA' ];
				$scope.geography = '';
			});
	$scope.results = [];
	$scope.optimizedSearch = function(personalDetail) {
		return personalDetail.User.Stats[0].active === "1";
	};

	$scope.tableEnabled = true;
	$scope.chartEnabled = false;

	$scope.enableTable = function() {
		$scope.tableEnabled = true;
		$scope.chartEnabled = false;
	};

	$scope.enableChart = function() {
		$scope.tableEnabled = false;
		$scope.chartEnabled = true;
	};
});