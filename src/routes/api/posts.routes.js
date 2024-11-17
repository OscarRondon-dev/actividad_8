const { getAllPosts, getPostById, createNewPost, updatePostById, deletePostById, getPostsByAutorId } = require('../../controllers/posts.controller');

const router = require('express').Router();

// traer todos los posts
router.get('/', getAllPosts)

// traer un post por id
router.get('/:id',getPostById )


// traer todos los posts de un autor
router.get('/autor/:id', getPostsByAutorId)

// crear un nuevo post
router.post('/',createNewPost)

// actualizar un post por id
router.put('/:id',updatePostById)

// borrar un post por id
router.delete('/:id',deletePostById)

module.exports = router;