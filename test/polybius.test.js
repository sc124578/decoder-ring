// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect
describe("Polybius Shift", () => {
    describe("Encode", () => {
        it("Should encode a messages making each letter a number pair.", () => {
            const message = "message";
            const actual = polybius(message);
            const expected = "23513434112251";
            expect(actual).to.equal(expected);
        })
        it("Should translate I and J to 42", () => {
            const message = "jinx";
            const actual = polybius(message);
            const expected = "42423335";
            expect(actual).to.equal(expected);
        })
        it("Should ignore spaces", () => {
            const message = "hi you";
            const actual = polybius(message);
            const expected = "3242 454354";
            expect(actual).to.equal(expected);
        })

    })
    describe("Decode", () => {
        it("Should decode a message by making each numbered pair into a letter", () => {
            const message = "23513434112251"
            const actual = polybius(message, false);
            const expected = "message";
            expect(actual).to.equal(expected);
        })
        it("Should translate 42 to I and J", () => {
            const message = "42423335";
            const actual = polybius(message, false);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        })
        it("Should ignore spaces", () => {
            const message = "2345 23513434112251";
            const actual = polybius(message, false);
            const expected = "my message"
            expect(actual).to.equal(expected)
        })
        it("Should return false if length of numbers is odd", () => {
            const message = "32425"
            const actual = polybius(message, false)
            expect(actual).to.be.false
        })
    })
})
