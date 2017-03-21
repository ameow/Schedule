'use strict';

(function () {
    var injections = [
        '$scope',
        'InboxService'
    ];

    function InboxController($scope, InboxService) {
        $scope.hello = 'hello';
        $scope.data = [
            {
                id: 'kqjdw',
                theme: 'Teachers'
            },
            {
                id: 'efm',
                theme: 'Groups'
            }
        ];

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

        $scope.viewTable = function (item) {
            $scope.currectItem = item.theme;
            // InboxService.viewTable(item.id).then(function (data) {
            //
            // });
        };

        $scope.dataDecision = function (id, isCorrect) {
            // InboxService.dataDecision(id).then(function (data) {
            //
            // });
        };
    }

    InboxController.$inject = injections;

    angular.module('app')
        .controller('InboxController', InboxController);
})();
