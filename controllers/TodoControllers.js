const todoModel = require("../models/todoModels")

const mongoose = require("mongoose")



const create =  async (req,res)=>{
    const text = req.body;

    try {
        const list = await todoModel.create(text);
        res.status(200).json(list)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
    
}

const get = async(req,res)=>{
    try {
        const data =await  todoModel.find({}) ;
        
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getById = async(req,res)=>{
    
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "no such list"})
        }
        const data = await todoModel.findById(id);
        if(!data){
           return  res.status(404).json({message:"this id is not found"})
        }
        

        return res.status(200).json(data);
};

const update = async(req,res)=>{
    const text = req.body;
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "this id is not found"})
    }
    if(!text){
        res.status(404).json({error:"empty!"})
    }
    const update= await todoModel.findByIdAndUpdate(id , text)
    res.status(200).json({message:"updated successfully"})
}

const deleteObject = async (req,res)=>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such list"})
    }

    const deleted = await todoModel.findByIdAndDelete(id )
    res.status(200).json({message: "deleted successfully"})
}







module.exports = {
    create,
    get,
    getById,
    update,
    deleteObject

}