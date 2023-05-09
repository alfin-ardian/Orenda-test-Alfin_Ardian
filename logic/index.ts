function isPalindromeNumber(num: number): boolean {
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    console.log(`${num} is a palindrome number.`);
    return true;
  } else {
    console.log(`${num} is not a palindrome number.`);
    return false;
  }
}

// Example
isPalindromeNumber(121);
isPalindromeNumber(123);
