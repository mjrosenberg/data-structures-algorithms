// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  let steps = 0;
  const len1 = str1.length;
  const len2 = str2.length;
  if (str1 === str2){
    return 0;
  }
  if (len1 === len2){
    for (let i = 0; i < len1; i++){
      console.log('string one at', i,'is', str1[i], 'string two at',i,'is', str2[i]);
      if (str1[i] === str2[i]){
        continue;
      } else {
        steps +=1
        str1[i] = str2[i];
      }
      console.log('string one is', str1, 'string two is', str2, 'steps is', steps);
    }
  } else if (len1 < len2){
    //for (let i = 0; i < len1; i++){
    let matches = false;
    let matchesIndex = 0;
    for (let j = 0; j <= len2 - len1; j++){
      console.log('string one at 0 is', str1[0], 'string two at',j,'is', str2[j]);
      if (str1[0] === str2[j]){
        matches = true;
        matchesIndex = j;
      }
    }
    if (matches === true){
      for (i = matchesIndex; i < len1 + matchesIndex; i++){
        console.log('string one at', i,'is', str1[i], 'string two at',i,'is', str2[i]);
        if (str1[i-matchesIndex] === str2[i]){
          continue;
        } else {
          for (let j = i; j <= len1 + matchesIndex; j++){
            console.log('in for loop', str1[i-matchesIndex], str2[j]);
            if (str1[i-matchesIndex] === str2[j]){
              steps -=1;
              break;
            }
          }
          steps +=1
          // str1[i] = str2[i];
        }
      }
    } else {
      steps += len1;
    }
    //}
    steps += len2 - len1;
  } else{

    let matches = false;
    let matchesIndex = 0;
    for (let j = 0; j <= len1 - len2; j++){
      console.log('string two at 0 is', str2[0], 'string one at',j,'is', str1[j]);
      if (str2[0] === str1[j]){
        matches = true;
        matchesIndex = j;
      }
    }
    if (matches === true){
      for (i = matchesIndex; i < len2 + matchesIndex; i++){
        // console.log('string two at', i-matchesIndex,'is', str2[i-matchesIndex], 'string two at',i,'is', str2[i]);
        if (str2[i-matchesIndex] === str1[i]){
          continue;
        } else {
          for (let j = i; j <= len2 + matchesIndex; j++){
            console.log('in for loop', str2[i-matchesIndex], str1[j]);
            if (str2[i-matchesIndex] === str1[j]){
              steps -=1;
              break;
            }
          }
          steps +=1
        }
      }
    } else {
      steps += len1;
    }
    //}
    steps += len1 - len2;
  }
  return steps;

}

console.log(editDistance('messy','messeys'));