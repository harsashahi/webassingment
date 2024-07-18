function capitalizeWords(str) {
    
    let words = str.split(' ');
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let capitalizedStr = capitalizedWords.join(' ');
    return capitalizedStr;
}  let sentence = "hello world";
let capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); 
