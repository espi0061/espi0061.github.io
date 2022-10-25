// isEven
// return true if the provided number is even
// or false if it is odd

function isEven (number) {
    // 4 is even because 4 / 2 has a remainder of 0
    // 3 is odd because 3 / 2 has a remainder of 1
    // % modulus operator returns remainders
    // 4 % 2 === 0 - even
    // 3 % 2 === 1 - odd

    return number % 2 === 0 // if true, even
}

console.log('is 12 even?', isEven(12))
console.log('is 13 even?', isEven(13))

// isPrime
// test if a number is prime 
// return true, if prime
// return false, if not prime

function isPrime (number) {
    // 5 % 4 === 0, if true, then not prime
    // 5 % 3 === 0
    // 5 % 2 === 0
    // then it is prime number
    for (let i = number - 1; i > 1; i--) {
       if (number % i === 0) {
        return false
       } 
    }

    return true
}

console.log('Is 12 prime?', isPrime(12)) // false
console.log('Is 13 prime?', isPrime(13)) // true