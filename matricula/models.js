const Joi = require('joi')
const MatriculaModel= Joi.object({
    cuatrimestre: Joi.string().required(), 
    estudianteId: Joi.number().integer().required(), 
    materiaId: Joi.number().integer().required(), 
})

module.exports={
    MatriculaModel
}