// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. 
// Instead, you create an integer array whose index range covers the entire range of values 
// in your array to sort. Each time a value occurs in the original array, you increment the 
// counter at that index. At the end, run through your counting array, printing the value of
// each non-zero valued index that number of times.

// Example

// All of the values are in the range , so create an array of zeros, . The results of each iteration follow:

// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]
// The frequency array is . These values can be used to create the sorted array as well: .

// Note
// For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

let arr = [1, 1, 3, 2, 1]


function countingSort(arr){
    console.log("Input array: " + arr)

    let sortedArr = []
    
    for(let a = 0; a < 100; a++){
        sortedArr.push(0)
    }
    // console.log(sortedArr.length)

    for(let i = 0; i < arr.length; i++){
        sortedArr[arr[i]] += 1
    }
    console.log(sortedArr)

    return sortedArr
}


countingSort(arr);


