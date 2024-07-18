function reverseNumber(num) {
    // Convert number to string
    let numStr = num.toString();
    
    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');
    
    // Convert the reversed string back to a number
    let reversedNum = parseInt(reversedStr);
    
    // Return the reversed number (make sure to handle negative numbers)
    return reversedNum * Math.sign(num);
}

// Example usage:
let number = 12345;
let reversed = reverseNumber(number);
console.log(`Original number: ${number}`);
console.log(`Reversed number: ${reversed}`);
