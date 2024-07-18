function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if original and reversed strings are the same
    return cleanedStr === reversedStr;
}

// Example usage:
let str1 = "A man, a plan, a canal, Panama";
let str2 = "hello world";

console.log(`"${str1}" is a palindrome: ${isPalindrome(str1)}`);
console.log(`"${str2}" is a palindrome: ${isPalindrome(str2)}`);
