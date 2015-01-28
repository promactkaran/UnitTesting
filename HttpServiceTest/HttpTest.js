describe('$http Test', function () {
   describe('Controller', function () {
       var scope, controller, http;

       beforeEach(module('Http'));

       beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        http= _$httpBackend_;
        http.expectGET('url').respond([{name:"karan"},{name:"some"}]);
        scope= $rootScope.$new();
        controller = $controller('NewCtrl',{$scope:scope})
       }));

       it("should return data from json", function () {
           expect(scope.list).toBeUndefined();
           http.flush();

           expect(scope.list).toEqual([{name:"karan"},{name:"some"}]);
       });
   });





});

