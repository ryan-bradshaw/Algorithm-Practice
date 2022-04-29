let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let positives = 0
    let zeroes = 0
    let negatives = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positives += 1
        }
        else if(arr[i] == 0){
            zeroes += 1
        }
        else if(arr[i] < 0){
            negatives += 1
        }
        else{
            console.log("Error: array contains data types other than numbers")
        }
    }

    positives = positives/arr.length
    negatives = negatives/arr.length
    zeroes = zeroes/arr.length
    

    console.log("Ratio of Positive Values:" + positives)
    console.log("Ratio of Zero Values:" + zeroes)
    console.log("Ratio of Negative Values:" + negatives)

}

plusMinus(arr);