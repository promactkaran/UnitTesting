describe('Filter : ', function () {
    beforeEach(module('CustomFilter'));

    describe('reverse', function () {
        it("should reverse the string", inject(function(reverseFilter){
        expect(reverseFilter("ABCD")).toBe("DCBA");
        expect(reverseFilter("karan")).toBe("narak");
        }))
    })
})
