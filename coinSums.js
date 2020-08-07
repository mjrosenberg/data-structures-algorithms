/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/
var makeChange = function(total) {
  if (total === 0 || total === 1){
    return 1;
  }
  var count = 0;
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var createChange = (index, remaining) => {
    var currCoin = coins[index];
    if (index === coins.length - 1) {
      if ((remaining % currCoin) === 0){
        count++;
      }
      return;
    }
    while (remaining >= 0){
      createChange(index + 1, remaining);
      remaining -= currCoin;
    }
  }
  createChange(0, total);
  return count;
};
//not working bc its decreasing the limit every time with each coin
// console.log(makeChange(50));
