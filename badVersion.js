//  You are a product manager and currently leading a team to develop a new product. 
//  Unfortunately, the latest version of your product fails the quality check. 
//  Since each version is developed based on the previous version, 
//  all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
// which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. 
// Implement a function to find the first bad version. 

// You should minimize the number of calls to the API.

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

let n = 20
let bad = 20

function isBadVersion(n, bad){
    //use binary search to identify first instance of a bad version
    
    let left = 1;
    let right = n;
    while(left < right){
        let mid = Math.floor((left + right)/2);
        if(n == bad){
            return n
        }
        else if(bad == mid){
            return mid;
        }
        else if(bad < mid){
            right = mid;
            //no -1 because this may be the very FIRST bad version
            //however we don't know that for certain yet
        }
        else if(bad > mid){
            left = mid +1;
            //because the left side is the end of a string of GOOD versions
            //the next chance for a bad version is the one AFTER it
        }
    }

}

console.log(isBadVersion(n, bad));

//solution from platform in JAVA
// public int firstBadVersion(int n) {
//     int left = 1;
//     int right = n;
//     while (left < right) {
//         int mid = left + (right - left) / 2;
//         if (isBadVersion(mid)) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left;
// }