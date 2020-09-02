/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let change = {5: 0, 10: 0, 20: 0};
    if (bills[0] !== 5){
        return false;
    }
    for (let bill of bills){
        let changeOwed = bill - 5;
        change[bill]++;
        while(changeOwed > 0){
            if (changeOwed >= 10){
                if (change[10] > 0){
                    change[10]--;
                    changeOwed -= 10;
                }
            }
            if (changeOwed >=5){
                if (change[5] > 0){
                    change[5]--;
                    changeOwed -= 5;
                } else {
                    return false;
                }
            }
            if (changeOwed < 5 && changeOwed > 0){
                return false;
            }
        }
    }
    return true;
};
