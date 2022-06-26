const express = require('express');
// const routerStudents = require('./estudiante/router.js')
// const routerAssignment = require('./materia/router.js')
const routerFaculty = require('./faculty/router.js')
const routerTeacher = require('./teacher/router.js')
const router = express.Router();
router.use(express.json())
// router.use('/estudiante',routerStudents);
// router.use('/materia',routerAssignment);
router.use('/facultad',routerFaculty);
router.use('/profesor',routerTeacher);

module.exports=router;