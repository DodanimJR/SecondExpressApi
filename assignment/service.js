const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const getAllAssignMents = async()=>{
    const AssignMents = await prisma.Assignment.findMany();
    return AssignMents;
}
const createAssignMent = async(bodys)=>{
    try {
        const params=bodys.value;
        const newAssignMent =await prisma.Assignment.create({
            data:{
                "nombre":params.nombre,
                "profesorId":params.profesorId,
                "facultadId":params.facultadId
            }
            
        });
        return newAssignMent;
    } catch (error) {
        throw error
    }
}
const getAssignMentById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const AssignMent = await prisma.Assignment.findUnique({where:{id:finalId}});
        if(AssignMent!=null){
            return AssignMent;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}
const getAssignMentStudentsById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const AssignMent = await prisma.Assignment.findUnique({where:{id:finalId}});
        if(AssignMent!=null){
            
            let tempEstudiantes = [];

            let matriculas = await prisma.Matricula.findMany({where:{materiaId:AssignMent.id}});
            for(matricula of matriculas){
                let students = await prisma.Student.findMany({where:{id:matricula.estudianteId}})
                tempEstudiantes.push(students);
            }
            console.log(tempEstudiantes);
            AssignMent.estudiantes=tempEstudiantes;
            AssignMent.cantidadEstudiantes=tempEstudiantes.length;
            delete AssignMent.profesorId;
            delete AssignMent.facultadId;

            return AssignMent;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateAssignMent = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const AssignMent = await prisma.Assignment.update({
            where:{id:finalId},
            data:{
                "nombre":params.nombre,
                "profesorId":params.profesorId,
                "facultadId":params.facultadId
            
            }
        });
        if(AssignMent!=null){
            return AssignMent;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveAssignMent = async(id)=>{
    try {
        const finalId= parseInt(id);
        const AssignMent = await prisma.Assignment.delete({where:{id:finalId}});
        if(AssignMent!=null){
            return AssignMent;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createAssignMent,
    getAllAssignMents,
    getAssignMentById,
    UpdateAssignMent,
    RemoveAssignMent,
    getAssignMentStudentsById
}