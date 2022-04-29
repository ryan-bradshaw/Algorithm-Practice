// // Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// // Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// // - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

let s = "12:40:22AM"

// function timeConversion(s){
//     let newArr = s.split(":")
//     //splits string into array ["HH", "MM", "SSXM"]
//     let period = s[s.length-2]+s[s.length-1]
//     //creates new element to be added in next step that holds the AM/PM component
//     newArr[2] = newArr[2].substring(0,2)
//     //removes the AM/PM from the end of the seconds element
//     newArr.push(period)
//     //re-adds the AM/PM as it's own index at the end of the array

//     // console.log(newArr) //this tests the split of the original array into separate elements

//     newArr[0] = parseInt(newArr[0]) //only the HH will be modified by converting to 24 hour times

//     // console.log(newArr) //checks to make sure the HH:MM:SS are parsed into numbers, could be rewritten as for-loop 

//     if(newArr[3] === "PM"){
//         newArr[0] += 12
//         if(newArr[0] == 24){
//             newArr[0] = 0
//         }
//     }


//     if(newArr[0] <= 9){ //if the HH is a single digit, convert to string and then concat a leading 0
//         newArr[0] = newArr[0].toString()
//         newArr[0] = "0" + newArr[0]
//     } else {
//         newArr[0] = newArr[0].toString() //only the HH is modified by 24 hour time
//     }

//     // console.log(newArr) //check to make sure newArr[0] is a string again
//     newArr.pop()

//     // console.log(newArr) //check to make sure the AM/PM element is removed

//     let militaryTime = newArr.join(":")
//     // console.log(militaryTime) //checks the final result
//     return militaryTime
// }

// console.log(timeConversion(s));

//above solution is failing to work for AM times... it's still adding 12 despite the if statement???

//ALTERNATE SOLUTION

function timeConversion2(s) {
    // Write your code here
    let hours = s.substr(0, 2);
    let minutes = s.substr(3, 2);
    let seconds = s.substr(-4, 2);
    let modifier = s.substr(-2, 2);
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    let time = `${hours}:${minutes}:${seconds}`;
    return time;
}

console.log(timeConversion2(s));

