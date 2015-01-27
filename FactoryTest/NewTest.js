describe("Trying the Test", function () {
    var scope, location, restService;
    beforeEach(function () {
        var mockservice = {};
        module('TestApp', function ($provide) {
            $provide.value('restService', mockservice);
           });
        inject(function ($q) {
            mockservice.data = [
                {
                    id: 0,
                    name: 'name0'
                },
                {
                    id: 1,
                    name: 'name1'
                },
                {
                    id: 2,
                    name: 'name2'
                },
                {
                    id: 3,
                    name: 'name3'
                }
            ];

            mockservice.getAll = function () {
                var defer = $q.defer();
                defer.resolve(this.data);
                return defer.promise;
            };

            mockservice.create = function (somedata) {
                var defer = $q.defer();
                var id = this.data.length;
                var item = {
                    id: id,
                    name: somedata
                };
                this.data.push(item);
                defer.resolve(item);
                return defer.promise;
            }
        })

    });

    beforeEach(inject(function ($controller, $rootScope, _$location_, _restService_) {
        scope = $rootScope.$new();
        location= _$location_;
        restService = _restService_;
        $controller('SomeCtrl',{$scope:scope, $location:location, restService: restService })

        scope.$digest();

         }));

    it('should contain all the libraries at startup', function() {
        expect(scope.libraries).toEqual([
            {
                id: 0,
                name: 'name0'
            },
            {
                id: 1,
                name: 'name1'
            },
            {
                id: 2,
                name: 'name2'
            },
            {
                id: 3,
                name: 'name3'
            }
        ]);
    });

    it("should create new object to by calling REST create function", function () {
        scope.newItemName = "some name";
        scope.create();

        var lastEntry = scope.libraries[scope.libraries.length - 1];

        expect(lastEntry).toEqual({
            id: 4,
            name: 'some name'
        });
    });

    it("should change the page url to /new/0/details", function () {
        spyOn(location, 'path');
        var listtogo = scope.libraries[0];
        scope.goToDetails(listtogo);
        expect(location.path).toHaveBeenCalledWith('/new/0/details');


    })
});
