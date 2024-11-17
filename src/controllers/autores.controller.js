const { selectAllAutores, selectAutorById, insertAutor, updateAutorById, deleteautor } = require("../models/autores.model");
const { deletePostsByAutorId } = require("../models/posts.model");

// Example controller
const getAllAutores = async (req, res, next) => {
    try {
        const [autores] = await selectAllAutores();
        res.json(autores);
    } catch (error) {
        next(error);
        
    }
}

const getAutorById = async (req, res, next) => {
    autoresId = req.params.id;
    try {
        const [autorById] = await selectAutorById(autoresId);
        res.json(autorById);
    } catch (error) {
        next(error);
        
    }
}

const createNewAutor = async (req, res, next) => {
    const autor = req.body;
    try {
        const [result] = await insertAutor(autor);
        console.log('Insert Result:', result);
        const [byid] = await selectAutorById(result.insertId);
        console.log('Select Result:', byid);
        res.status(201).json(byid);
    } catch (error) {
        next(error);
    }
}

const updateAutor = async (req, res, next) => {
    const autorId = req.params.id;
    const autor = req.body;
    if(!autor.email ){
        res.status(400).send('email is required');
    }
    try {
        await updateAutorById(autorId, autor);
        const [autorUpdated] = await selectAutorById(autorId);
        res.json(autorUpdated);
    } catch (error) {
        next(error);
        
    }
}

const deleteAutorById = async (req, res, next) => {
    const autorId = req.params.id;
    try {
        const [autoreliminado] = await selectAutorById(autorId)
        if (autoreliminado.length === 0) {
            return res.status(404).json({ error: 'Autor no encontrado' });}
        
        await deletePostsByAutorId(autorId); // Eliminar posts asociados
        const [result] = await deleteautor(autorId);
        
        res.json({
            message: 'El autor y sus posts fueron eliminados',
            autor: autoreliminado // Asegúrate de devolver el primer elemento del array
        });	
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getAllAutores, getAutorById, createNewAutor,updateAutor , deleteAutorById
}