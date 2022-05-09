// Given an array, rotate the array to the right by k steps, 
// where k is non-negative.


// Example 1:
// Input: 
//    nums = [1,2,3,4,5,6,7], 
//    k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Follow up:
// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3

function rotateArray(nums, k){
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        arr[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++){
        nums[i] = arr[i];
    }
    console.log(arr)
    return arr
}


rotateArray(nums, k);