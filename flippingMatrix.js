
let arr = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]

//this is only passing 2/8 test cases
function flippingMatrix(arr){
    let sum = 0
    let n = arr.length/2

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            sum += Math.max(Math.max(arr[i][j], arr[i][2*n-j-1]), Math.max(arr[2*n-i-1][2*n-j-1]))
        }
    }
    console.log(sum)
    return sum; 
}

flippingMatrix(arr);
