const express = require('express');
const MatriculaController = require('./controller')
const router = express.Router();

router.get('/',MatriculaController.getAll);
router.post('/',MatriculaController.create);
router.get('/:id',MatriculaController.getbyId);
router.put('/:id',MatriculaController.update);
router.delete('/:id',MatriculaController.remove);


module.exports=router;  