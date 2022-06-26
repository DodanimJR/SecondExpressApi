const express = require('express');
const routerStudents = require('./estudiante/router.js')
const routerAssignment = require('./materia/router.js')
const router = express.Router();
router.use(express.json())
router.use('/estudiante',routerStudents);
router.use('/materia',routerAssignment);

module.exports=router;