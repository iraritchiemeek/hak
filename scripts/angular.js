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
    $scope.gallery = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', ]  
    $scope.tracks = ['Aura', 'Look Forward To', 'She Say', 'Hues', 'No Days Off', 'Ambrosia', 'Solitude', 'Coral', 'Pollen', 'Lenox', 'Concrete Waves', 'Bedroom Record', '423 Hz', 'Order In Nature', 'June']
    $scope.index = 0
    $scope.playing_track = true
    $scope.current_track

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

    $scope.displayPlayIcon = function ($event, bool) {
        if (bool === true) {
            $($event.target).addClass('music__track-number--play')
        } else {
            $($event.target).removeClass('music__track-number--play')
        }
    }

    $scope.setTrack = function ($event) {
        // get track number
        // use array of track names to set audio object
        // check if track is already loaded
    }

    $scope.playTrack = function($event) {
        $scope.playing_track = !$scope.playing_track
        if (!$scope.playing_track) {
            $($event.target).addClass('music__track-number--pause')
            $scope.current_track = new Audio('../public/album/' + $event.target.parentElement.lastElementChild.innerText + '.mp3')     
            $scope.current_track.play()
            return
        } else {
            $scope.current_track.pause()
            $($event.target).removeClass('music__track-number--pause')
            console.log($scope.playing_track)
            return
        }
    }

});

