describe("Unit : Factory Test", function () {
    var controller, scope;
    beforeEach(module("newApp"));

    var mockfactory={list: ['list1', 'list2'],
                    get: function () {
                        return this.list;
                    },
                    put: function (data) {
                        return  this.list.push(data)
                    }
    };

    it("should return 2 element as a factory get function", inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller("SomeCtrl", {$scope: scope , somestorage:mockfactory})
            expect(scope.list.length).toBe(2);
        })
    );
        describe("Unit : Factory", function () {
            it("should add one more object to factory after factory's push function", inject(function($rootScope, $controller){
                var newdata= "list3";
                mockfactory.put(newdata);
                scope= $rootScope.$new();
                controller = $controller("SomeCtrl", {$scope:scope, somestorage:mockfactory})
                expect(scope.list.length).toBe(3)

            }))
        })
});
