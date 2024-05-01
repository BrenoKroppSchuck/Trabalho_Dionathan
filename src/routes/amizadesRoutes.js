const express = require('express');
const router = express.Router();
const amizadesControllerController = require('../controllers/AmizadesController');

// Rota para criar um novo jogador (CREATE)
router.post('/', amizadesController.create);

// Rota para listar todos os jogadores (READ)
router.get('/', amizadesController.list);

// Rota para mostrar um jogador (READ)
router.get('/:id', amizadesController.show);

// Rota para atualizar um jogador (UPDATE)
router.put('/:id', amizadesController.update);

// Rota para deletar um jogador (DELETE)
router.delete('/:id', amizadesController.delete);

module.exports = router;