'use strict';

(function () {
    var injections = [
        '$scope',
        'LoginService'
    ];

    function LoginController($scope, LoginService) {

        $scope.user = {};

        $scope.login = function () {
            console.log($scope.user);
            // LoginService.login($scope.user).then(function (data) {
            //
            // });
        };

    }

    LoginController.$inject = injections;

    angular.module('app')
        .controller('LoginController', LoginController);
})();
