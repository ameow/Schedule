'use strict';

(function () {
    var injections = [
        '$http'
    ];

    function InboxService($http) {

        this.viewTable = function (id) {
            return $http.post('/view-table/', {id: id}).then(function (response) {
                return response.data
            }, function (error) {
            })
        };

        this.dataDecision = function (id, isCorrect) {
            return $http.post('/data-decision/', {id: id, isCorrect: isCorrect}).then(function (response) {
                return response.data
            }, function (error) {
            })
        };

    }

    InboxService.$inject = injections;

    angular.module('app')
        .service('InboxService', InboxService);
})();

