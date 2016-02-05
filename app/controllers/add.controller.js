(function() {
'use strict';

    angular
        .module('app.controllers')
        .controller('AddController', AddController);

    AddController.$inject = ['DataService'];
    function AddController(DataService) {
        var vm = this;
        
        vm.item = {};
        vm.add = add;
        
        activate();

        ////////////////
        function add(item) {
            vm.item = {};
            DataService.add(item);
        }

        function activate() { }
    }
})();