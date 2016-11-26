var hakApp = angular.module('hakApp', ['ngRoute']);

hakApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "../pages/home.html",
    })
    .when('/music', {
        templateUrl : "../pages/music.html",
    })
    .when('/photos', {
        templateUrl : "../pages/photos.html"
    })
    .when('/videos', {
        templateUrl : "../pages/videos.html"
    })
    .when('/about', {
        templateUrl : "../pages/about.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});

hakApp.controller('mainController', function($scope, $location) {
    $scope.go = function (path) {
      $location.path(path);
    };
});