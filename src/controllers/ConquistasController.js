const Conquista = require("../models/conquista")
const ConquistasDAO = require('../models/dao/ConquistasDAO');

class ConquistasController {
  // Cria uma nova conquista (CREATE)
  create(req, res) {
    let nome = req.body.nome;
    let descricao = req.body.descricao;

    let conquista = new Conquista({ nome, descricao });
    let conquistaId = ConquistasDAO.criar(conquista);

    // Responde ao navegador
    if (conquistaId)
      res.status(201).json({ conquista: ConquistasDAO.buscarPorId(conquistaId) })
    else
      res.status(500).json({ message: "Não foi possível criar uma conquista" })
  }

  // Lista todas as conquistas (READ)
  list(req, res) {
    // Busca os parâmetros na URL
    let nomeSearch = req.query.nomeSearch;
    let descricaoSearch = req.query.descricaoSearch;

    // Copia o array de conquistas
    let listaConquistas = ConquistasDAO.listar().slice()

    // Filtra os resultados se houver alguma query
    if (nomeSearch) {
      listaConquistas = listaConquistas.filter(conquista => conquista.nome.toUpperCase().includes(nomeSearch.toUpperCase()));
    }
    if (descricaoSearch) {
      listaConquistas = listaConquistas.filter(conquista => conquista.descricao.toUpperCase().includes(descricaoSearch.toUpperCase()));
    }

    // Responde ao navegador
    if (listaConquistas.length === 0)
      res.status(200).json({ message: "Nenhuma conquista encontrada" })
    else
      res.status(200).json({ conquistas: listaConquistas })
  }

  // Mostra uma conquista específica (READ)
  show(req, res) {
    let id = req.params.id;
    let conquista = ConquistasDAO.buscarPorId(parseInt(id));

    // Responde ao navegador
    if (conquista) {
      res.status(200).json({ conquista: conquista });
    } else {
      res.status(404).json({ message: 'Conquista não encontrada' });
    }
  }

  // Atualiza uma conquista (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let conquista = ConquistasDAO.buscarPorId(parseInt(id));
    if (conquista) {
      if (req.body.nome) conquista.nome = req.body.nome
      if (req.body.descricao) conquista.descricao = req.body.descricao

      // Atualiza a conquista na persistência
      ConquistasDAO.atualizar(id, conquista)
      // Responde ao navegador
      res.status(200).json({ conquista: conquista });
    }
    else {
      // Responde ao navegador
      res.status(404).json({ message: 'Conquista não encontrada' });
    }
  }

  // Deleta uma conquista (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (ConquistasDAO.exist(id)) {
      ConquistasDAO.deletar(id);

      // Responde ao navegador
      res.status(200).json({ message: "Conquista deletada com sucesso"});
    }
    else {
      // Responde ao navegador
      res.status(404).json({ message: 'Conquista não encontrada' });
    }
  }
}

module.exports = new ConquistasController();
