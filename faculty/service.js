const { PrismaClient } = require('@prisma/client');
const { response } = require('express');

const prisma = new PrismaClient()
const getAllFacultys = async()=>{
    const Facultys = await prisma.Faculty.findMany();
    for (facultad of Facultys){
        facultad.materias= await prisma.Assignment.findMany({where:{facultadId:facultad.id}});
        for(materia of facultad.materias){
            delete materia.id;
            delete materia.facultadId; 
            materia.profesor=await prisma.Teacher.findUnique({where:{id:materia.profesorId}});
            delete materia.profesorId;
            delete materia.profesor.id;
            delete materia.profesor.facultadId;
        }
        facultad.profesores= await prisma.Teacher.findMany({where:{facultadId:facultad.id}})
        for(profesor of facultad.profesores){
            delete profesor.id;
            delete profesor.facultadId;
        }
        //console.log(facultad);
    }
    return Facultys;
}
const createFaculty = async(bodys)=>{
    try {
        const params=bodys.value;
        const newFaculty =await prisma.Faculty.create({
            data:{
                "nombre":params.nombre,
                "nombre_decano":params.nombre_decano,
                "abreviacion":params.abreviacion
            }
            
        });
        return newFaculty;
    } catch (error) {
        throw error
    }
}
const getFacultyById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Faculty = await prisma.Faculty.findUnique({where:{id:finalId}});
        if(Faculty!=null){
            
            Faculty.materias= await prisma.Assignment.findMany({where:{facultadId:Faculty.id}});
            for(materia of Faculty.materias){
                delete materia.id;
                delete materia.facultadId; 
                materia.profesor=await prisma.Teacher.findUnique({where:{id:materia.profesorId}});
                delete materia.profesorId;
                delete materia.profesor.id;
                delete materia.profesor.facultadId;   
            }
            Faculty.profesores= await prisma.Teacher.findMany({where:{facultadId:Faculty.id}})
            for(profesor of Faculty.profesores){
                delete profesor.id;
                delete profesor.facultadId;
            }
            Faculty.estudiantes= await prisma.Student.findMany({where:{facultadId:Faculty.id}})
            Faculty.cantidadEstudiantes= Faculty.estudiantes.length;
            for(estudiante of Faculty.estudiantes){
                delete estudiante.facultadId
            }
            console.log(Faculty);    
        
            return Faculty;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}
const getFacultyStudentsById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Faculty = await prisma.Faculty.findUnique({where:{id:finalId}});
        if(Faculty!=null){
            Faculty.estudiantes= await prisma.Student.findMany({where:{facultadId:Faculty.id}})
            Faculty.cantidadEstudiantes= Faculty.estudiantes.length;
            for(estudiante of Faculty.estudiantes){
                delete estudiante.facultadId
            }
            console.log(Faculty);
            
        
            return Faculty;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const getFacultyTeachersById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Faculty = await prisma.Faculty.findUnique({where:{id:finalId}});
        if(Faculty!=null){
            Faculty.profesores= await prisma.Teacher.findMany({where:{facultadId:Faculty.id}})
            Faculty.cantidadprofesores= Faculty.profesores.length;
            for(profesor of Faculty.profesores){
                delete profesor.facultadId
            }
            console.log(Faculty);
            
        
            return Faculty;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}
const UpdateFaculty = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Faculty = await prisma.Faculty.update({
            where:{id:finalId},
            data:{
                "nombre":params.nombre,
                "nombre_decano":params.nombre_decano,
                "abreviacion":params.abreviacion
            }
        });
        if(Faculty!=null){
            return Faculty;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveFaculty = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Faculty = await prisma.Faculty.delete({where:{id:finalId}});
        if(Faculty!=null){
            return Faculty;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createFaculty,
    getAllFacultys,
    getFacultyById,
    UpdateFaculty,
    RemoveFaculty,
    getFacultyStudentsById,
    getFacultyTeachersById
}