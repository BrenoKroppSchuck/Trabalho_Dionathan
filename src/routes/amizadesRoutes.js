const express = require('express');
const router = express.Router();
const estatisticasController = require('../controllers/EstatisticasController');


// Rota para criar uma nova amizade (CREATE)
router.post('/', amizadesController.create);

// Rota para listar todas as amizades (READ)
router.get('/', amizadesController.list);

// Rota para mostrar uma amizade (READ)
router.get('/:id', amizadesController.show);

// Rota para atualizar uma amizade (UPDATE)
router.put('/:id', amizadesController.update);

// Rota para deletar uma amizade (DELETE)
router.delete('/:id', amizadesController.delete);


module.exports = router;
