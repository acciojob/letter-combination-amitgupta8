function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const mappings = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const result = [];

  function recurse(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = mappings[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      recurse(index + 1, current + letters[i]);
    }
  }

  recurse(0, '');
  return result.sort();
}
