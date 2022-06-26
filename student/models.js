const Joi = require('joi')
const FacultyModel= Joi.object({
    nombre: Joi.string().required(), 
    nombre_decano: Joi.string().required(), 
    abreviacion: Joi.string().required(), 
})

module.exports={
    FacultyModel
}