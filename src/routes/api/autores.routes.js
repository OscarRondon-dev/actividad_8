const { getAllAutores, getAutorById, createNewAutor,  deleteAutorById, updateAutor } = require('../../controllers/autores.controller');


const router = require('express').Router();

router.get('/', getAllAutores);
router.get('/:id', getAutorById);
router.post('/', createNewAutor);
router.put('/:id', updateAutor);
router.delete('/:id', deleteAutorById);

module.exports = router;