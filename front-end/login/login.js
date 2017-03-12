// 'use strict';
//
// (function () {
//     angular.module('login', []);
// })();
//
'use strict';

(function () {
    var injections = [
        //'$stateProvider'
    ];

    // function config($stateProvider) {
    //     $stateProvider
    //         .state('login', {
    //             url: '/login',
    //             templateUrl: 'login.html',
    //             controller: 'LoginCtrl'
    //         });
    // }

    config.$inject = injections;

    angular.module('app')
        .config(config);
})();