var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'NinjaController'
    })

    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })

    .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController'
    })

    .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'NinjaController'
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);


myNinjaApp.directive('randomNinja', [function(){

    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '=',
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }  
    };

}]);

myNinjaApp.controller('NinjaController', ['$scope','$http', function($scope, $http){

    // $scope.message = "he y'all";
    
    $scope.removeNinja = function(ninja){

        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja,1);

    }

    $scope.removeAll = function(){
        
        $scope.ninjas = [];
    }

    $scope.addNinja = function(){
        
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true,
            thumb: "content/img/default.png"
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    }

    $http.get('data/ninjas.json').then(function(response){
        $scope.ninjas = response.data;
    });
    
//     $scope.ninjas = [
//         {
//             name: "Yoshi",
//             belt: "green",
//             rate: 50,
//             available: true,
//             thumb: "content/img/yoshi.png"
//         },
//         {
//             name: "Crystal",
//             belt: "yellow",
//             rate: 30,
//             available: false,
//             thumb: "content/img/crystal.png"
//         },
//         {
//             name: "Ryu",
//             belt: "orange",
//             rate: 10,
//             available: false,
//             thumb: "content/img/ryu.png"
//         },
//         {
//             name: "Shaun",
//             belt: "black",
//             rate: 1000,
//             available: true,
//             thumb: "content/img/shaun.png"
//         }
//     ];

//     console.log(angular.toJson($scope.ninjas)); //CONVERTE LISTA DE OBJETOS PARA JSON

// }]);

}]);

myNinjaApp.controller('ContactController', ['$scope','$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('contact-success');
    }
}]);

// myNinjaApp.run(function(){
// 
// });