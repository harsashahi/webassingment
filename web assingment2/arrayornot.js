function is_array(input) {
    return Array.isArray(input);
  }
  
  console.log(is_array('harsa')); 
  console.log(is_array([1, 2, 4, 0])); 
  function is_array(input) {
    return typeof input === 'object' && typeof input.length === 'number';
  }
  
  console.log(is_array('harsa')); 
  console.log(is_array([1, 2, 4, 0])); 
  