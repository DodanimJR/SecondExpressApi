const Joi = require('joi')
const AssignMentModel= Joi.object({
    nombre: Joi.string().required(), 
    codigo: Joi.string().required(), 
    profesor: Joi.string().required(), 
    inicialesProfesor: Joi.string().required(), 
    creditos: Joi.number().integer().required(),
    carrera: Joi.string().required(), 
})

module.exports={
    AssignMentModel
}