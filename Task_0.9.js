function vowelDetection(input) {
    input = input.toLowerCase();
    var allVowels = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") {
        allVowels.push(input[i]);
      } 
    } 
    
    var sortedVowels = allVowels.sort();
    var singleVowels = new Set(sortedVowels);
    console.log("Vowels: " + Array.from(singleVowels).join(', '));
  } 
  vowelDetection("Umuzi");


