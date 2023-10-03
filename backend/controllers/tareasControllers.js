const asyncHandler = require("express-async-handler")
const Tarea = require("../models/tareaModel")

const getTareas = asyncHandler( async (req, res) => {
    const tareas = await Tarea.find()

    res.status(200).json({tareas})
})

const setTarea = asyncHandler( async (req, res) => {

    if (!req.body.texto) {
        //res.status(400).json({message: "Porfavor Teclea una tarea"})
        res.status(400)
        throw new Error("Por favor teclea un texto")
    }

    res.status(201).json({ message: "Tarea Creada" })
})

const updateTarea = asyncHandler(async (req, res) => {

const tarea = await Tarea.findById(req.params.id)
    if (!tarea){
        res.status(400)
        throw new Error('La tarea no fue creada')
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(tareaUpdated)
})

const deleteTarea = asyncHandler(async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)
    if (!tarea){
        res.status(400)
        throw new Error('La tarea no fue creada')
    }
    await  tarea.deleteOne()

   //await Tarea.findByIdAndDelete(req.params.id)

    res.status(200).json({id: `Eliminar la tarea ${req.params.id}`})
})


module.exports = {
    getTareas, 
    setTarea,
    updateTarea,
    deleteTarea
}