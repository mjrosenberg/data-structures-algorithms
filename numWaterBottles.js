/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let full = numBottles;
    let empty = 0;
    let count = 0;
    while (full > 0){
        count += full;
        empty += full;
        full = 0;
        for (let i = empty; i >= numExchange; i-=numExchange){
            empty -= numExchange;
            full++;
        }
    }
    return count;
};
