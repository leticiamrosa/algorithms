var twoSum = function(nums, target) {
  let result;
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        result = [i, j]
      };
    };
  };
  return result;
};

/**
 * The brute force approach is simple. Loop through each element 
 * xx and find if there is another value that equals to target − x.
 */