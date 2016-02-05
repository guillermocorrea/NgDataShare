(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('DataService', DataService);

    DataService.$inject = [];
    function DataService() {
        var service = {
            add: add,
            getItems: getItems
        };
        
        var items = [];

        return service;

        ////////////////
        function add(item) { 
            items.push(item);
        }
        
        function getItems() {
            return items;
        }
    }
})();