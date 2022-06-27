const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');
const { x } = require('joi');


const prisma = new PrismaClient()
const getAllTeachers = async()=>{
    const Teachers = await prisma.Teacher.findMany();
    for(teacher of Teachers){
        teacher.materias = await prisma.Assignment.findMany({where:{profesorId:teacher.id}});
        for(materia of teacher.materias){
            delete materia.profesorId;
            delete materia.facultadId;
        }
        teacher.facultad = await prisma.Faculty.findMany({where:{id:teacher.facultadId}});
        delete teacher.facultadId;

    }
    console.log(Teachers);
    return Teachers;
}
const createTeacher = async(bodys)=>{
    try {
        const params=bodys.value;
        const newTeacher =await prisma.Teacher.create({
            data:{
                "nombre":params.nombre,
                "apellido":params.apellido,
                "facultadId":params.facultadId
            }
            
        });
        return newTeacher;
    } catch (error) {
        throw error
    }
}
const getTeacherById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Teacher = await prisma.Teacher.findUnique({where:{id:finalId}});
        if(Teacher!=null){
            Teacher.materias = await prisma.Assignment.findMany({where:{profesorId:Teacher.id}});
            for(materia of Teacher.materias){
                delete materia.profesorId;
                delete materia.facultadId;
            }
            Teacher.facultad = await prisma.Faculty.findMany({where:{id:Teacher.facultadId}});
            delete Teacher.facultadId;
            return Teacher;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}
const getTeacherAssignmentsById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Teacher = await prisma.Teacher.findUnique({where:{id:finalId}});
        if(Teacher!=null){
            Teacher.materias=await prisma.Assignment.findMany({where:{profesorId:Teacher.id}});
            Teacher.cantidadMaterias=Teacher.materias.length;
            // for(x of Teacher.materias){
            //     delete x.facultadId;
            //     delete x.profesorId;
            // }
            return Teacher;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}
const getTeacherStudentsById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Teacher = await prisma.Teacher.findUnique({where:{id:finalId}});
        if(Teacher!=null){
            let materias=await prisma.Assignment.findMany({where:{profesorId:Teacher.id}});
            let tempEstudiantes = [];
            for(materia of materias){
                let matriculas = await prisma.Matricula.findMany({where:{materiaId:materia.id}});
                for(matricula of matriculas){
                    let students = await prisma.Student.findMany({where:{id:matricula.estudianteId}})
                    tempEstudiantes.push(students);
                }
            }   
            Teacher.estudiantes=_.uniqWith(tempEstudiantes,_.isEqual);
            //console.log('Corrected Students',uniqueStudents);
            return Teacher;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateTeacher = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Teacher = await prisma.Teacher.update({
            where:{id:finalId},
            data:{
                "nombre":params.nombre,
                "apellido":params.apellido,
                "facultadId":params.facultadId
            }
        });
        if(Teacher!=null){
            return Teacher;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveTeacher = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Teacher = await prisma.Teacher.delete({where:{id:finalId}});
        if(Teacher!=null){
            return Teacher;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createTeacher,
    getAllTeachers,
    getTeacherById,
    UpdateTeacher,
    RemoveTeacher,
    getTeacherAssignmentsById,
    getTeacherStudentsById
}