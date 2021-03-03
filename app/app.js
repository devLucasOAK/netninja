var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    // $scope.message = "he y'all";
    
    $scope.removeNinja = function(ninja){

        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja,1);

    }
    
    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green",
            rate: 50,
            available: true
        },
        {
            name: "Crystal",
            belt: "yellow",
            rate: 30,
            available: false
        },
        {
            name: "Ryu",
            belt: "orange",
            rate: 10,
            available: false
        },
        {
            name: "Shaun",
            belt: "black",
            rate: 1000,
            available: true
        }
    ];

}]);

myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});
