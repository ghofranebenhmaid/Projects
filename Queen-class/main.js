const class07Students = [];
function addStudentToClass(studentName) {
   // You write code here
   if (studentName != '') {
      if (class07Students.includes(studentName) == false) {
         if (class07Students.length < 6) {
            class07Students.push(studentName);
            return class07Students;
         } else if (class07Students.length >= 6) {
            if (studentName == 'Queen') {
               class07Students.push(studentName);
               return class12Students;
            } else {
               return 'Cannot add more students to class 07';
            }
         }
      } else if (class07Students.includes(studentName) == true) {
         return 'Student ' + studentName + ' is already in the class';
      }
   } else if (studentName == '') {
      return 'You cannot add an empty string to a class';
   }
}

function getNumberOfStudents() {
   return 'The number of students in class 07 is ' + class07Students.length;
}
/////
const studentInput = document.querySelector('input');
const ul = document.querySelector('ul');
const span = document.querySelector('span');

document.querySelector('button').addEventListener('click', () => {
   const studentName = studentInput.value;
   addStudentToClass(studentName);
   ul.innerHTML = '';
   class07Students.forEach((class07Student) => {
      const li = document.createElement('li');
      li.innerHTML = class07Student;
      if (class07Student.toLowerCase() === 'queen') {
         li.classList.add('queen');
         li.innerHTML = `${class07Student} 👑`;
      }
      ul.appendChild(li);
   });

   span.innerHTML = `Number of students: ${getNumberOfStudents()}`;
});
