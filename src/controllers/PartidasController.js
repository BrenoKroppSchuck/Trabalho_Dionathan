const Partida = require("../models/partida");
const PartidasDAO = require('../models/dao/PartidasDAO');

// Função para buscar o nome de um jogador pelo seu ID
function buscarNomeJogador(idJogador) {
    // Simulando uma base de dados de jogadores
    const jogadores = {
        1: "Jogador1",
        2: "Jogador2",
        3: "Jogador3",
        4: "Jogador4",
        5: "Jogador5"
        // Adicione mais jogadores conforme necessário
    };

    // Retorna o nome do jogador se o ID existir, caso contrário retorna "Desconhecido"
    return jogadores[idJogador] || "Desconhecido";
}

class PartidasController {
    // Cria uma nova partida (CREATE)
    create(req, res) {
        let timeVencedor = req.body.timeVencedor;
        let timePerdedor = req.body.timePerdedor;

        let partida = new Partida({ timeVencedor, timePerdedor });
        let partidaId = PartidasDAO.criar(partida);

        // Faz o response para o browser
        if (partidaId)
            res.status(201).json({ partida: PartidasDAO.buscarPorId(partidaId) })
        else
            res.status(500).json({ message: "Não foi possível criar um usuário" })
    }

    // Lista todas as partidas (READ)
    list(req, res) {
    let listaPartidas = PartidasDAO.listar().slice();

    if (listaPartidas.length === 0) {
        res.status(200).json({ message: "Nenhuma partida encontrada" });
    } else {
        // Mapeie sobre as partidas e substitua os IDs dos times pelos nomes dos jogadores
        listaPartidas = listaPartidas.map(partida => ({
            id: partida.id,
            timeVencedor: buscarNomeJogador(partida.timeVencedor),
            timePerdedor: buscarNomeJogador(partida.timePerdedor)
        }));

        res.status(200).json({ partidas: listaPartidas });
        
    }
}

    // Mostrar um partida (READ)
    show(req, res) {
        let id = req.params.id;
        let partida = PartidasDAO.buscarPorId(parseInt(id));

        // Faz o response para o browser
        if (partida) {
            partida.calculaPartida()
            res.status(200).json({ partida: partida });
        } else {
            res.status(404).json({ message: 'Partida não encontrado' });
        }
    }

    // Atualizar um partida (UPDATE)
    update(req, res) {
        let id = req.params.id;
        let partida = PartidasDAO.buscarPorId(parseInt(id));
        if (partida) {
            if (req.body.timeVencedor !== undefined) partida.timeVencedor = parseInt(req.body.timePerdedor)
            if (req.body.timePerdedor !== undefined) partida.timePerdedor = parseInt(req.body.timePerdedor)


            // Atualiza a partida na persistência
            PartidasDAO.atualizar(id, partida)

            // Atualiza classficação dos jogadores
            PartidasController.calculaPartida()

            // Faz o response para o browser
            res.status(200).json({ partida: partida });
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Partida não encontrado' });
        }
    }

    // Deleta uma partida (DELETE)
    delete(req, res) {
        let id = parseInt(req.params.id);

        if (PartidasDAO.exist(id)) {
            PartidasDAO.deletar(id);

            // Faz o response para o browser
            res.status(200).send()
        }
        else {
            // Faz o response para o browser
            res.status(404).json({ message: 'Partida não encontrado' });
        }
    }
}

module.exports = new PartidasController();
