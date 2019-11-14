const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
ORDER BY teacher
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
}).catch(err => console.error('query error', err.stack));
});