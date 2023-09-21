const Course = require('./Course');
const Student = require('./Student');

Course.belongsToMany(Student, { through: 'course_students' });
Student.belongsToMany(Course, { through: 'course_students' });
