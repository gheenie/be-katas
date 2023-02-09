// Please do not change the name of this function
const findClosingParenthesis = (str, openBracketCount) => {
  if (str === '' || openBracketCount === undefined) return -1;

  // The index we would be at if str was not being substringed.
  let currentIndexOnOriginalStr = 0;

  // Get the index of the desired '(', update currentIndexOnOriginalStr, then substring the portion after that.
  for (let i = 0; i < openBracketCount; i++) {
    const indexOnCurrentStr = str.indexOf('(');
    currentIndexOnOriginalStr += indexOnCurrentStr + 1;
    if (i === 0) currentIndexOnOriginalStr--;
    str = str.substring(indexOnCurrentStr + 1);
  }

  // Will be -1 after getting the desired ')'
  // +1 on a nested '(', -1 when that nested '(' is closed, finally -1 AGAIN on our desired ')'
  let currentNestingLevel = 0;

  for (let i = 0; i < str.length; i++) {
    currentIndexOnOriginalStr++;

    const currentChar = str[i];

    if (currentChar === ')') {
      currentNestingLevel--;
    } else if (currentChar === '(') {
      currentNestingLevel++;
    }
    
    if (currentNestingLevel === -1) return currentIndexOnOriginalStr;
  }

  return currentIndexOnOriginalStr;
}

module.exports = { findClosingParenthesis }
