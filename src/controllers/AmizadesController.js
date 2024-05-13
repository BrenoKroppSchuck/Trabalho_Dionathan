// Importando módulos necessários
const Amizade = require("../models/amizade");
const AmizadeDAO = require('../models/dao/AmizadesDAO');
const JogadoresDAO = require('../models/dao/JogadoresDAO');

class AmizadeController {
  // Cria uma nova amizade (CREATE)
  create(req, res) {
    const { amigos } = req.body;

    // Obtendo IDs dos jogadores
    const jogadoresIds = amigos.map(id => parseInt(id));

    // Buscando jogadores com base em seus IDs
    const jogadores = jogadoresIds.map(id => JogadoresDAO.buscarPorId(id));

    if (jogadores.every(jogador => jogador)) {
      const novaAmizade = new Amizade({ amigos: jogadores });
      AmizadeDAO.criar(novaAmizade);
      res.status(201).json({ message: "Amizade criada com sucesso", amizade: novaAmizade });
    } else {
      res.status(404).json({ message: "Jogador não encontrado" });
    }
}

  // Lista todas as amizades (READ)
  show(req, res) {
    const listaAmizades = AmizadeDAO.listar();
    res.status(200).json({ amizades: listaAmizades });
  }

  // Mostra uma amizade específica (READ)
  show(req, res) {
    const idAmizade = parseInt(req.params.id);
    const amizade = AmizadeDAO.buscarPorId(idAmizade);
    if (amizade) {
      res.status(200).json({ amizade: amizade });
    } else {
      res.status(404).json({ message: 'Amizade não encontrada' });
    }
  }

  // Atualiza uma amizade (UPDATE)
  update(req, res) {
    const idAmizade = parseInt(req.params.id);
    const { amigos } = req.body;

    // Obtendo IDs e apelidos dos jogadores a partir de seus IDs
    const amigosData = amigos.map(id => {
      const jogador = JogadoresDAO.buscarPorId(id);
      if (jogador) {
        return { id: jogador.id, apelido: jogador.apelido };
      } else {
        return null; // Se o jogador não for encontrado, retorna null
      }
    });

    // Verificando se todos os jogadores foram encontrados
    if (amigosData.includes(null)) {
      res.status(404).json({ message: "Jogador não encontrado" });
      return;
    }

    // Criando a estrutura da amizade
    const amizadeAtualizada = new Amizade({ id: idAmizade, amigos: amigosData });
    AmizadeDAO.atualizar(idAmizade, amizadeAtualizada);

    res.status(200).json({ message: "Amizade atualizada com sucesso", amizade: amizadeAtualizada });
  }

  // Deleta uma amizade (DELETE)
  delete(req, res) {
    const idAmizade = parseInt(req.params.id);
    AmizadeDAO.deletar(idAmizade);
    res.status(200).json({ message: "Amizade deletada com sucesso" });
  }


}

// Exportando uma instância da classe AmizadeController
module.exports = new AmizadeController();
