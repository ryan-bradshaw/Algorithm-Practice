// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

let nums = [0, 3, 5, 1, 0, 2, 0]

function moveZeroes(nums){
    console.log("Input: "+ nums)
    let temp = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[temp] = nums[i]; //slower pointer; 
            nums[i] = temp == i? nums[i]: 0; //if temp == current index i, do nothing, otherwise set to zero
            temp++;
        }
    }
    console.log("Output: " + nums)
}


moveZeroes(nums);