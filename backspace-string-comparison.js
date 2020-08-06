  let checkStrings = (s, t) => {
    let maxLen = Math.max(s.length, t.length);
    let sTemp = [];
    let tTemp = [];
    for (let i = 0; i < maxLen; i++){
      if (s[i] !== undefined && s[i] !== '#'){
        sTemp.push(s[i]);
      }  else if (s[i] === '#'){
        sTemp.pop();
      }
      if (t[i] !== undefined && t[i] !== '#'){
        tTemp.push(t[i]);
      }  else if (t[i] === '#'){
        tTemp.pop();
      }
    }
    // console.log(sTemp, tTemp);
    // console.log(sTemp.join(''));
    return (sTemp.join('') === tTemp.join(''))
  }
