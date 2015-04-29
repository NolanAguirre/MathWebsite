angular.module('mathApp', [])
.controller('math', ['$scope', function($scope) {
<<<<<<< HEAD
   $scope.problem = "No Problem Yet!"
      $scope.showAdd = function(){
        this.addReveal = true;
    }
    $scope.hideAdd = function(){
        this.addReveal = false;
    }
     $scope.showSub = function(){
        this.subReveal = true;
    }
    $scope.hideSub = function(){
        this.subReveal = false;
    }
=======
    $scope.problem = "No Problem Yet!"
>>>>>>> 90e2cede204ac5224d13984fd9bb61f35e68a1ae
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
    $scope.getProblem = function(){
       $scope.problem = math(3,0); // assume types are set up
    }
    function math(type, subType){
        if(type === 0){
            return addProblem();
        }else if (type === 1){
            return subProblem();
        }else if(type === 2){
            return mulProblem(subType);
        }else{
        return divProblem(subType);
        }    
     }
     function randomNum(){
         return Math.floor((Math.random() * 10000) + 1000); 
     }
     function customNum(max, min, end){ // max supposed to be 1 for 1, 10 for 10, by tens, min can be any number
         if(end === 5){
         var endsInFive[];
				for(var foo = 5; foo < 500; foo += 5){
				endsInFive.push(foo);
				}
             return endsInFive[Math.floor((Math.random() * endsInFive.length))];
         }else{
             return Math.floor((Math.random() * max) + min);
         }
     }
     function addProblem(){
         var num = randomNum();
         var otherNum = randomNum();
         return num + '+' + otherNum;
     }
     function subProblem(){
         var num = randomNum();
         var otherNum = randomNum();
         return num + '-' + otherNum;
     }
     function mulProblem(type){
         var num;
         var otherNum;
         if(type === 0){ // this is for multiply by 11
             num = customNum(10000, 10);
             return num + 'x' + 11;
         }else if(type === 1){ // meant for ends in 5
             num = customNum(1000, 10, 5);
             otherNum = customNum(1000, 10, 5);
             return num + 'x' + otherNum;
         }else{ // three digit multiplication 
             num = customNum(1000, 10);
             otherNum = customNum(1000, 10);
                return num + 'x' + otherNum;
         }
     }
     function divProblem(type){
         var num = customNum(1000, 200);
         var otherNum = customNum(30, 3);
         if(type === 0){
            return num + '/' + otherNum + ' remander';
         }else{
          return num + '/' + otherNum;   
         }
     }
    }]);