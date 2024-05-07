const Mensagem = require("../models/mensagem");
const MensagemDAO = require('../models/dao/MensagemDAO');

class MensagemController {
  // Cria uma nova mensagem (CREATE)
  create(req, res) {
    const { texto, idRemetente, idDestinatario } = req.body;

    const novaMensagem = Mensagem.criarMensagem(texto, idRemetente, idDestinatario);
    const mensagemCriadaId = MensagemDAO.criar(novaMensagem);

    if (mensagemCriadaId) {
      const mensagemCriada = MensagemDAO.buscarPorId(mensagemCriadaId);
      res.status(201).json({ mensagem: mensagemCriada });
    } else {
      res.status(500).json({ message: "Não foi possível criar a mensagem" });
    }
  }

  // Lista todas as mensagens (READ)
  list(req, res) {
    const { nomeSearch, nickSearch } = req.query;

    let listaMensagem = MensagemDAO.listar().slice();

    if (nomeSearch || nickSearch) {
      listaMensagem = listaMensagem.filter(mensagem => {
        if (nomeSearch && nickSearch) {
          return mensagem.nome.toUpperCase().includes(nomeSearch.toUpperCase()) && mensagem.nickName.toUpperCase().includes(nickSearch.toUpperCase());
        } else if (nomeSearch) {
          return mensagem.nome.toUpperCase().includes(nomeSearch.toUpperCase());
        } else if (nickSearch) {
          return mensagem.nickName.toUpperCase().includes(nickSearch.toUpperCase());
        }
      });
    }

    if (listaMensagem.length === 0) {
      res.status(200).json({ message: "Nenhuma mensagem encontrada" });
    } else {
      const listaMensagemVerbose = listaMensagem.map(mensagem => mensagem.verbose());
      res.status(200).json({ mensagem: listaMensagemVerbose });
    }
  }

  // Mostra uma mensagem específica (READ)
  show(req, res) {
    const id = parseInt(req.params.id);
    const mensagem = MensagemDAO.buscarPorId(id);

    if (mensagem) {
      res.status(200).json({ mensagem: mensagem.verbose() });
    } else {
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }

  // Atualiza uma mensagem (UPDATE)
  update(req, res) {
    const id = parseInt(req.params.id);
    const mensagemExistente = MensagemDAO.buscarPorId(id);

    if (!mensagemExistente) {
      return res.status(404).json({ message: 'Mensagem não encontrada' });
    }

    const { texto, idRemetente, idDestinatario } = req.body;

    if (texto) mensagemExistente.texto = texto;
    if (idRemetente) mensagemExistente.idRemetente = idRemetente;
    if (idDestinatario) mensagemExistente.idDestinatario = idDestinatario;

    MensagemDAO.atualizar(id, mensagemExistente);
    res.status(200).json({ mensagem: mensagemExistente.verbose() });
  }

  // Deleta uma mensagem (DELETE)
  delete(req, res) {
    const id = parseInt(req.params.id);

    if (MensagemDAO.exist(id)) {
      MensagemDAO.deletar(id);
      res.status(200).json({ message: 'Mensagem deletada com sucesso' });
    } else {
      res.status(404).json({ message: 'Mensagem não encontrada' });
    }
  }

  // Lista classificação ordenada dos 10 primeiros mensagens
  listaClassificacao(req, res) {
    // Implemente a lógica para listar a classificação aqui
  }

  // Atualiza a classificação dos mensagens pela pontuação das suas mensagens
  calculaClassificacao(req, res) {
    // Implemente a lógica para calcular a classificação aqui
  }
}

module.exports = new MensagemController();
