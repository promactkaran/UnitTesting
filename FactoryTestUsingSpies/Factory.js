var app = angular.module("myApp",[]);

app.factory("factorytotest", function () {
    return {
        put: function(note) {
            localStorage.setItem('todo' + (Object.keys(localStorage).length + 1), note);
        },
        get: function () {
            var notes = [];
            var keys = Object.keys(localStorage);

            for(var i = 0; i < keys.length; i++) {
                notes.push(localStorage.getItem(keys[i]));
            }

            return notes;
        },
              clear: function () {
            localStorage.setItem('data','');

        }
       }
});




