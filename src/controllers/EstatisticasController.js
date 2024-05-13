const Estatistica = require("../models/estatistica")
const EstatisticasDAO = require('../models/dao/EstatisticasDAO');

class EstatisticasController {
  // Cria uma nova estatística (CREATE)
  create(req, res) {
    let pontuacao = req.body.pontuacao;
    let jogosJogados = req.body.jogosJogados;
    let jogosVencidos = req.body.jogosVencidos;
    let jogosPerdidos = req.body.jogosPerdidos;

    let estatistica = new Estatistica(pontuacao, jogosJogados, jogosVencidos, jogosPerdidos);
    let estatisticaId = EstatisticasDAO.criar(estatistica);

    // Responde ao navegador
    if (estatisticaId) {
      let estatistica = EstatisticasDAO.buscarPorId(estatisticaId)
      estatistica.calculaEstatisticas()
      res.status(201).json({ estatistica: estatistica })
    }
    else
      res.status(500).json({ message: "Não foi possível criar uma estatística" })
  }

  // Lista todas as estatísticas (READ)
  list(req, res) {
    // Copia o array de estatísticas
    let listaEstatisticas = EstatisticasDAO.listar().slice()

    // Percorre a lista calculando as estatísticas
    for (const estatistica of listaEstatisticas) {
      estatistica.calculaEstatisticas()
    }

    // Responde ao navegador
    if (listaEstatisticas.length === 0)
      res.status(200).json({ message: "Nenhuma estatística encontrada" })
    else
      res.status(200).json({ estatisticas: listaEstatisticas })
  }

  // Mostra uma estatística específica (READ)
  show(req, res) {
    let id = req.params.id;
    let estatistica = EstatisticasDAO.buscarPorId(parseInt(id));

    // Responde ao navegador
    if (estatistica) {
      estatistica.calculaEstatisticas()
      res.status(200).json({ estatistica: estatistica });
    } else {
      res.status(404).json({ message: 'Estatística não encontrada' });
    }
  }

  // Atualiza uma estatística (UPDATE)
  show(req, res) {
    let id = req.params.id;
    let estatistica = EstatisticasDAO.buscarPorId(parseInt(id));
    if (estatistica) {
      if (req.body.pontuacao !== undefined) estatistica.pontuacao = parseInt(req.body.pontuacao)
      if (req.body.jogosJogados !== undefined) estatistica.jogosJogados = parseInt(req.body.jogosJogados)
      if (req.body.jogosVencidos !== undefined) estatistica.jogosVencidos = parseInt(req.body.jogosVencidos)
      if (req.body.jogosPerdidos !== undefined) estatistica.jogosPerdidos = parseInt(req.body.jogosPerdidos)

      // Calcula as estatísticas
      estatistica.calculaEstatisticas()
      // Atualiza a estatística na persistência
      EstatisticasDAO.atualizar(id, estatistica)
      // Responde ao navegador
      res.status(200).json({ estatistica: estatistica });
    }
    else {
      // Responde ao navegador
      res.status(404).json({ message: 'Estatística não encontrada' });
    }
  }

   // Atualizar um estatistica (UPDATE)
   update(req, res) {
    let id = req.params.id;
    let estatistica = EstatisticasDAO.buscarPorId(parseInt(id));
    if (estatistica) {
      if (req.body.pontuacao !== undefined) estatistica.pontuacao = parseInt(req.body.pontuacao)
      if (req.body.jogosJogados !== undefined) estatistica.jogosJogados = parseInt(req.body.jogosJogados)
      if (req.body.jogosVencidos !== undefined) estatistica.jogosVencidos = parseInt(req.body.jogosVencidos)
      if (req.body.jogosPerdidos !== undefined) estatistica.jogosPerdidos = parseInt(req.body.jogosPerdidos)

      //Calcula as estatisticas
      estatistica.calculaEstatisticas()
      // Atualiza a estatitica na persistência
      EstatisticasDAO.atualizar(id, estatistica)
      // Faz o response para o browser
      res.status(200).json({ estatistica: estatistica });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Estatistica não encontrado' });
    }
  }



  // Deleta uma estatística (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (EstatisticasDAO.exist(id)) {
      EstatisticasDAO.deletar(id);

      // Responde ao navegador
      res.status(200).send()
    }
    else {
      // Responde ao navegador
      res.status(404).json({ message: 'Estatística não encontrada' });
    }
  }
}

module.exports = new EstatisticasController();

