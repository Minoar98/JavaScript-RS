//Input: nums = [2,7,11,15], target = 9 ---- Output: [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let flag = false;
    let firstIndex = -1, secondIndex = -1;
    for (let i = 0; i < nums.length; i++) {
      // 2
        firstIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
          // [7, 11, 15]
          if (nums[i] + nums[j] === target) {
            secondIndex = j;
            flag = true;
            break;
          }
        }

        if (flag) {
          // return [firstIndex, secondIndex]; // ES6 Syntax

          // Vanilla JS Syntax
          const arr = [];
          arr.push(firstIndex);
          arr.push(secondIndex);
          return arr; 
        }
    }

    return []; // If no pair is found, return an empty array
};

console.log(twoSum([2,7,11,15], 9));

// const nums = [2,7,11,15], target = 9;
// twoSum(nums, target);