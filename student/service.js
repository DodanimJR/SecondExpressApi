const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const getAllStudents = async()=>{
    const Students = await prisma.Student.findMany();
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

const UpdateStudent = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Student = await prisma.Student.update({
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
    RemoveStudent
}