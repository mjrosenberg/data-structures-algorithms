/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n===0){
        return false;
    }
    if (n === 1){
        return 0;
    }
    if (n===2){
        return 0;
    }
    if (n===3){
        return 1;
    }
    let count = 1;
    let curr = 3;
    while (curr < n){
        // console.log(curr);
        if(checkPrime(curr)){
            count++;
        }
        curr++;
    }
    return count;
};

let checkPrime = (n) => {
    if (n===1){
        return false;
    }
    if (n === 2){
        return true;
    }
    if (n%2 === 0){
        return false
    }
    for (let i = 3; i <= Math.sqrt(n); i+=2){
        // console.log('checking if',n, 'is divisible by', i)
        if (n%i === 0){
            return false;
        }
    }
    return true;
}
