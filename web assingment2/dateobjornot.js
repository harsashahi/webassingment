function isDate(input) {
    return Object.prototype.toString.call(input) === '[object Date]';
  }
  
  console.log(isDate("October 13, 2014 11:13:00"));
  console.log(isDate(new Date(86400000)));
  function isDate(input) {
    return !isNaN(Date.parse(input));
  }
  
  console.log(isDate("October 13, 2014 11:13:00")); 
  console.log(isDate(new Date(86400000))); 
  console.log(isDate("invalid string")); 
    