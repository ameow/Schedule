'use strict';

(function () {
    var injections = [
        '$scope'
    ];

    function LoginController($scope) {
        

        $scope.user = {};

        $scope.login = function () {
            // LoginService.login($scope.user).then(function (data) {
            //
            // });
        };

    }

    LoginController.$inject = injections;

    angular.module('app')
        .controller('LoginController', LoginController);
})();
