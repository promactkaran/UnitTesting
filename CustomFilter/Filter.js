var app = angular.module('CustomFilter', []);

app.filter('reverse', function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
})
