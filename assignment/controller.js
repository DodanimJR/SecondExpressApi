const AssignmentServices=require('./service')
const createAssignMentModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    AssignMents=await AssignmentServices.getAllAssignMents();

    res.json(AssignMents);
}

const create = async(req,res)=>{
    try {
        const body = await createAssignMentModel.AssignMentModel.validate(req.body);
        const newAssignMent=await AssignmentServices.createAssignMent(body);
        res.json({"Created AssignMent":body}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        const body = await createAssignMentModel.AssignMentModel.validate(req.body);
        const result = await AssignmentServices.UpdateAssignMent(body,id);
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
        const result = await AssignmentServices.RemoveAssignMent(id);
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
        const result = await AssignmentServices.getAssignMentById(id);
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