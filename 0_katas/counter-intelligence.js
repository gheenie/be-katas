// Please do not change the name of this function
const counterIntelligence = (str) => {
  const shiftCharCodeBy = 'X'.charCodeAt() - str.slice(-1).charCodeAt();
  let shiftedStr = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if ( !/\w/.test(currentChar) ) {
      shiftedStr += currentChar;
    } else {
      let shiftedCharCode = currentChar.charCodeAt() + shiftCharCodeBy;

      while ( shiftedCharCode < 'A'.charCodeAt() ) {
        shiftedCharCode += 26;
      }
  
      while ( shiftedCharCode > 'Z'.charCodeAt() ) {
        shiftedCharCode -= 26;
      }

      shiftedStr += String.fromCharCode(shiftedCharCode);
    }
  }

  return shiftedStr;
};

module.exports = { counterIntelligence };
