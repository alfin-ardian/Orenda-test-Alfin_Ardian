function isPalindromeNumber(num) {
    var str = num.toString();
    var reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        console.log("".concat(num, " is a palindrome number."));
        return true;
    }
    else {
        console.log("".concat(num, " is not a palindrome number."));
        return false;
    }
}
// Example
isPalindromeNumber(121);
isPalindromeNumber(123);
