'use strict';

(function () {
    var injections = [
        '$http'
    ];

    function TablesService($http) {
        

    }

    TablesService.$inject = injections;

    angular.module('app')
        .service('TablesService', TablesService);
})();

