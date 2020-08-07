/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  var ans = [];
  var RPS = ["R","P","S"];
  var curr = ""
  for (i = 0; i < 3; i++){
    curr = RPS[i];
    for (j = 0; j< 3; j++){
      curr = RPS[i] + RPS[j];
      for (k = 0; k<3; k++){
        curr= RPS[i] + RPS[j] + RPS[k];
        ans.push(curr);
      }
    }

  }
  return ans;
};

//console.log(rockPaperScissors());