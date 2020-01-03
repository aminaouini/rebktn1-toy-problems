/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

function zeroSum(arr) {
    let obj = {};
    
    for (let i = 0; i < arr.length; i++) {
        if(obj[-(arr[i])]) {
            return true
        }
        if(!obj[arr[i]]){
            obj[arr[i]] = arr[i]
        }
    }

    return false
}