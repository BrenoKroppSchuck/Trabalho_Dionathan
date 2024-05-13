const express = require('express');
const router = express.Router();
const PartidasController = require('../controllers/PartidasController');

// Rota para criar uma nova partida (CREATE)
router.post('/', PartidasController.create);

// Rota para listar todas as partidas (READ)
router.get('/', PartidasController.list);

// Rota para mostrar uma partida específica (READ)
router.get('/:id', PartidasController.show);

// Rota para atualizar uma partida (UPDATE)
router.put('/:id', PartidasController.update);

// Rota para deletar uma partida (DELETE)
router.delete('/:id', PartidasController.delete);

module.exports = router;
