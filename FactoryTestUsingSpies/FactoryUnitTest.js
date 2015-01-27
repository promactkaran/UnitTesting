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


        spyOn(localStorage, 'getItem').and.callFake(function (any) {
                return storage[any];

        });
        spyOn(localStorage, 'setItem').and.callFake(function(key, value) {
            return storage[key] = value + '';
        });

        spyOn(localStorage, 'clear').and.callFake(function() {
            storage = {};
        });

        spyOn(Object, 'keys').and.callFake(function(value) {
            var keys=[];

            for(var key in storage) {
                keys.push(key);
            }

            return keys;
        });


    });
    it('should have a get function', function() {
        expect(angular.isFunction(factory.get)).toBe(true);
        expect(angular.isFunction(factory.put)).toBe(true);
    });

    it('should return three todo notes initially', function() {
        var result = factory.get();
        expect(result.length).toBe(3);
    });


});
