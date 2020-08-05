var maxProfit = function(prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++){
      currBuy = prices[i];
      for (let j = i + 1; j < prices.length; j++){
        currSell = prices[j];
        if ((currSell- currBuy) > max){
          max = currSell- currBuy;
        }
      }
    }
    return max;
};
