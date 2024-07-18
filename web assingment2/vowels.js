function countVowels(str) {
    // Define a regular expression to match vowels (both lowercase and uppercase)
    const vowelRegex = /[aeiouAEIOU]/g;
    
 let vowelsArray = str.match(vowelRegex);
    let vowelCount = vowelsArray ? vowelsArray.length : 0;
return vowelCount;
}
let sentence = "Hello World";
let vowelsCount = countVowels(sentence);
console.log(`Number of vowels in "${sentence}": ${vowelsCount}`); 
