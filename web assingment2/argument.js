function getType(value) {
    return typeof value;
}


console.log(getType(42));          
console.log(getType("Hello"));     
console.log(getType(true));        
console.log(getType({}));          
console.log(getType([]));          
console.log(getType(null));        
console.log(getType(undefined));   
console.log(getType(function() {}));
