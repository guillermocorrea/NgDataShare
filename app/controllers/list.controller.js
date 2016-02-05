(function() {
'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    ListController.$inject = ['DataService'];
    function ListController(DataService) {
        var vm = this;
        
        vm.items = [];

        activate();

        ////////////////

        function activate() { 
            vm.items = DataService.getItems();
        }
    }
})();