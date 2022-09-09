// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function textWrapping(char) {
    const code = char.charCodeAt(0)
    if (code < 97) { // wrap around if charCode is beyond a
      return String.fromCharCode(code + 26);
    } else if (code > 122) { // wrap around if charCode is beyond z
      return String.fromCharCode(code - 26);
    } else {
      return char;
    }
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const alphabet = [
      "a", "b", "c", "d", "e",
      "f", "g", "h", "i", "j", "k",
      "l", "m", "n", "o", "p",
      "q", "r", "s", "t", "u",
      "v", "w", "x", "y", "z"
    ];

    // Convert input message to new lowercase string
    return input.toLowerCase()
    // Split string by each character into an array
    .split('')
    // Construct new string with characters properly shifted
    .reduce((result, char) => {
      // ignore special characters and spaces, append to string as found
      if (!alphabet.includes(char)) {
        result += char;
        return result;
      }
      // Get ASCII code of each character
      const code = char.charCodeAt(0);

      // Decoder side
      if (encode === false) {
        // Shift mechanism
        let newChar = String.fromCharCode(((code - 97 - shift) % 26) + 97);
        // Wrapper function prevents overshifting
        newChar = textWrapping(newChar);
        // Append string with new, shifted character
        result += newChar;

      // Encoder side
      } else {
        // Opposite shift to Decoder
        let newChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        newChar = textWrapping(newChar);

        result += newChar;
      }
      // Return appended string
      return result;
    }, '');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
