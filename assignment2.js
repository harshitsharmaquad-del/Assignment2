// ===== String and Array Assignment =====

function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}

// 2. Palindrome check

function palindromeCheck(str) {
  const cleaned = str.toLowerCase();
  if (cleaned === reverse(cleaned)) {
    console.log(`"${str}" is a Palindrome.`);
  } else {
    console.log(`"${str}" is not a Palindrome.`);
  }
}

// 3. Vowels aur consonants ginna

function count(str) {
  let vowel = 0;
  let consonant = 0;
  for (let char of str.toLowerCase()) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      vowel++;
    } else if (char >= "a" && char <= "z") {
      consonant++;
    }
  }
  console.log("count of vowel :", vowel);
  console.log("count of consonant :", consonant);
}

// 4. Array ka second-largest distinct number

function secondLargest(array) {
  const unique = Array.from(new Set(array));
  const sortedArray = unique.sort((a, b) => a - b);
  console.log("Second largest :", sortedArray[sortedArray.length - 2]);
}

// 5. Duplicates hatana (bina Set ke)

function removeDuplicacy(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < res.length; j++) {
      if (array[i] === res[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      res.push(array[i]);
    }
  }
  console.log(res);
}

// 6. Array ke saare even numbers ka sum
function sumOfEven(array) {
  let evenSum = 0;
  for (let num of array) {
    if (num % 2 === 0) {
      evenSum = evenSum + num;
    }
  }
  console.log("Sum of even numbers :", evenSum);
}

// 7. Kisi element ki frequency (target ab parameter hai)
function frequency(array, target) {
  let frequencyOfElement = 0;
  for (let num of array) {
    if (num === target) {
      frequencyOfElement++;
    }
  }
  console.log(`Frequency of ${target} :`, frequencyOfElement);
}

// 8. Anagram check
// Length same ho aur sort karne ke baad dono strings barabar hon.
function checkAnagram(str1, str2) {
  const a = str1.toLowerCase().split("").sort().join("");
  const b = str2.toLowerCase().split("").sort().join("");
  if (str1.length === str2.length && a === b) {
    console.log(`"${str1}" and "${str2}" are anagrams.`);
  } else {
    console.log(`"${str1}" and "${str2}" are not anagrams.`);
  }
}

// 9. Saare zeros ko end me bhejna (non-zero ka order same rakhte hue)
function moveZerosToEnd(arr) {
  let newArr = [];
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    } else {
      zeroCount++;
    }
  }
  for (let j = 0; j < zeroCount; j++) {
    newArr.push(0);
  }
  console.log(newArr);
}

// ===== Output =====
console.log("--- 1. Reverse ---");
console.log(reverse("pubg"));

console.log("--- 2. Palindrome ---");
palindromeCheck("madam");
palindromeCheck("hello");

console.log("--- 3. Vowels & Consonants ---");
count("elephant");

console.log("--- 4. Second Largest ---");
secondLargest([2, 8, 9, 11, 4, 2, 8, 11, 60, 90, 75, 60]);

console.log("--- 5. Remove Duplicates ---");
removeDuplicacy([2, 8, 9, 11, 4, 2, 8, 11, 60, 90, 75, 60]);

console.log("--- 6. Sum of Even ---");
sumOfEven([5, 7, 9, 12, 15, 81, 20, 1]);

console.log("--- 7. Frequency ---");
frequency([2, 4, 4, 7, 9, 0, 1, 4, 6, 4, 4], 4);

console.log("--- 8. Anagram ---");
checkAnagram("silent", "listen");
checkAnagram("hello", "world");
checkAnagram("heart", "earth");

console.log("--- 9. Move Zeros to End ---");
moveZerosToEnd([0, 1, 0, 3, 12, 0, 36, 78, 0]);