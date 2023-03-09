function letterCombinations(digits) {
  const mappings = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  
  if (digits.length === 0) {
    return [];
  }
  
  const combinations = [""];

  for (let i = 0; i < digits.length; i++) {
    const letters = mappings[digits[i]];
    const newCombinations = [];

    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < combinations.length; k++) {
        newCombinations.push(combinations[k] + letters[j]);
      }
    }

    combinations.splice(0, combinations.length, ...newCombinations);
  }

  return combinations.sort();
}
