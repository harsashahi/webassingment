function isString(input) {
    return typeof input === 'string';
  }
  console.log(isString('hello')); 
  console.log(isString(10)); 
  function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
  }
  console.log(isString('hello')); 
  console.log(isString(10)); 
    