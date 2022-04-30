// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example:
const a = [5, 2, 3, 4, 3, 2, 5]

// The unique element is 4

//1 create freq table, then check table for key with value of "1"

function lonelyinteger(a){
    let map = {};
    let unique
    for(let i = 0; i < a.length; i++){ //this loop generates freq. table in object map
        map[a[i]] = (map[a[i]] || 0 ) + 1; 
    };
    console.log(map) //working correctly

    for(let key in map){
        if(map[key] == 1){
            // console.log(key) //working correctly
            unique = key
        }
    }
    console.log(unique) //working correctly
    return unique
}

lonelyinteger(a);
