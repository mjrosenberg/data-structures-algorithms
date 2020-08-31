/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min;
    let max = 0;
    let sum = 0;
    for (let item of salary){
        sum += item;
        if (item > max){
            max = item;
        }
        if (!min || item < min){
            min = item;
        }
    }
    sum = sum -min -max;
    return sum/(salary.length -2);
};
