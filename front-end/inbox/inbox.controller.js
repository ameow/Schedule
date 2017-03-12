'use strict';

(function () {
    var injections = [
        '$scope'
    ];

    function InboxController($scope) {

        $scope.data = [
            {
                sender: 'Cathedra',
                theme: 'Teachers'
            },
            {
                sender: 'Deanery',
                theme: 'Groups'
            }
        ];

    }

    InboxController.$inject = injections;

    angular.module('app')
        .controller('InboxController', InboxController);
})();
