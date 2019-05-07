angular.module("carDealer").controller("HomeController", function($scope){
    var heighBody = window.innerHeight;
    $("#slider .carousel-inner img").css('height', heighBody);
    setTimeout(function(){
    	document.getElementById("loader").style.display = 'none';
    }, 3000);
});