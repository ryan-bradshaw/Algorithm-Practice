// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

function diagonalDifference(arr){
    let upDown = 0
    let downUp = 0
    let length = arr.length
    let upAxis = arr.length -1

    // console.log("testing : " + arr[2][2])

    for(let i = 0; i < arr.length; i++){
        upDown += arr[i][i]
        downUp += arr[upAxis][i]
        // console.log("Up to down " + upDown)
        // console.log("Down to up " + downUp)
        upAxis--
    }

    let difference = Math.abs(upDown - downUp)
    // console.log("Difference = " + difference)
    return difference

}

diagonalDifference(arr);

