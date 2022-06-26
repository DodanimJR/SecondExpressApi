const Joi = require('joi')
const TeacherModel= Joi.object({
    nombre: Joi.string().required(), 
    apellido: Joi.string().required(), 
    facultadId: Joi.number().integer().required(), 
})

module.exports={
    TeacherModel
}