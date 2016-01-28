angular.module( 'UILPractice' )
    .controller( 'HelpController', HelpController );

    HelpController.$inject = ["service"];
    function HelpController(service) {
        var vm = this;
        vm.service = service;
    }
