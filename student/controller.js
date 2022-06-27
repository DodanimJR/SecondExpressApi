const StudentServices=require('./service')
const createStudentModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Students=await StudentServices.getAllStudents();

    res.json(Students);
}

const create = async(req,res)=>{
    try {
        const body = await createStudentModel.StudentModel.validate(req.body);
        const newStudent=await StudentServices.createStudent(body);
        res.json({"Created Student":body}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await StudentServices.UpdateStudent(req.body,id);
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
        const result = await StudentServices.RemoveStudent(id);
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
        const result = await StudentServices.getStudentById(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
    
}
const getbyIdTeachers =async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await StudentServices.getStudentTeachersById(id);
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
    getbyId,
    getbyIdTeachers
}