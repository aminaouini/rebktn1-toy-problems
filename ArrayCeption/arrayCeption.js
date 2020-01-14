// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

function arrayCeption(arr) {
    let result = 0;
    if (arr[0]) {
        result++;
    }

    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (Array.isArray(e) && e[0]) {
            result++;
            if (e[1]) {
                let count = 0;
                while (e.length !== count) {
                    if (Array.isArray(e[count]) && e[count][0]) result++;
                    count++;
                }
            }


        }

    }

    return result;
}