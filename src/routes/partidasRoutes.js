const express = require('express');
const router = express.Router();
const partidasController = require('../controllers/PartidasController');

// Rota para criar uma nova estatistica (CREATE)
router.post('/', partidasController.create);

// Rota para listar todas as estatisticas (READ)
router.get('/', partidasController.list);

// Rota para mostrar uma estatistica (READ)
router.get('/:id', partidasController.show);

// Rota para atualizar uma estatistica (UPDATE)
router.put('/:id', partidasController.update);

// Rota para deletar uma estatistica (DELETE)
router.delete('/:id', partidasController.delete);

module.exports = router;