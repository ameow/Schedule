'use strict';

(function () {
    var injections = [
        '$scope',
        'TablesService'
    ];

    function TablesController($scope, TablesService) {
        $scope.modalData = [
            {
                course: 3,
                specialty: 'CS',
                group: 1,
                students: 24
            },
            {
                course: 2,
                specialty: 'CS',
                group: 2,
                students: 25
            },
            {
                course: 1,
                specialty: 'CS',
                group: 3,
                students: 26
            }
        ];
    }

    TablesController.$inject = injections;

    angular.module('app')
        .controller('TablesController', TablesController);
})();
