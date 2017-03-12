var app = angular.module('app', ['ngRoute', 'growlNotifications']); //ngRoute dependency injection

app.config(function ($routeProvider) {
    $routeProvider.

        when('/', {
            templateUrl: 'inbox/inbox.html',
            controller: 'InboxController'
        })
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        })

        //The below will be loaded when url is changed to pageURL/Code2Succeed
        .when('/send-file', {
            templateUrl: 'send-file/send-file.html',
            controller: 'SendFileController'
        })

        //If clicked on any other link from navigation which has not been handled here, will be directed to home page
        .otherwise({ redirectTo: '/' });
});


//Controller Definition

//HomeController which will be injected for home view
app.controller('HomeController', function ($scope) {
    $scope.message = 'Hello from HomeController';
});