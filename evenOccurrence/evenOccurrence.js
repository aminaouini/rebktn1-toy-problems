/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence(arr) {
    var result = null;
    var counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!result) { result = arr[i]; }
        if (result) { result = arr[i]; }

        for (let j = 0; j < arr.length; j++) {
            if (result === arr[j] && counter === 2) { result = null; counter = 0; }

            if (result === arr[j]) { counter++; }

        }

        if (i === arr.length - 1 && counter === 2) { return result; }

        if (i === arr.length - 1 && counter !== 2) { return null; }
    }

}