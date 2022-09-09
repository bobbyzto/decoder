// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const encoder = {
  'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
  'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
  'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
  'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
  'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55'
  };
  const decoder = {
    '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
    '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k',
    '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
    '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
    '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'
  };

  const isEven = (message) => {
    // Convert message into array of substrings
    const words = message.split(' ');
    // Check that each substring is divisible by 2
    return (words.every((word) => (word.length % 2) === 0));
  }

  function polybius(input, encode = true) {
    // Choose letters-to-digits or digits-to-letters
    const mode = encode ? encoder : decoder;
    // In Decode mode, if input is odd in length, return false
    if (!encode) {
      if (!isEven(input)) {
        return false;
      }
    }
    // Ignore capital letters
    return input.toLowerCase()
      // make array of two-digit numbers and lowercase letters
      .match(/[0-9]{2}|[a-z]|\s/g)
      // map the value of the matching character or integer key from encoder or decoder to array,
      // or map that character (spaces)
      .map(character => mode[character] || character)
      // stitch array values into a string
      .join('');
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
