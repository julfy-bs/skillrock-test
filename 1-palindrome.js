function isPalindrome(str) {
  if (!str || str.length === 0) {
    return false;
  }

  const regex = /([~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|\-_+=])|\s+/g;
  const strWithoutPunctuation = str.toLowerCase().replace(regex, '')
  return strWithoutPunctuation === strWithoutPunctuation.split('').reverse().join('');
}

console.log(isPalindrome('топот')); // true
console.log(isPalindrome('привет')); // false