const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const getAllFacultys = async()=>{
    const Facultys = await prisma.Faculty.findMany();
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
                "codigo":params.codigo,
                "profesor":params.profesor,
                "inicialesProfesor":params.inicialesProfesor,
                "creditos":params.creditos,
                "carrera":params.carrera
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
    RemoveFaculty
}