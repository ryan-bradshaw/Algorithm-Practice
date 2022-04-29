//given an array of 5 positive integers, find the 
//maximum sum of any 4 and the minimum sum 
//print the respective minimum and maximum values

//pseudocode:
//1. declare min and max variables and set to 0
//2. sort the array numerically
//3. create 2 for-loops (one for min, one for max) to sum either first or last 4 digits
//4. print min & max

let arr = [1, 30, 5, 7, 9]

function miniMaxSum(arr){
    let minSum = 0
    let maxSum = 0

    // console.log("The initial array is: " + arr)
    arr = arr.sort(function(a, b){return a-b});
    // console.log("The array is now: " + arr)

    for(let i = 0; i < arr.length -1; i++){
        minSum += arr[i]
    }
    for(let j = 1; j < arr.length; j++){
        maxSum += arr[j]
    }
    console.log(minSum, maxSum)

}

miniMaxSum(arr);