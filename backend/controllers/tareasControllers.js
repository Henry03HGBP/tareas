const asyncHandler = require("express-async-handler")

const getTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Obtener las tareas'})
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
    res.status(200).json({message:`Modificar la Tarea ${req.params.id}`})
})

const deleteTarea = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Eliminar la tarea ${req.params.id}`})
})


module.exports = {
    getTareas, 
    setTarea,
    updateTarea,
    deleteTarea
}