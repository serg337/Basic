function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase();
  if (str === str.split("").reverse().join("")) {
      return true;
      } else {
     return false;
      }
}


