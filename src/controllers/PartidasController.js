const Partida = require('../models/partida')
const JogadoresBanco = require('../models/dao/JogadoresDAO');
const PartidaBanco = require('../models/dao/PartidasDAO');

class ControladorPartidas {
    // Cria uma nova partida

    criar(req, res) {
        const { timeVencedor, timePerdedor, mvp } = req.body;

        // Verifica se todos os IDs dos jogadores existem no banco de dados
        const jogadoresValidos = timeVencedor.concat(timePerdedor, [mvp]).every(id => JogadoresBanco.buscarPorId(id));
        if (!jogadoresValidos) {
            return res.status(404).json({ mensagem: "ID de jogador inválido" });
        }

        // Verifica se o MVP está presente em algum dos times
        const mvpPresenteNaPartida = timeVencedor.includes(mvp) || timePerdedor.includes(mvp);
        if (!mvpPresenteNaPartida) {
            return res.status(400).json({ mensagem: "O MVP deve estar na partida" });
        }

        // Cria a nova partida
        const novaPartida = new Partida({ timeVencedor, timePerdedor, mvp });
        const idPartida = PartidaBanco.criar(novaPartida);
        res.status(201).json({ mensagem: "Partida criada com sucesso", idPartida });
    }


    // Lista todas as partidas
    listar(req, res) {
        const listaDePartidas = PartidaBanco.listar();
        res.status(200).json({ partidas: listaDePartidas });
    }

    // Mostra detalhes de uma partida específica
    mostrar(req, res) {
        const idPartida = parseInt(req.params.id);
        const partidaEncontrada = PartidaBanco.buscarPorId(idPartida);
        if (partidaEncontrada) {
            res.status(200).json({ partida: partidaEncontrada });
        } else {
            res.status(404).json({ mensagem: 'Partida não encontrada' });
        }
    }

    // Atualiza informações de uma partida
    atualizar(req, res) {
        const idPartida = parseInt(req.params.id);
        const { timeVencedor, timePerdedor, mvp } = req.body;
        const partidaAtualizada = new Partida({ idPartida, timeVencedor, timePerdedor, mvp });
        PartidaBanco.atualizar(idPartida, partidaAtualizada);
        res.status(200).json({ mensagem: "Partida atualizada com sucesso", partida: partidaAtualizada });
    }

    // Deleta uma partida do banco de dados
    deletar(req, res) {
        const idPartida = parseInt(req.params.id);
        PartidaBanco.deletar(idPartida);
        res.status(200).json({ mensagem: "Partida deletada com sucesso" });
    }
}

module.exports = new ControladorPartidas();

