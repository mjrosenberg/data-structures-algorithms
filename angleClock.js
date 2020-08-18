/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let angle = 0;
    let hourPos = 360*(hour/12);
    let minutePos = 360*(minutes/60);
    if (hourPos >= 360){
        hourPos -= 360;
    }
    if (minutePos >= 360){
        minutePos -= 360;
    }
    hourPos += (minutes/60)*30;
    console.log(hourPos, minutePos);
    if (minutePos > hourPos){
        angle = minutePos - hourPos
    } else {
        angle = hourPos - minutePos;
    }
    return Math.min(angle, 360 - angle);
};
