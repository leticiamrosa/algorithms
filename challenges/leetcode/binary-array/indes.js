var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count = 0;
        } else {
            count ++
            result = Math.max(result, count);
        }
    }
    
    return result
};

/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 */