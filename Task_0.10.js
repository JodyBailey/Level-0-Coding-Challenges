function commonChar(string1, string2) {
  const allCommonChar = [];
  if (string1.length >= string2.length) {
    for (let i = 0; i < string1.length; i++) {
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] == string2[j]) {
          allCommonChar.push(string1[i]);
        }
      }
    }
  } else if (string2.length >= string1.length) {
    for (let k = 0; k < string2.length; k++) {
      for (let m = 0; m < string1.length; m++) {
        if (string2[k] == string1[m]) {
          allCommonChar.push(string2[k]);
        }
      }
    }
  }
  const singleCommonChar = new Set(allCommonChar);
  console.log(`Common Letters: ${Array.from(singleCommonChar).join(", ")}`);
}

commonChar("house", "computers");
