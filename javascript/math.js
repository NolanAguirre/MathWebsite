angular.module('mathApp', [])
.controller('math', ['$scope', function($scope) {
   // $scope.answer = answer;
    $scope.showMul = function(){
        this.mulReveal = true;
    }
    $scope.hideMul = function(){
        this.mulReveal = false;
    }
    $scope.showDiv = function(){
        this.divReveal = true;
    }
    $scope.hideDiv = function(){
        this.divReveal = false;
    }
    $scope.problem = "12 x 12/52"
    }]);