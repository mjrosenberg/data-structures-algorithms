var singleNumber = function(nums) {
    let tracker = {};
    for (num of nums){
       if(!tracker[num]){
           tracker[num] = 1;
       } else {
           tracker[num] += 1;
       }
    }
    for (key in tracker){
        if (tracker[key] === 1){
            return key;
        }
    }
};
