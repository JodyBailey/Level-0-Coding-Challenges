function vowelDetection(input) {
    input = input.toLowerCase();
    var allVowels = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") {
        allVowels.push(input[i]);
      } 
    } 
    var sortedVowels = allVowels.sort();
    var singleVowels = [new Set(sortedVowels)];
    
    console.log("Vowels: ");
    console.log(singleVowels); /* I know that there is an easier way
                                  I just could not figure out the easier way but this sort of works*/ 
} 


