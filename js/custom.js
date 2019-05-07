$(window).resize(function () {
    var heighBody = window.innerHeight;
    $("#slider .carousel-inner img").css('height', heighBody);
});

// var ref = firebase.database().ref('cars');

// database.set ([
// {
//    hyundai: {
//       id: 1,
//       model: 2016
//    },
	
//    BMW: {
//       id: 2,
//       model: 20
//    }
// },
// {
//    hyundai: {
//       id: 1,
//       model: 2016
//    },
	
//    BMW: {
//       id: 2,
//       model: 20
//    }
// }
// ]);
// var ref = new Firebase('https://cardealer-4bc05.firebaseio.com');

// var playersRef = ref.child("players");
// playersRef.push ({
//    name: "John",
//    number: 1,
//    age: 30
// });

// playersRef.push ({
//    name: "Amanda",
//    number: 2,
//    age: 20
// });