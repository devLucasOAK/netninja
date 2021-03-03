var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

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
    
    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green",
            rate: 50,
            available: true,
            thumb: "content/img/yoshi.png"
        },
        {
            name: "Crystal",
            belt: "yellow",
            rate: 30,
            available: false,
            thumb: "content/img/crystal.png"
        },
        {
            name: "Ryu",
            belt: "orange",
            rate: 10,
            available: false,
            thumb: "content/img/ryu.png"
        },
        {
            name: "Shaun",
            belt: "black",
            rate: 1000,
            available: true,
            thumb: "content/img/shaun.png"
        }
    ];

}]);

myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});
