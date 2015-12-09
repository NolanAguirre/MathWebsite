angular.module( 'UILPractice' )
    .controller( 'HelpController', HelpController );

    HelpController.$inject = ["service"];
    function HelpController(service) {
        var vm = this;
        vm.service = service;
        vm.submitAnswer = submitAnswer;
        /*
        function reverse( s ) {
            var o = '';
            for ( var i = s.length - 1; i >= 0; i-- )
                o += s[ i ];
            return o;
        }
        function newProblemClick() {
            vm.service.currentProblem = vm.service.currentProblem.generate();
            vm.service.displayAnswer = '';
            vm.service.showHelp = false;
        }
        */
        function submitAnswer() {
            if ( vm.currentProblem.answer === 0 ) {
                vm.displayAnswer = 'Delightful, You\'ve got it correct';
            } else {
                vm.displayAnswer = 'Incorrect! Correct answer is ' + vm.currentProblem.answer;
            }
        }

    }
