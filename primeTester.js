/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  if (n === 2){
    return true;
  }
  if (n === 1){
    return false;
  }
  if (n%2 === 0){
    return false;
  }
  // console.log('square root of n', Math.ceil(Math.sqrt(n)));
  for (i = 3; i <= Math.ceil(Math.sqrt(n)) ; i+=2){
    if (n%i === 0){
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  let primes = [];
  for (let i = start; i<=end; i++){
    if (primeTester(i)){
      primes.push(i);
    }
  }
  return primes;
};

console.log(primeTester(25)); //false
console.log(primeTester(31)); //true
console.log(primeSieve(1,100));


