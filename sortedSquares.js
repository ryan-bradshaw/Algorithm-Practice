// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// 1. square the array
// 2. sort in ascending order

const nums = [-4, -1, 0, 3, 10]

function sortedSquares(nums){
    console.log("Input: " + nums);

    for(let i =0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i]
    }
    // console.log(nums); //square loop is working

    nums = nums.sort(function(a, b){return a-b});
    //standard arr sort

    console.log("Output: " + nums)
    return nums
}

sortedSquares(nums);

//alternate solution from discussions

var sortedSquares2 = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
    }
    
    return result;
};