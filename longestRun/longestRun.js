/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string) {
    if (string === "") return [0, 0];
    let obj = {};

    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]] === 0 || obj[string[i]]) {
            obj[string[i]] += 1;
        }
        if (!obj[string[i]]) {
            obj[string[i]] = 0;
        }

    }

    let values = Object.values(obj)

    let min = Math.min(...values)
    let max = Math.max(...values)
    return [min, max]
}
=======



>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
