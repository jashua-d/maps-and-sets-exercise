/* vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 } */

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = new Map();
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        const count = vowelMap.get(char) || 0;
        vowelMap.set(char, count + 1);
      }
    }
  
    return vowelMap;
  }
  
  
  console.log(vowelCount('awesome')); 