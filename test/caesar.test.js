const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests written by Robert Weche", () => {
    describe("error handling", () => {
        it("should return false if the shift is 0", () => {
            const input = "Zebra Magazine";
            const shift = 0;
            const actual = caesar(input, shift);

            expect(actual).to.be.false;
        });

        it("should return false if the shift is over 25", () => {
            const input = "Zebra Magazine";
            const shift = 33;
            const actual = caesar(input, shift);

            expect(actual).to.be.false;
        });

        it("should return false if the shift is under -25", () => {
            const input = "thinkful";
            const shift = -50;
            const actual = caesar(input, shift);

            expect(actual).to.be.false;
        });
    });
    describe("encoding a message", () => {
        it("should encode a cipher by shifting the characters", () => {
            const input = "Bananas in pajamas";
            const shift = 6;
            const actual = caesar(input, shift);
            const expected = "hgtgtgy ot vgpgsgy";

            expect(actual).to.equal(expected);
        });

        it("should not shift spaces and special characters", () => {
            const input = "Bananas in pajamas";
            const shift = 6;
            const actual = caesar(input, shift);
            const expected = "hgtgtgy ot vgpgsgy";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const input = "This is a secret message!";
            const shift = 8;
            const actual = caesar(input, shift);
            const expected = "bpqa qa i amkzmb umaaiom!";

            expect(actual).to.equal(expected);
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const input = "Bananas in pajamas";
            const shift = 6;
            const actual = caesar(input, shift);
            const expected = "hgtgtgy ot vgpgsgy";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("should decode a cipher by shifting the letters in the opposite direction", () => {
            const input = "hgtgtgy ot vgpgsgy";
            const shift = 6;
            const actual = caesar(input, shift, false);
            const expected = "bananas in pajamas";

            expect(actual).to.equal(expected);
        });

        it("should not shift spaces and special characters", () => {
            const input = "hgtgtgy ot vgpgsgy";
            const shift = 6;
            const actual = caesar(input, shift, false);
            const expected = "bananas in pajamas";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const input = "BPQA qa I amkzmb umaaiom!";
            const shift = 8;
            const actual = caesar(input, shift, false);
            const expected = "this is a secret message!";

            expect(actual).to.equal(expected);
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const input = "hgtgtgy ot vgpgsgy";
            const shift = 6;
            const actual = caesar(input, shift, false);
            const expected = "bananas in pajamas";

            expect(actual).to.equal(expected);
        });
  });
})
