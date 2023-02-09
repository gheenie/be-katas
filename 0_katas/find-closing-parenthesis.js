// Please do not change the name of this function
const findClosingParenthesis = (str, openBracketCount) => {
  if (str === '' || openBracketCount === undefined) return -1;

  let currentIndex = 0;

  // Go to the index just after the desired '('
  while (openBracketCount !== 0) {
    const currentChar = str[currentIndex];

    if (currentChar === '(') openBracketCount--;

    currentIndex++;
  }

  // Will be -1 on the index of the desired ')'
  // 0 means same level as desired '(' but it's not closed yet
  let currentNestingLevel = 0;

  for ( ; currentIndex < str.length; ) {
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
