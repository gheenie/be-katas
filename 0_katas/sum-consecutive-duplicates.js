// Please do not change the name of this function
const sumConsecutiveDuplicates = (arr) => {
  const nums = JSON.parse( JSON.stringify(arr) );

  let previousNum = nums.pop();
  let subtotal = previousNum;
  const summedNums = [];
  
  for (let i = nums.length - 1; i > -1; i--) {
    const currentNum = nums[i];
    
    if (currentNum === previousNum) {
      subtotal += nums.pop();
    } else {
      summedNums.push(subtotal);
      previousNum = nums.pop();
      subtotal = previousNum;
    }

    if (i === 0) summedNums.push(subtotal);
  }

  return summedNums.reverse();
};

function reduceConsecutives(arr) {
  let reducedNums = sumConsecutiveDuplicates(arr);

  if ([... new Set(arr)].length !== arr.length) reducedNums = reduceConsecutives(reducedNums);
  
  return reducedNums;
}

module.exports = { sumConsecutiveDuplicates, reduceConsecutives };
