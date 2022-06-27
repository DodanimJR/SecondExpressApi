const express = require('express');
const StudentController = require('./controller')
const router = express.Router();

router.get('/',StudentController.getAll);
router.post('/',StudentController.create);
router.get('/:id',StudentController.getbyId);
router.get('/:id/profesores',StudentController.getbyIdTeachers);
router.put('/:id',StudentController.update);
router.delete('/:id',StudentController.remove);


module.exports=router;  