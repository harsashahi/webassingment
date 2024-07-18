function findSecondLowestAndGreatest(numbers) {
    // Sort the array of numbers in ascending order
    numbers.sort(function(a, b) {
        return a - b;
    });
    
    let uniqueNumbers = [...new Set(numbers)];
    
    if (uniqueNumbers.length < 2) {
        return "Array should have at least two different numbers";
    }
    let secondLowest = uniqueNumbers[1];
    let secondGreatest = uniqueNumbers[uniqueNumbers.length - 2];
    
    return {
        secondLowest: secondLowest,
        secondGre
    }

}