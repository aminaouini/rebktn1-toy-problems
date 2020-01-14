
/*
Spiral Traversal

Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

spiralTraversal([
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ]
])

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]


spiralTraversal([
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ]
])

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

spiralTraversal([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ],
  [ 13, 14, 15 ],
  [ 16, 17, 18 ],
  [ 19, 20, 21 ],
  [ 22, 23, 24 ]
])

// output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]])	// [ 1, 2, 3, 4 ]

spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]]) // [ 1, 2, 3, 4, 5, 6, 7 ]
*/

function spiralTraversal(array) {
  let result = [];
  let checker = 1;
  let right = 0;
  let left = 0;
  let up = 0;
  let down = 0;

  // for (let i = 0; i < array.length; i++) {
  //   const elem1 = array[i];

  //   for (let j = 0; j < array.length; j++) {
  //     const elem2 = array[j];

  //     if (j === 0) {
  //       result.push(elem2);
  //     }

  //   }

  // }


  if (checker % 4 === 0) {
    for (let i = array.length - left; i > -1; i--) {
      const elem = array[i];
      if (i !== up) {
        result.push(elem);
      }
    }

    left++;

  } else if (checker % 3 === 0) {
    for (let i = array[down].length; i > -1; i--) {
      const elem = array[up - 1];

      if (i !== down) {
        result.push(elem);
      }
    }

    down++;
  } else if (checker % 2 === 0) {

  }



  return result;
}