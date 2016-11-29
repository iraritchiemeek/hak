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
    $scope.video_ids = ['VN4oEB-qtrM', 'b_jx0XvpTVo']
    $scope.gallery = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
    $scope.index = 0

    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.decrementIndex = function(array) {
        if ($scope.index <= 0) {
            $scope.index = array.length -1
        } else {
            $scope.index -= 1
        }
    }

    $scope.incrementIndex = function(array) {
        if ($scope.index >= array.length -1) {
            $scope.index = 0
        } else {
            $scope.index += 1
        }
    }



});