const Joi = require('joi')
const StudentModel= Joi.object({
    nombre: Joi.string().required(), 
    facultadId: Joi.number().integer().required(), 
})

module.exports={
    StudentModel
}