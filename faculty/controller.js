const FacultyServices=require('./service')
const createFacultyModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Facultys=await FacultyServices.getAllFacultys();

    res.json(Facultys);
}

const create = async(req,res)=>{
    try {
        const body = await createFacultyModel.FacultyModel.validate(req.body);
        const newFaculty=await FacultyServices.createFaculty(body);
        res.json({"Created Faculty":body}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await FacultyServices.UpdateFaculty(req.body,id);
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
        const result = await FacultyServices.RemoveFaculty(id);
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
        const result = await FacultyServices.getFacultyById(id);
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