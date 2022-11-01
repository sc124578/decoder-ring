// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect

describe("Substitution", () => {
    describe("Errors", () => {
        it("Should return false if the submitted alphabet is missing", () => {
            const message = "messgae";
            const actual = substitution(message);
            expect(actual).to.be.false;
        })
        it("Should retunr false if provided alphabet is not 26 characters long", () => {
            const message = "message";
            const alphabet = "notlongenough"
            const actual = substitution(message, alphabet)
            expect(actual).to.be.false
        })
        it("Should return false if the submitted alphbet does not contain special characters", () => {
            const message = "message"
            const alphabet = "abcabcabcabcabcabcabcabcab"
            const actual = substitution(message, alphabet)
            expect(actual).to.be.false
        })
    })
    describe("Encode", () => {
        it("Should use the submitted alphabet to encode a message", () => {
            const message = "abcdef"
            const alphabet = "poiuytrewqlkjhgfdsamnbvcxz"
            const actual = substitution(message, alphabet)
            const expected = "poiuyt"
            expect(actual).to.equal(expected)
        })
        it("Should be able to use any key", () => {
            const message = "abcdef"
            const alphabet = "][poiuytrewq';lkjhgfdsamnb"
            const actual = substitution(message, alphabet)
            const expected = "][poiu"
            expect(actual).to.equal(expected)
        })
        it("Should ignore spaces", () => {
            const message = "abcd ef"
            const alphabet = "poiuytrewqlkjhgfdsamnbvcxz"
            const actual = substitution(message, alphabet)
            const expected = "poiu yt"
            expect(actual).to.equal(expected)
        })
    })
    describe("Decode", () => {
        it("Should use the submitted alphabet to decode a message", () => {
            const message = "poiuyt"
            const alphabet = "poiuytrewqlkjhgfdsamnbvcxz"
            const actual = substitution(message, alphabet, false)
            const expected = "abcdef"
            expect(actual).to.equal(expected)
        })
        it("Should decode any key", () => {
            const message = "][poiu"
            const alphabet = "][poiuytrewdxq';lkjhgfdsamnb"
            const actual = substitution(message, alphabet, false)
            const expected = "abcdef"
            expect(actual).to.equal(expected)
        })
        it("Should ignore spaces", () => {
            const message = "poi uyt"
            const alphabet = "poiuytrewqlkjhgfdsamnbvcxz"
            const actual = substitution(message, alphabet, false)
            const expected = "abc def"
            expect(actual).to.equal(expected)
        })
    })
})
