// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const checkLength = (str) => {
    return str && str.length === 26;
  }

  const isUnique = (str) => {
  return new Set(str).size == str.length;
}
  const alphabetInOrder = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, substituteAlphabet, encode = true) {
    if (!checkLength(substituteAlphabet) || !isUnique(substituteAlphabet)) return false;
    if (!encode) {
      // In Decode mode, the indexes of alphabetInOrder and substituteAlphabet are matched
      return input
      // ignore capital letters
      .toLowerCase()
      // convert input to array of single character strings
      .split('')
      .map(char => {
        // find the index of each input character in within substitute alphabet
        let index = substituteAlphabet.indexOf(char);
        let alphabetArr = substituteAlphabet.split('');
        // spaces and special characters not in substituteAlphabet are returned without modification
        if (!alphabetArr.includes(char)) return char;
        // map the character with the matching index from alphabetInOrder to the array
        return alphabetInOrder[index];
    })
    // convert array to string
    .join('');
    }
    // In Encode mode, alphabetInOrder and substituteAlphabet swap
    return input
    // ignore capital letters
    .toLowerCase()
    // convert input to array
    .split('')
    .map(char => {
      // find the index of each input character within alphabet
      let index = alphabetInOrder.indexOf(char);
      let alphabetArr = alphabetInOrder.split('');
      // spaces and special characters not in alphabetInOrder are returned without modification
      if (!alphabetArr.includes(char)) return char;
      // map the character with the matching index from substituteAlphabet to the array
      return substituteAlphabet[index];
    })
    // convert array to string
    .join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
