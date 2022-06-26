const { PrismaClient } = require('@prisma/client');

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
                "codigo":params.codigo,
                "profesor":params.profesor,
                "inicialesProfesor":params.inicialesProfesor,
                "creditos":params.creditos,
                "carrera":params.carrera
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
    RemoveTeacher
}