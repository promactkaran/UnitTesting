describe("Factory Unit Test", function () {
 var factory={};
    beforeEach(function () {
        module('myApp');
        inject(function (factorytotest) {
            factory = factorytotest;
        });

        var storage = {data1: 'link1',
                       data2: 'link2',
                       data3: 'link3'};


        spyOn(localStorage, 'getItem').and.callFake(function (any) {//  all calls to the spy will delegate to the supplied function.
                return storage[any]; // simulating a localstorage function

        });
        spyOn(localStorage, 'setItem').and.callFake(function(key, value) {
            return storage[key] = value + '';
        });

        spyOn(localStorage, 'clear').and.callFake(function() {
            storage = {}; // clearing the storage  (localstorage)
        });

        spyOn(Object, 'keys').and.callFake(function(value) {
            var keys=[];

            for(var key in storage) {
                keys.push(key);
            }

            return keys;
        });


    });
    it('should have a get function', function() {   //checking if functions have these methods
        expect(angular.isFunction(factory.get)).toBe(true);
        expect(angular.isFunction(factory.put)).toBe(true);
    });

    it('should return three entry initially', function() { // checking if there are 3 entries initially 
        var result = factory.get();
        expect(result.length).toBe(3);
    });


});
