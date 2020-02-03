/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
    if (Math.sign(n) || Math.sign(n) === 0) {
        if (n === 0) {
            return 0
        }
        return n + sumOfPrimes(n - 1)
    }

    return 'your input is not positive number'
}
