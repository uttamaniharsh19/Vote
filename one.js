var app = angular.module('electionApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'main.html',
            controller: 'MainController'
        })
        .when('/voter-registration', {
            templateUrl: 'voter-registration.html',
            controller: 'VoterRegistrationController'
        })
        .when('/election-analysis', {
            templateUrl: 'election-analysis.html',
            controller: 'ElectionAnalysisController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('MainController', function ($scope) {
    $scope.introduction = "Explore election management with our informative pages.";
});

app.controller('VoterRegistrationController', function ($scope) {
    // Controller logic for Voter ID Registration page
});

app.controller('ElectionAnalysisController', function ($scope) {
    // Controller logic for Election Analysis page
});