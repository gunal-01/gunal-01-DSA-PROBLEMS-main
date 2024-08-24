

module.exports = getTopStudents;


function getTopStudents(students,N) {
    students.sort((a,b) => b.grade - a.grade);
    
    students.forEach(student => {
        student.name_of_student = student.name;
    });

    function addAllStudents(students) {
        return students.map(student => `name: ${student.name_of_student}`);
    }
    const topStudents = students.slice(0,N);
    return addAllStudents(topStudents);
}

console.log(getTopStudents([
    {name: "Alice", grade: 90},
    {name: "Bob", grade: 95},
    {name: "Charlie", grade: 85},
    {name: "David", grade: 92},
    {name: "Eve", grade: 88}
],3));