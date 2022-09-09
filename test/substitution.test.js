const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests written by Robert Weche", () => {
    describe("error handling", () => {
        it("should return false if the given alphabet isn't exactly 26 characters long", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibe";
            const actual = substitution(input, alphabet);

            expect(actual).to.be.false;
        });
        it("should return false if the substitution alphabet is not given", () => {
            const input = "thinkful";
            const actual = substitution(input);

            expect(actual).to.be.false;
        });
        it("should return false if any duplicate characters are present in the given alphabet.", () => {
            const input = "thinkful";
            const alphabet = "abcabcabcabcabcabcabcabcyz";
            const actual = substitution(input, alphabet);

            expect(actual).to.be.false;
        });
    });
    describe("encoding a message", () => {
        it("should correctly translates the given phrase, based on the alphabet given to the function", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = "jrufscpw";

            expect(actual).to.equal(expected);
        });
        it("should work with special characters", () => {
            const input = "asymptote";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet);
            const expected = "$ipyujvj&";

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces within message after encoding", () => {
            const input = "You are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = "elp xhm xf mbymwwmfj dne";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("should correctly translates the given phrase, based on the alphabet given to the function", () => {
            const input = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet, false);
            const expected = "thinkful";

            expect(actual).to.equal(expected);
        });
        it("should work with special characters", () => {
            const input = "$ipyujvj&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet, false);
            const expected = "asymptote";

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces within message after encoding", () => {
            const input = "elp xhm xf mbymwwmfj dne";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet, false);
            const expected = "you are an excellent spy";

            expect(actual).to.equal(expected);
        });
    });
});
