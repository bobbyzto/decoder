const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests written by Robert Weche", () => {
    describe("encoding a message", () => {
        it("should translate the letters i and j to 42", () => {
            const input = "jest is another test suite";
            const actual = polybius(input);
            const expected = "42513444 4234 11334344325124 44513444 3454424451";

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const input = "Thinkful";
            const actual = polybius(input);
            const expected = "4432423352125413";

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces within the message", () => {
            const input = "bananas in pajamas";
            const actual = polybius(input);
            const expected = "21113311331134 4233 53114211231134";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("should translate 42 to (i/j)", () => {
            const input = "4432423352125413";
            const actual = polybius(input, false);

            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("should ignore capital letters", () => {
            const input = "211124315113433311";
            const actual = polybius(input, false);
            const expected = "barcelona";

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces within the message", () => {
            const input = "21113311331134 4233 53114211231134";
            const actual = polybius(input, false);
            const expected = "bananas (i/j)n pa(i/j)amas";

            expect(actual).to.equal(expected);
        });
    });
});
