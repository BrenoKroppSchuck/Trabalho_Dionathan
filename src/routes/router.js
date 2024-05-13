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

// Importa e utiliza as rotas de amizade
const amizadeRoutes = require('./amizadesRoutes');
router.use('/amizades', amizadeRoutes);

// Importa e utiliza as rotas de mensagens
const mensagemRoutes = require('./mensagemRoutes');
router.use('/mensagens', mensagemRoutes);

// Importa e utiliza as rotas de partidas
const partidaRoutes = require('./partidasRoutes');
router.use('/partidas', partidaRoutes);



module.exports = router;