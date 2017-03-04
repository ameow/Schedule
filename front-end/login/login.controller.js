'use strict';

(function () {
    var injections = [
        '$scope',
        'LoginService'
    ];

    function LoginController($scope, LoginService) {

        $scope.user = {};

        $scope.login = function () {
            LoginService.login($scope.user.email, $scope.user.password).then(function (data) {
                localStorage.setItem('email', $scope.user.email);
                location.href='/main';
            });
        };

        $scope.signUp = function () {
            for (var i = 0; i < 10; i++) {
                setTimeout(function () {
                    console.log(i);
                }, 0);
            }
            // location.href='/sign-up';
        };

    }

    LoginController.$inject = injections;

    angular.module('login')
        .controller('LoginCtrl', LoginController);
})();