const Mensagem = require("../models/mensagem")
const JogadoresDAO = require("../models/dao/JogadoresDAO");
const MensagemDAO = require("../models/dao/MensagemDAO");

class ControladorMensagem {
  // Cria uma nova mensagem (CREATE)

  criar(req, res) {
    const { texto, remetente, destinatario } = req.body;
    const dataHora = new Date();

    const novaMensagem = new Mensagem({ texto, remetente, destinatario, dataHora });
    const idMensagem = MensagemDAO.criar(novaMensagem); // Obtenha o ID da nova mensagem

    res.status(201).json({ mensagem: "Mensagem criada com sucesso", idMensagem, mensagem: novaMensagem });
  }

  // Método para listar todas as mensagens (READ)
  listar(req, res) {
    const listaDeMensagens = MensagemDAO.listar();
    res.status(200).json({ mensagens: listaDeMensagens });
  }

  // Método para mostrar uma mensagem específica (READ)
  mostrar(req, res) {
    const idMensagem = parseInt(req.params.id);
    const mensagem = MensagemDAO.buscarPorId(idMensagem);
    if (mensagem) {
      res.status(200).json({ idMensagem, mensagem });
    } else {
      res.status(404).json({ mensagem: "Mensagem não encontrada" });
    }
  }

  // Método para atualizar uma mensagem (UPDATE)
  atualizar(req, res) {
    const idMensagem = parseInt(req.params.id);
    const { texto, remetente, destinatario } = req.body;
    const mensagemAtualizada = new Mensagem({ texto, remetente, destinatario });
    MensagemDAO.atualizar(idMensagem, mensagemAtualizada);
    res.status(200).json({ mensagem: "Mensagem atualizada com sucesso", idMensagem, mensagem: mensagemAtualizada });
  }

  // Método para deletar uma mensagem (DELETE)
  deletar(req, res) {
    const idMensagem = parseInt(req.params.id);
    MensagemDAO.deletar(idMensagem);
    res.status(200).json({ mensagem: "Mensagem deletada com sucesso", idMensagem });
  }


}

module.exports = new ControladorMensagem();
