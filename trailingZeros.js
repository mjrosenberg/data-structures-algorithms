/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++){
        fact  = fact*i;
    }
    // console.log(fact);
    let count = 0;
    while (fact%10 === 0){
        count++;
        fact = fact/10;
        // console.log('count is now', count, 'fact is now', fact);
    }
    return count;
};
