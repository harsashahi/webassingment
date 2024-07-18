var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  for (var prop in student) {
    if (student.hasOwnProperty(prop)) {
      console.log(prop + ": " + student[prop]);
    }
  }
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  const properties = Object.keys(student);
  console.log(properties); 
    