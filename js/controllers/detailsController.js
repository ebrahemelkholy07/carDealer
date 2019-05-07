angular.module("carDealer").controller("detailsController", function($scope){
setTimeout(function(){
    	document.getElementById("loader").style.display = 'none';
    }, 2000);
	$scope.comment ={};
	$scope.empty = function() {
		if($scope.formComment.$invalid){
			$scope.formCommentInvalid = true;
			return;
		}
		$scope.messageSuccess  = true;
		$scope.comment = {};
	}
});