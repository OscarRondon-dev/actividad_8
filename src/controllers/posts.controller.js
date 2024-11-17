const { selectAutorById } = require("../models/autores.model");
const { selectAllPosts, selectPostById, selectPostByautorId, insertPost, updatePost, deletePost } = require("../models/posts.model");

// para 
const getAllPosts = async (req, res, next) => {
    try {
        const [posts] = await selectAllPosts();
        res.json(posts);
    } catch (error) {
        next(error);
        
    }
}


const getPostById = async (req, res, next) => {
    const postId = req.params.id;
    try {
        const [resultPost] = await selectPostById(postId);
        if (resultPost.length === 0) {
            return res.json({ error: 'Post no encontrado' });
        }
        const [resultAutor] = await selectAutorById(resultPost[0].autor_id);
        if (resultAutor.length === 0) {
            return res.json({ error: 'Autor no encontrado' });
        }
        res.json({ post: resultPost[0], autor: resultAutor[0] });
    } catch (error) {
        next(error);
    }
}


const createNewPost = async (req, res, next) => {
    try {
        await insertPost(req.body);
        [postInsert] = await selectPostByautorId(req.body.autor_id);
        res.json(postInsert);

    } catch (error) {
        next(error);
        
    }
}

const updatePostById = async (req, res, next) => {
    postId = req.params.id;
    body = req.body;
    try {
        await updatePost( postId, body);
        [postUpdate] = await selectPostById(postId);
        res.json(postUpdate);
    } catch (error) {
        next(error);
        
    }
}

const deletePostById = async (req, res, next) => {
    const postId = req.params.id;
    try {
        const [resultPost] = await selectPostById(postId);
        console.log(resultPost)

        if (resultPost.length === 0) {
            return res.json({ error: 'Post no encontrado' });
        }
        await deletePost(postId);
        res.json({ message: 'Post eliminado', post: resultPost[0] });
    } catch (error) {
        next(error);
    }
}

const getPostsByAutorId = async (req, res, next) => {
    const autorId = req.params.id;
    try {
    const [posts] = await selectPostByautorId(autorId);
    res.json(posts);
    } catch (error) {
        next(error);
        
    }
}
module.exports = {
    getAllPosts, getPostById, createNewPost, updatePostById, deletePostById, getPostsByAutorId
}