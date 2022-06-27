const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');

const prisma = new PrismaClient()
const getAllStudents = async()=>{
    const Students = await prisma.Student.findMany();
    for(student of Students){
        student.facultad= await prisma.Faculty.findUnique({where:{id:student.facultadId}})
        delete student.facultadId;
        delete student.facultad.id;
        delete student.facultad.nombre_decano;
        
    }
    return Students;
}
const createStudent = async(bodys)=>{
    try {
        const params=bodys.value;
        const newStudent =await prisma.Student.create({
            data:{
                "nombre":params.nombre,
                "facultadId":params.facultadId,
            }
            
        });
        return newStudent;
    } catch (error) {
        throw error
    }
}
const getStudentById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Student = await prisma.Student.findUnique({where:{id:finalId}});
        if(Student!=null){
            return Student;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}
const getStudentTeachersById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Student = await prisma.Student.findUnique({where:{id:finalId}});
        if(Student!=null){
            let tempProfesores = [];
            //let tempMaterias =[];
            let matriculas = await prisma.Matricula.findMany({where:{estudianteId:Student.id}});
            console.log(matriculas);
            for(matricula of matriculas){
                let materia = await prisma.Assignment.findUnique({where:{id:matricula.materiaId}});
                let profesor=await prisma.Teacher.findUnique({where:{id:materia.profesorId}});
                console.log(profesor);
                tempProfesores.push(profesor);
            }
            console.log("All profesores",tempProfesores);
            
            Student.profesores=_.uniqWith(tempProfesores,_.isEqual);
            Student.cantidadProfesores=Student.profesores.length;
            return Student;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateStudent = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Student = await prisma.Student.update({
            where:{id:finalId},
            data:{
                "nombre":params.nombre,
                "facultadId":params.facultadId,
            }
        });
        if(Student!=null){
            return Student;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveStudent = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Student = await prisma.Student.delete({where:{id:finalId}});
        if(Student!=null){
            return Student;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createStudent,
    getAllStudents,
    getStudentById,
    UpdateStudent,
    RemoveStudent,
    getStudentTeachersById
}