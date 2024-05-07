const { Router } = require("express");
const router = new Router();

// Importa e utiliza as rotas de jogadores
const jogadoresRoutes = require('./jogadoresRoutes');
router.use('/jogadores', jogadoresRoutes);

// Importa e utiliza as rotas de conquistas
const conquistasRoutes = require('./conquistasRoutes');
router.use('/conquistas', conquistasRoutes);

// Importa e utiliza as rotas de estatisticas
const estatisticasRoutes = require('./estatisticasRoutes');
router.use('/estatisticas', estatisticasRoutes);

// Importa e utiliza as rotas de estatisticas
const mensagemRoutes = require('./mensagemRoutes');
router.use('/mensagem', mensagemRoutes);

// Importa e utiliza as rotas de partidas
const partidaRoutes = require('./partidasRoutes');
router.use('/partidas', partidaRoutes);

// Importa e utiliza as rotas de amizades
const amizadeRoutes = require('./amizadesRoutes');
router.use('/amizades', amizadeRoutes);

module.exports = router;
