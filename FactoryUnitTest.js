var app = angular.module('TestApp', []);

app.factory('restService', function() {
    return {
        getAll: function() {
            // Do a $http call to get the data from API
        },
        create: function(itemName) {
            // Do a $http Post request to create new entry to API
        }
    }
});

app.controller('SomeCtrl', function($scope, $location, restService) {
    restService.getAll().then(function(items) {
        $scope.libraries = items;
    });

    $scope.create = function() {
        restService.create($scope.newItemName).then(function(item) {
            $scope.libraries.push(item);
        });
    };

    $scope.goToDetails = function(library) {
        $location.path('/new/' + library.id + '/details');
    };
});
