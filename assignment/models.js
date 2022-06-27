const Joi = require('joi')
const AssignMentModel= Joi.object({
    nombre: Joi.string().required(), 
    profesorId: Joi.number().integer().required(), 
    facultadId: Joi.number().integer().required()
})

module.exports={
    AssignMentModel
}