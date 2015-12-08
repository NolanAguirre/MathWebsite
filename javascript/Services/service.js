angular.module("UILPractice")
    .service("service", service);
    service.$inject = ["$routeParams"];
    function service($routeParams){
        var service = this;
        service.currentProblem = "No problem yet"
        service.problems = [ {
            mainType: {
                name: 'Addition',
                generate: addition,
                link:"#/addition"
            },
            subTypes: [ {
                name: 'Decimal',
                generate: decimalAdd,
                link:"#/addition/decimal"
            },{
                name: 'Sequentials',
                generate: sequence,
                link:"#/addition/sequentials"
            } ]
        }, {
            mainType: {
                name: 'Subtraction',
                generate: subtraction,
                link:"#/subtraction"
            },
            subTypes: [ {
                name: 'Decimal',
                generate: decimalSub,
                link:"#/subtraction/decimal"
            } ]
        }, {
            mainType: {
                name: 'Division',
                generate: division,
                link:"#/division"
            },
            subTypes: [ {
                name: 'Remainder',
                generate: remainder,
                link:"#/division/remainder"
            } ]
        }, {
            mainType: {
                name: 'Multiplication',
                generate: multiplication,
                link:"#/multiplication"
            },
            subTypes: [ {
                name: 'Ends in Five',
                generate: endsInFive,
                link:"#/multiplication/five"
            }, {
                name: 'Elevens',
                generate: eleven,
                link:"#/multiplication/elevan"
            }, {
                name: 'Fractions',
                generate: fraction,
                link:"#/multiplication/fraction"
            }, {
                name: 'Square',
                generate: square,
                link:"#/multiplication/square"
            }, {
                name: 'Cube',
                generate: cube,
                link:"#/multiplication/cube"
            } ]
        } ];
        function multiplication() {
            var num = randomNum( 500, 100 );
            var otherNum = randomNum( 500, 10 );
            return {
                answer: num * otherNum,
                question: num + ' * ' + otherNum
            };
        }

        function eleven() {
            var num = randomNum( 100000, 1000 );
            var answer = num * 11
            return {
                answer: answer.toString(),
                question: num + ' * 11'
            };
        }

        function endsInFive() {
            var num = toFive( randomNum( 1000, 10 ) );
            var otherNum = toFive( randomNum( 1000, 10 ) );
            var answer = num * otherNum;

            function toFive( number ) {
                return +number.toString()
                    .replace( /\d$/, '5' );
            }
            return {
                answer: answer.toString(),
                question: num + ' * ' + otherNum
            };
        }

        function fraction() {
            var randomFrac = randomFraction();
            return {
                answer: randomFrac.answer.toString(),
                question: randomFrac.questions
            };
        }

        function square() {
            var num = randomNum( 30, 10 );
            return {
                answer: Math.pow( num, 2 )
                    .toString(),
                question: num + ' ^  2'
            };
        }

        function cube() {
            var num = randomNum( 20, 3 );
            return {
                answer: Math.pow( num, 3 )
                    .toString(),
                question: num + ' ^ 3'
            };
        }

        function division() {
            var num = randomNum( 50, 5 );
            var otherNum = randomNum( 30, 5 );
            var temp = num * otherNum;
            return {
                answer: num.toString(),
                question: temp + '/' + otherNum
            };
        }

        function remainder() {
            var num = randomNum( 3000, 100 );
            var otherNum = randomNum( 15, 3 )
            var answer = num % otherNum;
            return {
                answer: answer.toString(),
                question: num + '/' + otherNum + ' remainder'
            };
        }

        function addition() {
            var num = randomNum( 10000, 100 );
            var otherNum = randomNum( 10000, 100 );
            var answer = num + otherNum;
            return {
                answer: answer.toString(),
                question: num + ' + ' + otherNum
            };
        }

        function decimalAdd() {
            var num = decimalNum();
            var otherNum = decimalNum();
            var answer = num + otherNum
            return {
                answer: answer.toFixed( 2 ),
                question: num.toFixed( 2 ) + ' + ' + otherNum.toFixed( 2 )
            };
        }

        function subtraction() {
            var num = randomNum( 10000, 100 );
            var otherNum = randomNum( 10000, 100 );
            var answer = num - otherNum;
            return {
                answer: answer.toString(),
                question: num + ' - ' + otherNum
            };
        }

        function decimalSub() {
            var num = decimalNum();
            var otherNum = decimalNum();
            var answer = num - otherNum;
            return {
                answer: answer.toFixed( 2 ),
                question: num.toFixed( 2 ) + ' - ' + otherNum.toFixed( 2 )
            };
        }

        function sequence() {
            var num = randomNum( 20, 5 );
            var otherNum = randomNum( 6, 2 );
            var answer = 0;
            var seq = [];
            var temp = 0;
            for ( var foo = 0; foo < num; foo++ ) {
                temp = otherNum + temp;
                seq.push( temp );
                answer = answer + temp
            }
            return {
                answer: answer.toString(),
                question: seq[ 0 ] + ', ' + seq[ 1 ] + '... ' + seq[ num - 1 ]
            };
        }

        function decimalNum() {
            var num = Math.random() * ( 2000 - 10 ) + 1;
            return num;
        }

        function randomNum( max, min ) {
            var num = Math.floor( ( Math.random() * ( max - min ) ) + min );
            return num;
        }



        function randomFraction() {
            var wholeNum = randomNum( 30, 6 );
            var denominator = randomNum( wholeNum + 5, wholeNum - 5 );
            if ( wholeNum === denominator ) {
                denominator = denominator - randomNum( 5, 2 );
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
                if ( numirator >= denominator ) {
                    for ( var foo = numirator; foo >=
                        denominator; foo -= denominator ) {
                        wholeNum++;
                        numirator -= denominator;
                    }
                }
                simplify();

                function simplify() {
                    for ( var x = 2; x < denominator; x++ ) {
                        if ( numirator % x === 0 &&
                            denominator % x === 0 ) {
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
    }
