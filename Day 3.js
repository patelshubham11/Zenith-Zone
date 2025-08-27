const students = [
  { name: "Rahul", marks: [80, 75, 90] },
  { name: "Anita", marks: [60, 70, 65] },
  { name: "Vikram", marks: [95, 88, 92] }
];

// Function to calculate total and average marks
students.forEach(student => {
  const total = student.marks.reduce((sum, m) => sum + m, 0);
  const average = total / student.marks.length;

  console.log(`${student.name} => Total: ${total}, Average: ${average.toFixed(2)}`);
});
