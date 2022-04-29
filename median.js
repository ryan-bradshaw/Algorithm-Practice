// arr = [0, 1, 2, 4, 6, 5, 3]
arr = [1, 2, 3, 4]

function findMedian(arr){
    arr = arr.sort(function(a, b){return a-b});
    let median
    
    if(arr.length % 2 == 0){
        let evenMidHigh = arr[arr.length/2]
        // console.log("even mid high: " + evenMidHigh)
        
        let evenMidLow = arr[(arr.length/2)-1]
        // console.log("even mid low: " + evenMidLow)

        median = (evenMidHigh + evenMidLow)/2
        console.log(median)

    } else {
        median = arr[(Math.floor(arr.length/2))]
        console.log(median)
    }

}

findMedian(arr);
