'use strict';

(function () {
    var injections = [
        '$scope',
        'TablesService'
    ];

    function TablesController($scope, TablesService) {
        
        $scope.isEdited = false;
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

        $scope.startEdit = function () {
            $scope.defaultData = angular.copy($scope.modalData);
            $scope.isEdited = !$scope.isEdited;
        };

        $scope.removeEdit = function () {
            $scope.modalData = angular.copy($scope.defaultData);
            $scope.isEdited = !$scope.isEdited;
        };

        $scope.saveEdit = function () {
            $scope.isEdited = !$scope.isEdited;
        };

        $scope.addRow = function () {
          $scope.modalData.push({});
        };
    }

    TablesController.$inject = injections;

    angular.module('app')
        .controller('TablesController', TablesController);
})();
