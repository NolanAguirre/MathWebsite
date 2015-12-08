angular.module('UILPractice')
    .controller('DisplayController', DisplayController);

    DisplayController.$inject = ["service"];
    function DisplayController(service){
        var vm = this
        vm.service = service
    }
