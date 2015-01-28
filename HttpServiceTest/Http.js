var app = angular.module('Http', []);



app.controller('NewCtrl', function ($scope, $http) {
  $http.get('url').success(function (data) {
    $scope.list = data;
  })
});

