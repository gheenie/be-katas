// Please do not change the name of this function
const findClosingParenthesis = (str, openBracketCount) => {
  if (str === '' || openBracketCount === undefined) return -1;

  // The index we would be at if str was not being substringed.
  let currentIndex = 0;

  // Go to the index just after the desired '('
  while (openBracketCount !== 0) {
    if (str[currentIndex] === '(') openBracketCount--;

    currentIndex++;
  }

  // Will be -1 after getting the desired ')'
  // +1 on a nested '(', -1 when that nested '(' is closed, finally -1 AGAIN on our desired ')'
  let currentNestingLevel = 0;

  for (; currentIndex < str.length; currentIndex) {
    const currentChar = str[currentIndex];

    if (currentChar === ')') {
      currentNestingLevel--;
    } else if (currentChar === '(') {
      currentNestingLevel++;
    }
    
    if (currentNestingLevel === -1) return currentIndex;
    
    currentIndex++;
  }
}

module.exports = { findClosingParenthesis }
