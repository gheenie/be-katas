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

  // No nested brackets in our desired brackets.
  // Handle situation where there's no more '(', which returns a smaller indexOf('(').
  if (str.indexOf(')') < str.indexOf('(') && str.indexOf('(') !== -1) {
    const indexOnCurrentStr = str.indexOf(')');
    currentIndexOnOriginalStr += indexOnCurrentStr + 1;
    return currentIndexOnOriginalStr;
  }

  // Will be -1 after getting the desired ')'
  // +1 on a nested '(', -1 when that nested '(' is closed, finally -1 AGAIN on our desired ')'
  let currentNestingLevel = 0;
  
  while (currentNestingLevel !== -1) {
    // Handle situation where there's no more '(', which returns a smaller indexOf('(').
    if (str.indexOf('(') < str.indexOf(')') && str.indexOf('(') !== -1) {
      const indexOnCurrentStr = str.indexOf('(');
      currentIndexOnOriginalStr += indexOnCurrentStr + 1;
      str = str.substring(indexOnCurrentStr + 1);
      currentNestingLevel++;
    } else {
      const indexOnCurrentStr = str.indexOf(')');
      currentIndexOnOriginalStr += indexOnCurrentStr + 1;
      str = str.substring(indexOnCurrentStr + 1);
      currentNestingLevel--;
    }
  }

  return currentIndexOnOriginalStr;
}

module.exports = { findClosingParenthesis }
