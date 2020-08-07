/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var ans = [];
  var wackyArray = getWeirdAnagramArray(string);
  for (array of wackyArray){
    // for (item of array){
    //   ans.push(item.slice(0,string.length));
    // }
    ans = ans.concat(array);
  }
  return ans;




};
getWeirdAnagramArray = (string) =>{
  var ans = [];
  if (string.length === 1){
    return [string];
  }
  for (var i = 0; i< string.length; i++){
    var character = string[i];
    // console.log('new recursive call with', character, 'as the start point');
    // console.log('new loop with index', i);
    var restOfChars = string.slice(0,i) + string.slice(i+1,string.length);
    //console.log('the rest of the characters to add to', character, 'through a recursive call are ', restOfChars);
    anagramArray = allAnagrams(restOfChars);
    //console.log(anagramArray);
    ans.push(anagramArray.map((anagram)=>character + anagram));
  }
  return ans;
}


var anagrams = allAnagrams('debitcard');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
//[c]->[bc]->[bc, cb] -> [abc, acb], [b]->[ac]->[ac,ca]->[bac,bca]...