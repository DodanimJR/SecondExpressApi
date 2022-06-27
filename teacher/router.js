const express = require('express');
const TeacherController = require('./controller')
const router = express.Router();

router.get('/',TeacherController.getAll);
router.post('/',TeacherController.create);
router.get('/:id',TeacherController.getbyId);
router.get('/:id/materias',TeacherController.getbyIdAssignments);
router.get('/:id/estudiantes',TeacherController.getbyIdStudents);
router.put('/:id',TeacherController.update);
router.delete('/:id',TeacherController.remove);


module.exports=router;  