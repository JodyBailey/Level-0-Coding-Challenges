function commonChar(string1, string2) {
  var allCommonChar = [];
  if (string1.length >= string2.length) { // for the sake of keeping the method in 1 function, I will stack loops
    for (var i = 0; i < string1.length; i++) {
      for (var j = 0; j < string2.length; j++) {
        if (string1[i] == string2[j]) {
          allCommonChar.push(string1[i]);
        }
      }
    }
  } else if (string2.length >= string1.length) {
      for (var k = 0; k < string2.length; k++) {
        for (var l = 0; l < string1.length; l++) {
          if (string2[k] == string1[l]) {
            allCommonChar.push(string2[k]);
         }
        }
      }
    }   
  var singleCommonChar = [new Set(allCommonChar)]
  console.log("Common Letters: ")
  console.log(singleCommonChar);
}  // Also aware there is probably a better way to do this, but this does kind of work.
 

