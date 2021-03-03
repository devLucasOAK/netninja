var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.message = "he y'all";
    
    $scope.ninjas = ['Yoshi','Crystal','Shaun','Ryu'];

}]);

myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});
