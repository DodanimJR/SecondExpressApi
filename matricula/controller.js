const MatriculaServices=require('./service')
const createMatriculaModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Matriculas=await MatriculaServices.getAllMatriculas();

    res.json(Matriculas);
}

const create = async(req,res)=>{
    try {
        const body = await createMatriculaModel.MatriculaModel.validate(req.body);
        const newMatricula=await MatriculaServices.createMatricula(body);
        res.json({"Created Matricula":body}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await MatriculaServices.UpdateMatricula(req.body,id);
        if(result){
            res.json({"response":result});
        }

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}
const remove = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await MatriculaServices.RemoveMatricula(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
}

const getbyId =async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await MatriculaServices.getMatriculaById(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
    
}

module.exports={
    getAll,
    create,
    update,
    remove,
    getbyId
}