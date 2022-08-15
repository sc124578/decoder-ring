const { caesar } = require("../src/caesar"); //this is the function this test will be testing 
const expect = require("chai").expect // this shows which testing library will be used

describe("Caesar Shift", () => { // This first describe shows what overall the test is.//
    console.log("test caesar function", caesar)
    describe("Encript", () => { // This second describe shows the sub item we are in.//

        describe("Positive Shift", () => {  // Another sub item.//

                it("Should show a move to the right equal to a positive number given to it.", () => {

                    const input = "thinkful" //This is the input we are putting in the test the function//
                    const shift = 3 // This is the shift we are putting in to test the function//
                    const expected = "wklqnixo" // This is our expected result//
                    const actual = caesar(input, shift) // This is what is being sent from the function to be test against the expected//
                expect(actual).to.be.equal(expected) //Just the syntaxed code from testing
                })

                it("Should be able to move multiple words", () => {

                    const input = "this is a secret message"
                    const shift = 8
                    const expected = "wklv lv d vhfuhw phvvdjh"
                    const actual = caesar(input, shift)
                expect(actual).to.be.equal(expected)
                })

                it("Should wrap around alphabet.", () => {
                    const input = "z"
                    const shift = 3 
                    const expected = "c"
                    const actual = caesar(input, shift)
                expect(actual).to.be.equal(expected)
                })
        })

        describe("Negative Shift", () => {
                it("Should show a move to the left equal to a negative number given to it.", () => {

                    const input = "thinkful"
                    const shift = -3
                    const expected = "qefkhcri"
                    const actual = caesar(input, shift)
                expect(actual).to.be.equal(expected)
                })

                it("Should be able to move multiple words", () => {

                    const input = "this is a secret message"
                    const shift = -8
                    const expected = "qefp fp x pbzobq jbppxdb"       
                    const actual = caesar(input, shift)
                expect(actual).to.be.equal(expected)
                })
                
                it("Should wrap areound alphabet.", () => {
                    const input = "a"
                    const shift = -3
                    const expected = "x"
                    const actual = caesar(input, shift)
                expect(actual).to.be.equal(expected)
                })
        })
    })


    describe("Decript", () => {
        
        describe("Positive Decript", () => {
         
            it("Should decript single word.", () => {

                const input = "qefkhcri"
                const shift = 3
                const expected = "thinkful"
                const actual = caesar(input, shift, false)
            expect(actual).to.be.equal(expected)
            })

            it("Should decript multiple words.", () => {

                const input = "qefp fp x pbzobq jbppxdb"
                const shift = 8
                const expected = "this is a secret message"
                const actual = caesar(input, shift, false)
            expect(actual).to.be.equal(expected)
            })

            it("Should decript wrap around.", () => {

                const input = "x"
                const shift = 3
                const expected = "a"
                const actual = caesar(input, shift, false)
            expect(actual).to.be.equal(expected)
            })

            
        })
    })

        describe("Negative Decript", () => {

            it("Should decript a single word the other way.", () => {

                const input = "wklqnixo"
                const shift = -3
                const expected = "thinkful"
                const actual = caesar(input, shift)
            expect(actual).to.be.equal(expected)
        })

            it("Should decript multiple words the pther way", () => {

                const input = "wklv lv d vhfuhw phvvdjh"
                const shift = -8
                const expected = "this is a secret message"
                const actual = caesar(input, shift)
            expect(actual).to.be.equal(expected)
        })

            it("Should wrap around the other way", () => {

                const input = "a"
                const shift = -3
                const expected = "x"
                const actual = caesar(input, shift)
            expect(actual).to.be.equal(expected)
        })
    })
})

    describe("Case sensativity", () => {

        it("Should return lower case whether upper or lower case is used for one word.", () => {

            const input = "ThInKfUl"
            const shift = 3
            const expected = "wklqnixo"
            const actual = caesar(input, shift)
        expect(actual).to.be.equal(expected)
        })
})
    describe("Numbers", () => {

        it("Should return the numbers given and not change them.", () => {

            const input = "thinkful 10"
            const shift = 3
            const expected = "wklqnixo 10"
            const actual = caesar(input, shift)
        expect(actual).to.be.equal(expected)
        })
    })

    describe("False", () => {

        it("Should return false if no input is given", () => {

            const shift = 3
            const actual = caesar(undefined, shift)
        expect(actual).to.be.false

        })
        it("Should return false if the shift is equal to 0", () => {

            const input = "not seen"
            const shift = 0
            const actual = caesar(input, shift)
        expect(actual).to.be.false
        })

        it("Should return false if the shift is greater than 25", () => {

            const input = "not seen"
            const shift = 26
            const actual = caesar(input, shift)
        expect(actual).to.be.false
        })

        it("Should return false if the shift is less than -25", () => {

            const input = "not seen"
            const shift = -26
            const actual = caesar(input, shift)
        expect(actual).to.be.false
        })
    })