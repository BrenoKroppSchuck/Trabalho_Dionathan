const express = require('express');
const router = express.Router();
const AmizadesController = require('../controllers/AmizadesController');

// Rota para criar uma nova amizade (CREATE)
router.post('/', AmizadesController.create);

// Rota para listar todas as amizades (READ)
router.get('/', AmizadesController.list);

// Rota para mostrar uma amizade (READ)
router.get('/:id', AmizadesController.show);

// Rota para atualizar uma amizade (UPDATE)
router.put('/:id', AmizadesController.update);

// Rota para deletar uma amizade (DELETE)
router.delete('/:id', AmizadesController.delete);

module.exports = router;