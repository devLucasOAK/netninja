var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'NinjaController'
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

// myNinjaApp.run(function(){
// 
// });