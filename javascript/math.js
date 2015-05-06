angular.module('mathApp', [])
    .controller('math', MathController);
/* To-Do
 *  Add help button    
 *  Add Sequential   
 *  Fix check answer  
 *  Swap order submit 
 *  
 */
function MathController() {
    var vm = this;
    vm.problemTypes = [{
            mainType: {
                name: 'Addition',
                generate: addition
            },
            subTypes: [{
                name: 'Decimal',
                generate: decimalAdd
            }]
        }, {
            mainType: {
                name: 'Subtraction',
                generate: subtraction
            },
            subTypes: [{
                name: 'Decimal',
                generate: decimalSub
            }]
        }, {
            mainType: {
                name: 'Division',
                generate: division
            },
            subTypes: [{
                name: 'Remainder',
                generate: remainder
            }]
        }, {
            mainType: {
                name: 'Multiplication',
                generate: multiplication
            },
            subTypes: [{
                name: 'Ends in fives',
                generate: endsInFive
            }, {
                name: 'Elevens',
                generate: eleven
            }, {
                name: 'Fractions',
                generate: fraction
            }, {
                name: 'Square',
                generate: square
            }, {
                name: 'Cube',
                generate: cube
            }]
        }

    ];
    vm.currentProblem = addition();
    vm.disabled = true;

    vm.submitAnswer = submitAnswer;

    function submitAnswer() {
        if (vm.currentProblem.answer === vm.userAnswer) {
            vm.submitedAnswer = 'Delightful, You\'ve got it correct';
        } else {
            vm.submitedAnswer = 'Incorrect! Correct answer is ' + vm.currentProblem.answer;
        }
    }

    function multiplication() {
        var num = randomNum(500, 100);
        var otherNum = randomNum(500, 10);
        return {
            answer: num * otherNum,
            questions: num + ' * ' + otherNum
        };
    }

    function eleven() {
        var num = randomNum(100000, 1000);
        var answer = num * 11
        return {
            answer: answer.toString(),
            questions: num + ' * 11'
        };
    }

    function endsInFive() {
        var num = toFive(randomNum(1000, 10));
        var otherNum = toFive(randomNum(1000, 10));
        var answer = num * otherNum;

        function toFive(number) {
            return +number.toString().replace(/\d$/, '5');
        }
        return {
            answer: answer.toString(),
            questions: num + ' * ' + otherNum
        };
    }

    function fraction() {
        var randomFrac = randomFraction();
        return {
            answer: randomFrac.answer.toString(),
            questions: randomFrac.questions
        };
    }

    function square() {
        var num = randomNum(30, 10);
        return {
            answer: Math.pow(num, 2).toString(),
            questions: num + ' ^  2'
        };
    }

    function cube() {
            var num = randomNum(20, 3);
            return {
                answer: Math.pow(num, 3).toString(),
                questions: num + ' ^ 3'
            };
        }
        //////////////////////////////////  used for Division problems
    function division() {
        var num = randomNum(50, 5);
        var otherNum = randomNum(30, 5);
        var temp = num * otherNum; // insures whole number answer
        return {
            answer: num.toString(),
            questions: temp + '/' + otherNum
        };
    }

    function remainder() {
            var num = randomNum(3000, 100);
            var otherNum = randomNum(15, 3)
            var answer = num % otherNum;
            return {
                answer: answer.toString(),
                questions: num + '/' + otherNum + ' remainder'
            };
        }
        //////////////////////////// used for Addition problems
    function addition() {
        var num = randomNum(10000, 100);
        var otherNum = randomNum(10000, 100);
        var answer = num + otherNum;
        return {
            answer: answer.toString(),
            questions: num + ' + ' + otherNum
        };
    }

    function decimalAdd() {
            var num = decimalNum();
            var otherNum = decimalNum();
            var answer = num + otherNum
            return {
                answer: answer.toFixed(2),
                questions: num.toFixed(2) + ' + ' + otherNum.toFixed(2)
            };
        }
        ////////////////////////////////////////// used for Subtraction problems
    function subtraction() {
        var num = randomNum(10000, 100);
        var otherNum = randomNum(10000, 100);
        var answer = num - otherNum;
        return {
            answer: answer.toString(),
            questions: num + ' - ' + otherNum
        };
    }

    function decimalSub() {
        var num = decimalNum();
        var otherNum = decimalNum();
        var answer = num - otherNum;
        return {
            answer: answer.toFixed(2),
            questions: num.toFixed(2) + ' - ' + otherNum.toFixed(2)
        };
    }
// solution is correcnt answer
// change name property
    /////////////////////////////////////////////////////////////////////// things get weird 
    function randomFraction() { // really odd, but it has to return a very very very specific type of fraction 
        var wholeNum = randomNum(30, 6);
        var denominator = randomNum(wholeNum + 5, wholeNum - 5);
        if (wholeNum === denominator){
            denominator = denominator - randomNum(5, 2);
        }
        var question = wholeNum + ' * ' + wholeNum + '/' +
            denominator;
        var answer;

        function answer() { // solves problem, but keeps it as a fraction, dont try to understand, its not using logical math, just a pattern. however it works nicely 
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
            questions: question,
        };
    }

    /////////////////////////////////////////////////////////// gets random numbers
    function decimalNum() {
        var num = Math.random() * (2000 - 10) + 1;
        return num;
    }

    function randomNum(max, min) {
        var num = Math.floor((Math.random() * (max - min)) + min);
        return num;
    }



};