var app = angular.module("newApp",[ ] );

app.factory("somestorage", function () {

    var somedata=[];
    somedata.push = function (data) {
        somedata.push(data);
        return somedata;
   };
    somedata.get = function () {
        return somedata;
    };
    somedata.clear= function () {
        somedata = '';
    };
    return somedata;

});

app.controller("SomeCtrl", function ($scope,somestorage) {
      $scope.list = somestorage.get();

      var  data = "nonsense";
      $scope.newdata = function (data) {
          somestorage.push(data);
      }


});

