var app = angular.module("nielsenLostBasketApp", []);
app.controller("tableController", function($scope, $http) {
	$http.get('data.json').success(
			function(data) {
				$scope.personalDetails = data;
				$scope.categorySelects = [ '--Select--', 'Category A',
						'Category B', 'Category C' ];
				$scope.categorySelectval = '--Select--';
				$scope.dateRangeSelects = [ '--Select--', 'Full Year 2017',
						'Latest Month', 'Latest 52 Weeks', 'Latest 26 Weeks',
						'Year Ago 52 Weeks', 'Year Ago 4 Weeks',
						'Year Ago 26 Weeks' ];
				$scope.dateRangeSelectval = '--Select--';
				$scope.geographySelects = [ '--Select--', 'Africa', 'Asia',
						'Australia', 'Europe', 'USA' ];
				$scope.geographySelectval = '--Select--';
			});
	$scope.results = [];
	$scope.findValue = function() {
		angular.forEach($scope.personalDetails.category, function(value, key) {
			if (key === enteredValue) {
				$scope.results.push({
					serial : key,
					owner : value[0].Owner
				});
			}
		});
	};
});