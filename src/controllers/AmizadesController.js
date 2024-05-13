const Amizade = require("../models/amizade");
const AmizadeDAO = require('../models/dao/AmizadesDAO');

class AmizadeController {
  adicionarAmigo(req, res) {
    const { idAmizade, idJogador1, idJogador2 } = req.body;

    const amizade = new Amizade({ id: idAmizade, amigos: [idJogador1, idJogador2] });
    const amizadeId = AmizadeDAO.criar(amizade);

    if (amizadeId)
      res.status(201).json({ amizade: AmizadeDAO.buscarPorId(amizadeId) });
    else
      res.status(500).json({ message: "Não foi possível adicionar amigo" });
  }

  removerAmigo(req, res) {
    const amizadeId = req.params.id;

    if (AmizadeDAO.exist(amizadeId)) {
      AmizadeDAO.deletar(amizadeId);
      res.status(200).send();
    } else {
      res.status(404).json({ message: 'Amizade não encontrada' });
    }
  }

  listarAmigos(req, res) {
    const jogadorId = req.params.id;
    const amizades = AmizadeDAO.listar();

    const amigos = [];
    amizades.forEach(amizade => {
      if (amizade.amigos.includes(jogadorId)) {
        const amigoId = amizade.amigos.find(id => id !== jogadorId);
        amigos.push(amigoId);
      }
    });

    res.status(200).json({ amigos: amigos });
  }
}

module.exports = new AmizadeController();