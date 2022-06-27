const express = require('express');
const assignmentController = require('./controller')
const router = express.Router();

router.get('/',assignmentController.getAll);
router.post('/',assignmentController.create);
router.get('/:id',assignmentController.getbyId);
router.get('/:id/estudiantes',assignmentController.getbyIdStudents);
router.put('/:id',assignmentController.update);
router.delete('/:id',assignmentController.remove);


module.exports=router;  