angular.module('mathApp', [])
    .controller('math', MathController);

function MathController() {
    var vm = this;
    vm.currentProblem = addition();
    vm.newProblemClick = newProblemClick;
    vm.submitAnswer = submitAnswer;
    vm.showHelp = false;
    vm.disableButtons = true;
    vm.problemTypes = [{
        mainType: {
            name: 'Addition',
            generate: addition,
            strategy: none,
            strategyExample: noExample
        },
        subTypes: [{
            name: 'Decimal',
            generate: decimalAdd,
            strategy: none,
            strategyExample: noExample
        }]
    }, {
        mainType: {
            name: 'Subtraction',
            generate: subtraction,
            strategy: none,
            strategyExample: noExample
        },
        subTypes: [{
            name: 'Decimal',
            generate: decimalSub,
            strategy: none,
            strategyExample: noExample
        }]
    }, {
        mainType: {
            name: 'Division',
            generate: division,
            strategy: divisions,
            strategyExample: noExample
        },
        subTypes: [{
            name: 'Remainder',
            generate: remainder,
            strategy: remainders,
            strategyExample: noExample
        }]
    }, {
        mainType: {
            name: 'Multiplication',
            generate: multiplication,
            strategy: multiplications,
            strategyExample: noExample
        },
        subTypes: [{
            name: 'Ends in fives',
            generate: endsInFive,
            strategy: endsInFives,
            strategyExample: noExample
        }, {
            name: 'Elevens',
            generate: eleven,
            strategy: elevens,
            strategyExample: noExample
        }, {
            name: 'Fractions',
            generate: fraction,
            strategy: fractions,
            strategyExample: noExample
        }, {
            name: 'Square',
            generate: square,
            strategy: squares,
            strategyExample: exampleSquare
        }, {
            name: 'Cube',
            generate: cube,
            strategy: cubes,
            strategyExample: exampleCube
        }]
    }, {
        mainType: {
            name: 'Sequentials',
            generate: sequence,
            strategy: none,
            strategyExample: noExample
        }
    }];

    function newProblemClick() {
        vm.currentProblem = vm.storeProblem.generate();
        vm.displayAnswer = '';
        vm.showHelp = false;
    }

    function submitAnswer() {
        if(vm.reverseInput === true){
            vm.userAnswer = reverse(vm.userAnswer);
        }
        if (vm.currentProblem.answer === vm.userAnswer) {
            vm.displayAnswer = 'Delightful, You\'ve got it correct';
        } else {
            vm.displayAnswer = 'Incorrect! Correct answer is ' + vm.currentProblem.answer;
        }
    }
    function reverse(s) {
        var o = '';
        for (var i = s.length - 1; i >= 0; i--)
            o += s[i];
        return o;
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

    function division() {
        var num = randomNum(50, 5);
        var otherNum = randomNum(30, 5);
        var temp = num * otherNum;
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

    function sequence() {
        var num = randomNum(20, 5);
        var otherNum = randomNum(6, 2);
        var answer = 0;
        var seq = [];
        var temp = 0;
        for (var foo = 0; foo < num; foo++) {
            temp = otherNum + temp;
            seq.push(temp);
            answer = answer + temp
        }
        return {
            answer: answer.toString(),
            questions: seq[0] + ', ' + seq[1] + '... ' + seq[num - 1]
        };
    }

    function decimalNum() {
        var num = Math.random() * (2000 - 10) + 1;
        return num;
    }

    function randomNum(max, min) {
        var num = Math.floor((Math.random() * (max - min)) + min);
        return num;
    }



function randomFraction() {
    var wholeNum = randomNum(30, 6);
    var denominator = randomNum(wholeNum + 5, wholeNum - 5);
    if (wholeNum === denominator) {
        denominator = denominator - randomNum(5, 2);
    }
    var question = wholeNum + ' * ' + wholeNum + '/' +
        denominator;
    var answer;

    function answer() {
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

        function simplify() {
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
}