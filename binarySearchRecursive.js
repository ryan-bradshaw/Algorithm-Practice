// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
//------------------------------------------------------------------
// You must write an algorithm with O(log n) runtime complexity.
// Space complexity O(1)
//------------------------------------------------------------------

let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21]
let target = 30
// expected output, 1 which is the index of the target


//RECURSIVE METHOD

//THIS MAY HAVE ERRORS ON EDGE CASES such as for nums.length = 0; 

function binarySearch(nums, target){
    return binarySearchHelper(nums, target, 0, nums.length-1);
}

function binarySearchHelper(nums, target, left, right){
    //base case
    if (left > right){
        return -1;
    }

    let mid = Math.floor((left + right)/2);
    
    if(target === nums[mid]){
        return mid;
    }
    else if(target < nums[mid]){
        //recursive call with updated left & right values, here, right = mid -1
        return binarySearchHelper(nums, target, left, mid-1)
    }
    else{
        //recursive call with updated left & right values, here left = mid +1
        return binarySearchHelper(nums, target, mid +1, right)
    }
}

console.log(binarySearch(nums, target));
binarySearch(nums, target);