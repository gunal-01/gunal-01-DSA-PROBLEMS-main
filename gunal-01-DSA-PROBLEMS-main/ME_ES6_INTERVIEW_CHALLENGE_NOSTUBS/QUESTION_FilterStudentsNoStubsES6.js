
module.exports = filterStudents

function filterStudents(students, passingGrade) {
return students.filter(student => student.grade >= passingGrade).map(student => student.name);
    
}

console.log(filterStudents([{name:'Alice', age: 18, grade: 85},{name:'Bob', age: 16, grade: 92},{name:'Charlie', age: 17, grade: 78}], 90));