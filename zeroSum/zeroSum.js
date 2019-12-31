/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

function zeroSum(arr) {
    let cur;
    let ind = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            cur = arr[i]
        }

        if (arr[i] + cur === 0) return true
        if (i === arr.length - 1 && ind !== arr.length) {
            ind++;
            cur = arr[ind]
            i = ind
        }
    }

    return false
}