angular.module("carDealer").controller("contactUsController", function($scope){
	$scope.user = {};
	$scope.empty = function() {
		if($scope.formSupport.$invalid){
			$scope.formSupportInvalid = true;
			return;
		}
		$scope.messageSuccess  = true;
		$scope.user = {};
	}
});