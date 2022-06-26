const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const getAllFacultys = async()=>{
    const Facultys = await prisma.Assignment.findMany();
    return Facultys;
}
const createAssignMent = async(bodys)=>{
    try {
        const params=bodys.value;
        const newAssignMent =await prisma.Assignment.create({
            data:{
                "nombre":params.nombre,
                "codigo":params.codigo,
                "profesor":params.profesor,
                "inicialesProfesor":params.inicialesProfesor,
                "creditos":params.creditos,
                "carrera":params.carrera
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

const UpdateAssignMent = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const AssignMent = await prisma.Assignment.update({
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
    getAllFacultys,
    getAssignMentById,
    UpdateAssignMent,
    RemoveAssignMent
}