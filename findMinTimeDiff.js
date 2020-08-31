/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let min;
    for (let i = 0; i < timePoints.length - 1; i++){
        let time1 = timePoints[i].split(':');
        let hour1 = parseInt(time1[0]);
        let min1 = parseInt(time1[1]);
        for (let j = i+1; j < timePoints.length; j++){
            let time2 = timePoints[j].split(':');
            let hour2 = parseInt(time2[0]);
            let min2 = parseInt(time2[1]);
            let diff = 0;
            if (hour1 === hour2){
                diff = Math.min(Math.abs(min1-min2), Math.min(Math.abs(min2-min1)));
            } else {
                diff += 60*Math.min(Math.abs(hour1-hour2), Math.abs(24 - hour1-hour2));
                if (Math.abs(hour1-hour2) < Math.abs(24 - hour1-hour2) && ((min1> min2 && hour1 > hour2) || (min1< min2 && hour1 < hour2))){
                    diff += Math.abs(min1-min2);
                } else {
                    diff -= Math.abs(min1-min2);
                }
            }
            if (min === undefined || diff < min && diff >=0){
                min = diff;
            }
        }
    }
    return min;
};
