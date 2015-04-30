angular.module('mathApp', [])
    .controller('math', MathController);

MathController.$inject = ['$scope'];
function MathController($scope) {
    /* TODO:
     * Add fractions function
     * Add decimal function
     * Change div, mul, add, and sub problem functions to  use decimal and fractions
     * Change number range
     * Add solver function
     * Add checkAnswer function
     * Add helpNeeded function
     * Add custom problem function
    */

    $scope.problem = "No Problem Yet!";

    var mathTypeObj = {
        mul: {
            mainType: "Multiplication",
            mainTypeNum: 2,
            types: ['By 11', 'Ends in five', 'Fractions'],
            show: showStatus,
            hide: hideStatus,
            status: false
        },

        sub: {
            mainType: "Subtraction",
            mainTypeNum: 1,
            types: ['Decimals', 'Fractions'],
            show: showStatus,
            hide: hideStatus,
            showStatus: false
        },

        div: {
            mainType: "Division",
            mainTypeNum: 3,
            types: ['remander'],
            show: showStatus,
            hide: hideStatus,
            showStatus: false
        },

        add: {
            mainType: "Addition",
            mainTypeNum: 0,
            types: ['Decimals', 'Fractions'],
            show: showStatus,
            hide: hideStatus,
            showStatus: false
        },

        cus: { // custom problem type
            mainType: "Custom"
        }
    }

    $scope.mathType = [
        mathTypeObj.add, mathTypeObj.sub,
        mathTypeObj.mul, mathTypeObj.div,
        mathTypeObj.cus
    ];

    $scope.getProblem = function() {
        $scope.problem = math($scope.terms, $scope.subType); // assume types are set up
    };

    $scope.problemType = function(type, subType) {
        $scope.problem = math(type, subType);
    };

    function math(type, subType) {
        if (type === 0) {
            return addProblem();
        } else if (type === 1) {
            return subProblem();
        } else if (type === 2) {
            return mulProblem(subType);
        } else {
            return divProblem(subType);
        }
    }

    function randomNum() {
        return Math.floor((Math.random() * 10000) + 1000);
    }

    // max supposed to be 1 for 1, 10 for 10, by tens, min can be any number
    function customNum(max, min, end) {
        if (end === 5) {
            var endsInFive = [];
            for (var foo = 5; foo < 500; foo += 5) {
                if (foo % 10 === 0) {
                    foo += 5;
                }
                endsInFive.push(foo);
            }
            return endsInFive[Math.floor((Math.random() *
                endsInFive.length))];
        } else {
            return Math.floor((Math.random() * max) + min);
        }
    }

    function addProblem() {
        var num = randomNum();
        var otherNum = randomNum();
        return num + '+' + otherNum;
    }

    function subProblem() {
        var num = randomNum();
        var otherNum = randomNum();
        return num + '-' + otherNum;
    }

    function mulProblem(type) {
        var num;
        var otherNum;

        if (type === 0) { // this is for multiply by 11
            num = customNum(10000, 10);
            return num + 'x' + 11;
        } else if (type === 1) { // meant for ends in 5
            num = customNum(1000, 10, 5);
            otherNum = customNum(1000, 10, 5);
            return num + 'x' + otherNum;
        } else { // fractions
            num = customNum(1000, 10);
            otherNum = customNum(1000, 10);
            return num + 'x' + otherNum;
        }
    }

    function divProblem(type) {
        var num = customNum(1000, 200);
        var otherNum = customNum(30, 3);

        if (type === 0) {
            return num + '/' + otherNum + ' remander';
        } else {
            return num + '/' + otherNum;
        }
    }

    function showStatus() {
        this.status = true;
    }

    function hideStatus() {
        this.status = false;
    }
}
