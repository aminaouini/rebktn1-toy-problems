/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function (x, y) {
  let result = 0;
  for (let i = 0; i < y; i++) {
    result += x;
  }

  return result

};

var helper = function (x, y) {
  let result = 0;
  for (let i = 0; i < y; i++) {
    result += 1;
  }

  return result

};

var divide = function (x, y) {
  let result = 0;
  let remainder = x;

  let helper = 0;
  if (remainder >= y) {
    for (let j = 0; j < remainder; j += y) {
      helper = j;

    }

    // result += y;
    // remainder -= y;
    return helper(y, helper)

  }

  // let result = 0;
  // for (let i = 0; i < y; i++) {
  //   x -= y;
  // }

  // if (condition) {

  // }

  // return x;

  // return remainder
  // let c = 0;
  // while (x > y) {
  //   x -= y;
  //   ++c
  // }
};

var modulo = function (x, y) {
  // your code here...
};
