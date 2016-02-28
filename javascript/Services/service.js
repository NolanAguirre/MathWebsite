angular.module("UILPractice") // Questions are displayed to the user
    .service("service", service); // Problems are for the code portion
service.$inject = ["$routeParams"]; // The addition function is a problem
function service($routeParams) { // It generates a question
    var service = this;
    service.submitAnswer = function() {
        if (service.userAnswer == service.answer) {
            service.answer = "Correct!";
            service.dislay = false
        }
    }
    service.display = true // True is hidden
    service.question = "No problem yet"
    service.problems = [{
        mainType: {
            name: 'Addition',
            generate: addition,
            link: "#/no_help"
        },
        subTypes: [{
            name: 'Decimal',
            generate: decimalAdd,
            link: "#/addition/decimal"
        }, {
            name: 'Sequentials',
            generate: sequence,
            link: "#/no_help"
        }]
    }, {
        mainType: {
            name: 'Subtraction',
            generate: subtraction,
            link: "#/no_help"
        },
        subTypes: [{
            name: 'Decimal',
            generate: decimalSub,
            link: "#/subtraction/decimal"
        }]
    }, {
        mainType: {
            name: 'Division',
            generate: division,
            link: "#/division"
        },
        subTypes: [{
            name: 'Remainder',
            generate: remainder,
            link: "#/division/remainder"
        }]
    }, {
        mainType: {
            name: 'Multiplication',
            generate: multiplication,
            link: "#/no_help"
        },
        subTypes: [{
            name: 'Ends in Five',
            generate: endsInFive,
            link: "#/multiplication/five"
        }, {
            name: 'Elevens',
            generate: eleven,
            link: "#/multiplication/elevan"
        }, {
            name: 'Fractions',
            generate: fraction,
            link: "#/multiplication/fraction"
        }, {
            name: 'Square',
            generate: square,
            link: "#/multiplication/square"
        }, {
            name: 'Cube',
            generate: cube,
            link: "#/multiplication/cube"
        }]
    }];

    function multiplication() {
        var num = randomNum(500, 30);
        var otherNum = randomNum(100, 4);
        service.answer = num * otherNum;
        service.question = num + ' * ' + otherNum;
    }

    function eleven() {
        var num = randomNum(1000, 50);
        var answer = num * 11
        service.answer = answer.toString();
        service.question = num + ' * 11';
    }

    function endsInFive() {
        var num = toFive(randomNum(100, 10));
        var otherNum = toFive(randomNum(100, 10));
        var answer = num * otherNum;

        function toFive(number) {
            return +number.toString()
                .replace(/\d$/, '5');
        }
        service.answer = answer.toString()
        service.question = num + ' * ' + otherNum
    }

    function fraction() {
        var randomFrac = randomFraction();
        service.answer = randomFrac.answer.toString()
        service.question = randomFrac.question
    }

    function square() {
        var num = randomNum(30, 10);
        service.answer = Math.pow(num, 2).toString();
        service.question = num + ' ^  2'
    }

    function cube() {
        var num = randomNum(20, 3);
        service.answer = Math.pow(num, 3).toString();
        service.question = num + ' ^ 3'
    }

    function division() {
        var num = randomNum(50, 5);
        var otherNum = randomNum(30, 5);
        var temp = num * otherNum;
        service.answer = num.toString();
        service.question = temp + '/' + otherNum
    }

    function remainder() {
        var num = randomNum(300, 10);
        var otherNum = randomNum(15, 3)
        var answer = num % otherNum;
        service.answer = answer.toString();
        service.question = num + '/' + otherNum
    }

    function addition() {
        var num = randomNum(5000, 100);
        var otherNum = randomNum(5000, 100);
        var answer = num + otherNum;
        service.answer = answer.toString();
        service.question = num + ' + ' + otherNum
    }

    function decimalAdd() {
        var num = decimalNum();
        var otherNum = decimalNum();
        var answer = num + otherNum
        service.answer = answer.toFixed(2);
        service.question = num.toFixed(2) + ' + ' + otherNum.toFixed(2)
    }

    function subtraction() {
        var num = randomNum(10000, 100);
        var otherNum = randomNum(10000, 100);
        var answer = num - otherNum;
        service.answer = answer.toString();
        service.question = num + ' - ' + otherNum
    }

    function decimalSub() {
        var num = decimalNum();
        var otherNum = decimalNum();
        var answer = num - otherNum;
        service.answer = answer.toFixed(2);
        service.question = num.toFixed(2) + ' - ' + otherNum.toFixed(2)
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
        service.answer = answer.toString();
        service.question = seq[0] + ', ' + seq[1] + '... ' + seq[num - 1]
    }

    function decimalNum() {
        var num = Math.random() * (2000 - 10) + 1;
        return parseFloat(num.toFixed(2));
    }

    function randomNum(max, min) {
        var num = Math.floor((Math.random() * (max - min)) + min);
        return num;
    }



    function randomFraction() { // wonky stuff below
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
            if (numirator == 0) {
                answer = wholeNum
            } else {
                answer = wholeNum + ' ' + numirator + '/' +
                    denominator;
            }
        }
        answer();

        return {
            answer: answer,
            question: question
        };
    }
}
