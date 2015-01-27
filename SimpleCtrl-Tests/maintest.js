describe("Controller test", function () {
    var controller;
    beforeEach(module("newApp"));
    beforeEach(inject(function($controller){
    controller= $controller("SomeCtrl");

    }));
    describe("Controller Scope test", function () {
       it("should have a array of 2 objects", function () {
          expect(controller.obj.length).toBe(2);
          })
    })

    describe("Controller Scope test", function () {
        it("should have a array with first name as something", function () {
            expect(controller.obj[0].name).toBe("something");
             })
    })


    describe("Controller Scope test", function () {
        it("should add object to array", function () {
            controller.addone();
            expect(controller.obj.length).toBe(3);
        })
    })


    describe("Controller Scope test", function () {
        it("should remove one object from array", function () {
            controller.removeone();
            expect(controller.obj.length).toBe(1);
        })
    })


})
