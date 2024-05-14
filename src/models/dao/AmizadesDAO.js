const Amizade = require("../amizade");
const JogadoresDAO = require("../dao/JogadoresDAO")

let amizades = [
    new Amizade({ id: 1, amigos: [11, 3] }),
    new Amizade({ id: 2, amigos: [10, 4] }),
    new Amizade({ id: 3, amigos: [9, 5] }),
    new Amizade({ id: 4, amigos: [7, 6] }),
    new Amizade({ id: 5, amigos: [13, 7] }),
    new Amizade({ id: 6, amigos: [14, 8] }),
    new Amizade({ id: 7, amigos: [5, 9] }),
    new Amizade({ id: 8, amigos: [7, 10] }),
    new Amizade({ id: 9, amigos: [16, 11] }),
    new Amizade({ id: 10, amigos: [4, 12] }),
    new Amizade({ id: 11, amigos: [12, 13] }),
    new Amizade({ id: 12, amigos: [1, 14] }),
    new Amizade({ id: 13, amigos: [2, 15] }),
    new Amizade({ id: 14, amigos: [13, 16] }),
    new Amizade({ id: 15, amigos: [9, 17] }),
    new Amizade({ id: 16, amigos: [15, 18] }),
    new Amizade({ id: 17, amigos: [3, 19] }),
    new Amizade({ id: 18, amigos: [20, 19] }),
    new Amizade({ id: 19, amigos: [17, 1] }),
    new Amizade({ id: 20, amigos: [18, 2] })
];

class AmizadeDAO {
    listar() {
        // Retorna as amizades com as informações dos amigos
        return amizades.map(amizade => ({
            id: amizade.id,
            amigos: amizade.amigos.map(amigoId => JogadoresDAO.buscarPorId(amigoId))
        }));
    }

    buscarPorId(id) {
        // Retorna a amizade correspondente ao ID fornecido com as informações dos amigos
        const amizade = amizades.find(amizade => amizade.id === id);
        if (amizade) {
            return {
                id: amizade.id,
                amigos: amizade.amigos.map(amigoId => JogadoresDAO.buscarPorId(amigoId))
            };
        }
        return null;
    }

    exist(id) {
        return this.buscarPorId(id) ? true : false;
    }

    criar(amizade) {
        amizade.id = amizades.length + 1;
        amizades.push(amizade);
        return amizade.id;
    }

    atualizar(id, amizadeAtualizada) {
        const index = amizades.findIndex(amizade => amizade.id === id);
        if (index !== -1) {
            amizades[index] = amizadeAtualizada;
        }
    }

    deletar(id) {
        const index = amizades.findIndex(amizade => amizade.id === id);
        if (index !== -1) {
            amizades.splice(index, 1);
        }
    }
    listarAmigosPorIdJogador(idJogador) {
        const amigos = [];
        for (const amizade of amizades) {
            if (amizade.amigos.includes(idJogador)) {
                amigos.push(...amizade.amigos.filter(id => id !== idJogador));
            }
        }
        return amigos;
    }

    // Método para listar todos os amigos de todos os jogadores
    listarTodosAmigosDosJogadores() {
        const todosAmigos = {};
        for (const jogador of jogadores) {
            const amigosDoJogador = this.listarAmigosPorIdJogador(jogador.id);
            todosAmigos[jogador.id] = amigosDoJogador;
        }
        return todosAmigos;
    }
}


module.exports = new AmizadeDAO();