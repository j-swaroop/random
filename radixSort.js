function getDigits(num, place) {
  for (let i = 0; i < place; i++) {
    num = Math.floor(num / 10);
  }
  return num % 10;
}

function countDigits(num) {
  if (num === 0) return 1;

  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count += 1;
  }
  return count;
}

// console.log(getDigits(12345, 0)); // Output: 5
// console.log(getDigits(12345, 1)); // Output: 4
// console.log(getDigits(12345, 2)); // Output: 3
// console.log(getDigits(12345, 3)); // Output: 2
// console.log(getDigits(12345, 4)); // Output: 1

// console.log(countDigits(0)); // Output: 1
// console.log(countDigits(12345)); // Output: 5

function maxDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++){
        let digitCount = countDigits(nums[i])
        if (digitCount > max){
            max = digitCount
        }
    }
    return max
}


let nums = [123, 4856, 789, 12, 34, 56, 7];

console.log(maxDigits(nums))