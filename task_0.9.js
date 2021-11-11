function vowelDetection(input) {
  const lowerCaseInput = input.toLowerCase();
  const allVowels = [];
  for (let i = 0; i < lowerCaseInput.length; i++) {
    if (
      lowerCaseInput[i] == "a" ||
      lowerCaseInput[i] == "e" ||
      lowerCaseInput[i] == "i" ||
      lowerCaseInput[i] == "o" ||
      lowerCaseInput[i] == "u"
    ) {
      allVowels.push(lowerCaseInput[i]);
    }
  }

  const singleVowels = new Set(allVowels);
  console.log(`Vowels: ${Array.from(singleVowels).join(", ")}`);
}
vowelDetection("Umuzi");
