// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
//------------------------------------------------------------------
// You must write an algorithm with O(log n) runtime complexity.
// Space complexity O(1)
//------------------------------------------------------------------

// let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21]
let nums = [2, 5]
let target = -5
// expected output, 1 which is the index of the target


function binarySearch(nums, target){
    
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(target == nums[mid]){
            return mid;
        }
        else if(target < nums[mid]){
            right = mid -1;
        }
        else if(target > nums[mid]){
            left = mid +1; 

        }
    }
    return -1;

}

console.log(binarySearch(nums, target))
binarySearch(nums, target);
