const express = require('express');
const facultyController = require('./controller')
const router = express.Router();

router.get('/',facultyController.getAll);
router.post('/',facultyController.create);
router.get('/:id',facultyController.getbyId);
router.get('/:id/estudiantes',facultyController.getbyIdStudents);
router.get('/:id/profesores',facultyController.getbyIdTeachers);
router.put('/:id',facultyController.update);
router.delete('/:id',facultyController.remove);


module.exports=router;  