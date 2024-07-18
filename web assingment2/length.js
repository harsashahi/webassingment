var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  const objectLength = Object.keys(student).length;
  console.log("Object length:", objectLength); 
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  let objectLength = 0;
  for (const prop in student) {
    if (student.hasOwnProperty(prop)) {
      objectLength++;
    }
  }
   console.log("Object length:", objectLength); 
    