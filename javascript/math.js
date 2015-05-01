angular.module('mathApp', [])
    .controller('math', MathController);

MathController.$inject = ['$scope'];

function MathController($scope) {
    /* TODO:
     * Fix answer return results on decimals
     * Make pseudo-class to update without refresh
     * Fix answer checking
     * clean up code
     * Change variable names that are finished
     * Create fractions for add and sub
     * Fix spelling
     * Do homework
     * Sleep more
     */
    var foo; // set to current problem. to get answer
    $scope.currentProblem = null;
    $scope.answer = null;
    $scope.changeCurrentProblem = function(problem, storeAnswer) {
        $scope.currentProblem = problem;
        foo = storeAnswer;
    }
    $scope.newProblems = function() { // im cheating, will implement pseudo class later
        refresh();
    }
    $scope.userAnswer = {
        answer: 'No Answer Yet'
    }
    $scope.showAnswer = function() {
        $scope.answer = foo;
        correct();
    }
    $scope.categories = [{
            name: addition(),
            types: [decimalAdd(), fractionAdd()]
        },

        {
            name: subtraction(),
            types: [decimalSub(), fractionSub()]
        },


        {
            name: division(),
            types: [remainder()]
        },

        {
            name: multiplication(),
            types: [byEleven(), endsInFive(), fractionMul(), square(),
                cube()
            ]
        }

    ];

    function correct() {
        if ($scope.userAnswer.answer === foo) {
            $scope.correctness = "you got it right";
        } else {
            $scope.correctness = "you got it wrong";
        }
    }

    function refresh() {
            window.location.reload();
        }
        ////////////////////////// used for Multiplication problems
    function multiplication() {
        var num = randomNum(500, 100);
        var otherNum = randomNum(500, 10);
        return {
            name: 'Multiplication',
            answer: num * otherNum,
            questions: num + ' * ' + otherNum
        };
    }

    function byEleven() {
        var num = randomNum(100000, 1000);

        return {
            name: 'By Eleven',
            answer: num * 11,
            questions: num + ' * 11'
        };
    }

    function endsInFive() {
        var num = toFive(randomNum(1000, 10));
        var otherNum = toFive(randomNum(1000, 10));

        function toFive(number) {
            return +number.toString().replace(/\d$/, '5');
        }
        return {
            name: 'Ends in Five',
            answer: num * otherNum,
            questions: num + ' * ' + otherNum
        };
    }

    function fractionMul() {
        var randomFrac = randomFraction('mul');
        return {
            name: 'fraction',
            answer: randomFrac.answer,
            questions: randomFrac.question
        };
    }

    function square() {
        var num = randomNum(30, 10);
        return {
            name: 'Squares',
            answer: Math.pow(num, 2),
            questions: num + ' ^  2'
        };
    }

    function cube() {
            var num = randomNum(20, 3);
            return {
                name: 'Cubes',
                answer: Math.pow(num, 3),
                questions: num + ' ^ 3'
            };
        }
        //////////////////////////////////  used for Division problems
    function division() {
        var num = randomNum(50, 5);
        var otherNum = randomNum(30, 5);
        var temp = num * otherNum; // insures whole number answer
        return {
            name: 'Division',
            answer: num,
            questions: temp + '/' + otherNum
        };
    }

    function remainder() {
            var num = randomNum(3000, 100);
            var otherNum = randomNum(15, 3)
            return {
                name: 'Remainder',
                answer: num % otherNum,
                questions: num + '/' + otherNum + ' remainder'
            };
        }
        //////////////////////////// used for Addition problems
    function addition() {
        var num = randomNum(10000, 100);
        var otherNum = randomNum(10000, 100);
        return {
            name: 'Addition',
            answer: num + otherNum,
            questions: num + ' + ' + otherNum
        };
    }

    function decimalAdd() {
        var num = decimalNum();
        var otherNum = decimalNum();
        return {
            name: 'Decimal',
            answer: num + otherNum, // fix this 
            questions: num + ' + ' + otherNum
        };
    }

    function fractionAdd() {
            var randomFrac = randomFraction('add');
            return {
                name: 'fraction',
                answer: randomFrac.answer,
                questions: randomFrac.question
            };
        }
        ////////////////////////////////////////// used for Subtraction problems
    function subtraction() {
        var num = randomNum(10000, 100);
        var otherNum = randomNum(10000, 100);
        return {
            name: 'Subtraction',
            answer: num - otherNum,
            questions: num + ' - ' + otherNum
        };
    }

    function decimalSub() {
        var num = decimalNum();
        var otherNum = decimalNum();
        return {
            name: 'Decimal',
            answer: num - otherNum,
            questions: num + ' - ' + otherNum
        };
    }

    function fractionSub() {
            var randomFrac = randomFraction('sub');
            return {
                name: 'fraction',
                answer: randomFrac.answer,
                questions: randomFrac.question
            };
        }
        /////////////////////////////////////////////////////////////////////// things get weird 
    function randomFraction(type) { // returns two strings, spelling gets bad
        if (type === 'mul') { // testing, else if an else statement's functions for returns have not be completed
            return wholeNumber();
        } else {
            return wholeNumber();
        }

        function wholeNumber() { // really odd, but it has to return a very very very specific type of faction 
            var wholeNum = randomNum(30, 5);
            var denominator = randomNum(wholeNum + 3, wholeNum - 3);
            var question = wholeNum + ' * ' + wholeNum + '/' +
                denominator;
            var answer;

            function answer() { // solves problem, but keeps it as a fraction, dont try to understand, its not using logical math, just a pattern.
                var temp = 'oops, i skipped temp';
                var diffBetweenNumAndDen = wholeNum -
                    denominator;
                var numirator = diffBetweenNumAndDen *
                    diffBetweenNumAndDen;
                wholeNum = wholeNum + diffBetweenNumAndDen;
                if (numirator >= denominator) {
                    for (var foo = numirator; foo >=
                        denominator; foo -= denominator) {
                        wholeNum++;
                        numirator -= denominator;
                    }
                }
                simplify();

                function simplify() { // simplifies fraction before its made into a string
                    for (var x = 2; x < denominator; x++) {
                        if (numirator % x === 0 &&
                            denominator % x === 0) {
                            numirator = numirator / x;
                            denominator = denominator / x;
                            simplify();
                        }
                    }
                }
                answer = wholeNum + ' ' + numirator + '/' +
                    denominator;
            }
            answer();

            return {
                answer: answer,
                question: question
            };
        }

        function smallFractions() { // complete, listed todo

        }

        function randomWholeNumber() { // complete, listed in todo

        }
    }
/////////////////////////////////////////////////////////// gets random numbers
    function decimalNum() {
        var num = (Math.random() * (2000 - 10) + 10).toFixed(2);
        return num;
    }

    function randomNum(max, min) {

        var num = Math.floor((Math.random() * (max - min)) + min);
        return num;
    }

}