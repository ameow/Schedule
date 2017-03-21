var app = angular.module('app', ['ngRoute', 'growlNotifications', '720kb.tooltips', 'ui.materialize']); //ngRoute dependency injection

app.config(function ($routeProvider) {
    
    $routeProvider.

        when('/', {
            templateUrl: 'inbox/inbox.html',
            controller: 'InboxController'
        })
        .when('/tables', {
            templateUrl: 'tables/tables.html',
            controller: 'TablesController'
        })
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        })
        .otherwise({ redirectTo: '/' });
});

