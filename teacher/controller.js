const TeacherServices=require('./service')
const createTeacherModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Teachers=await TeacherServices.getAllTeachers();

    res.json(Teachers);
}

const create = async(req,res)=>{
    try {
        const body = await createTeacherModel.TeacherModel.validate(req.body);
        const newTeacher=await TeacherServices.createTeacher(body);
        res.json({"Created Teacher":body}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await TeacherServices.UpdateTeacher(req.body,id);
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
        const result = await TeacherServices.RemoveTeacher(id);
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
        const result = await TeacherServices.getTeacherById(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
    
}
const getbyIdStudents =async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await TeacherServices.getTeacherStudentsById(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
    
}
const getbyIdAssignments =async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await TeacherServices.getTeacherAssignmentsById(id);
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
    getbyIdAssignments,
    getbyIdStudents
}