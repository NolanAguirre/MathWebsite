angular.module('mathApp', [])
.controller('math', ['$scope', function($scope) {
    $scope.problem = "No Problem Yet!";
      var showStatus = function(){
       this.status = true;
    }
    var hideStatus = function(){
        this.status = false;
    }
    var mathTypeObj = {
    mul : {
        mainType: "Multiplication",
        types: ['ends in five'],
        show: showStatus,
        hide: hideStatus,
        status: false
    },
     sub : {
        mainType: "Subtraction",
        types: ['Fractions'],
        show: showStatus,
        hide: hideStatus,
        showStatus: false
    },
     div : {
        mainType: "Division",
        types: ['nine'],
        show: showStatus,
        hide: hideStatus,
        showStatus: false
    },
     add : {
        mainType: "Addition",
        types: ['three digit number'],
        show: showStatus,
        hide: hideStatus,
        showStatus: false
        }
    }
    $scope.mathType = [mathTypeObj.mul, mathTypeObj.sub, mathTypeObj.div, mathTypeObj.add];
 
   
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
         var endsInFive = [];
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