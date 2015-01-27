var app = angular.module("newApp",[ ] );


app.controller("SomeCtrl", function () {
    this.obj = [  { name: "something",
                   secondname: "somethingelse"},
                 {
                   name: "anything",
                   secondname: "anythingelse"}
              ];

    this.removeone = function () {
       this.obj.splice(0,1);

    };

    this.addone = function () {
        var data = {name: "forus",
                   secondname :"forthem"};

        this.obj.push(data);
    }
} );
