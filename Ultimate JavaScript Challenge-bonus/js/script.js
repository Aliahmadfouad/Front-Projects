let students = [
  {
    id: 1,
    name: "Mostafa Mohamed",
    age: 28,
    city: "Cairo",
    grade: 95,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    name: "Ali Hassan",
    age: 17,
    city: "Alex",
    grade: 60,
    isGraduated: false,
    skills: ["HTML"],
  },
  {
    id: 3,
    name: "Sara Ali",
    age: 24,
    city: "Mansoura",
    grade: 88,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS", "React"],
  },
];

// * 1. the number of students in the array
console.log("Number of students:", students.length);

// * 2. the first student in the array
console.log("First student:", students[0].name);

// * 3. the last student in the array
console.log("Last student:", students[students.length - 1].name);

// * 4. the names of all students in the array using loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}


for (let i = 0; i < students.length; i++) {
  console.log("Name  :", students[i].name);
  console.log("Age   :", students[i].age);
  console.log("City  :", students[i].city);
  console.log("Grade :", students[i].grade);
}


// * 6. the names of all students who are older than 18
for (let i = 0; i < students.length; i++) {
  if (students[i].age > 18) {
    console.log(students[i].name);
  }
}


// * 7. the names of all students who have a grade greater than 90
for (let i = 0; i < students.length; i++) {
  if (students[i].grade > 90) {
    console.log(students[i].name, "-", students[i].grade);
  }
}

// * 8. the names of all students who have graduated
for (let i = 0; i < students.length; i++) {
  if (students[i].isGraduated === true) {
    console.log(students[i].name, "Graduated");
  }
}

// * 9. the names of all students who have not graduated
for (let i = 0; i < students.length; i++) {
  if (students[i].isGraduated === false) {
    console.log(students[i].name, "Not Graduated");
  }
}


// * 10. the total grades of all students in the array
let totalGrades = 0;

for (let i = 0; i < students.length; i++) {
  totalGrades = totalGrades + students[i].grade;
}

console.log("Total Grades:", totalGrades);



// * 11. the average grade of all students in the array
let total = 0;

for (let i = 0; i < students.length; i++) {
  total = total + students[i].grade;
}

let average = total / students.length;

console.log("Average Grade:", average);



// * 12. the highest grade in the array and the name of the student who has it
let highestGrade = students[0].grade;
let highestName = students[0].name;

for (let i = 0; i < students.length; i++) {
  if (students[i].grade > highestGrade) {
    highestGrade = students[i].grade;
    highestName = students[i].name;
  }
}

console.log("Highest Grade:",highestGrade, "Highest Name :",highestName);


// * 13. the lowest grade in the array and the name of the student who has it
let lowestGrade = students[0].grade;
let lowestName = students[0].name;

for (let i = 0; i < students.length; i++) {
  if (students[i].grade < lowestGrade) {
    lowestGrade = students[i].grade;
    lowestName = students[i].name;
  }
}

console.log("Lowest Grade:",lowestGrade, "Lowest Name :",lowestName);


// * 14. the names of all students in the array in reverse order
for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i].name);
}


// * 15. the names of all students in the array in uppercase
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name.toUpperCase());

}

// * 16. the names of all students in the array in lowercase
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name.toLowerCase());
}



// * 17. the names of all students in the array that contain the string "Ali"
for (let i = 0; i < students.length; i++) {
  let name = students[i].name;

  if (name.includes("Ali")) {
    console.log(name, 'Contains "Ali"');
  } else {
    console.log(name, 'Does NOT contain "Ali"');
  }
}

// * 18. قسم الاسم لكلمتين باستخدام split
for (let i = 0; i < students.length; i++) {
  let nameParts = students[i].name.split(" ");
  console.log(nameParts);

}


// * 19. اعمل Join للكلمات تاني
for (let i = 0; i < students.length; i++) {
  let nameParts = students[i].name.split(" ");
  let joined = nameParts.join(" ");
  console.log(joined);
}

// * 20. اعمل Trim للspaces اللي قبل وبعد الاسم
let testName = "   Mostafa Mohamed   ";
console.log("Before trim: [" + testName + "]");
console.log("After  trim: [" + testName.trim() + "]");

// * 21. the number of skills they have
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, "Skills Count:", students[i].skills.length);
}

