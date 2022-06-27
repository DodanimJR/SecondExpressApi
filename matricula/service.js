const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const getAllMatriculas = async()=>{
    const Matriculas = await prisma.Matricula.findMany();
    return Matriculas;
}
const createMatricula = async(bodys)=>{
    try {
        const params=bodys.value;
        const newMatricula =await prisma.Matricula.create({
            data:{
                "cuatrimestre":params.cuatrimestre,
                "estudianteId":params.estudianteId,
                "materiaId":params.materiaId
            }
            
        });
        return newMatricula;
    } catch (error) {
        throw error
    }
}
const getMatriculaById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Matricula = await prisma.Matricula.findUnique({where:{id:finalId}});
        if(Matricula!=null){
            return Matricula;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateMatricula = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Matricula = await prisma.Matricula.update({
            where:{id:finalId},
            data:{
                "cuatrimestre":params.cuatrimestre,
                "estudianteId":params.estudianteId,
                "materiaId":params.materiaId
            }
        });
        if(Matricula!=null){
            return Matricula;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveMatricula = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Matricula = await prisma.Matricula.delete({where:{id:finalId}});
        if(Matricula!=null){
            return Matricula;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createMatricula,
    getAllMatriculas,
    getMatriculaById,
    UpdateMatricula,
    RemoveMatricula
}