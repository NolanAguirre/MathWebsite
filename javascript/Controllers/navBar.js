angular.module( 'UILPractice' )
    .controller( 'NavBarController', NavBarController );

    NavBarController.$inject = ["service"];
    function NavBarController(service) {
        var vm = this;
        vm.service = service;
    }
