const Partidas = require("../partida")

// Vetor de Partidas
let partidas = [
    // Altere aqui para as suas partidas
    new Partidas({ id: 1, timeVencedor: [1, 2, 3], timePerdedor: [4, 5, 6], mvp: 4 }),
    new Partidas({ id: 2, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 2 }),
    new Partidas({ id: 3, timeVencedor: [3, 5, 1], timePerdedor: [2, 4, 6], mvp: 5 }),
    new Partidas({ id: 4, timeVencedor: [4, 1, 5], timePerdedor: [3, 2, 6], mvp: 1 }),
    new Partidas({ id: 5, timeVencedor: [5, 3, 6], timePerdedor: [1, 2, 4], mvp: 3 }),
    new Partidas({ id: 6, timeVencedor: [6, 2, 4], timePerdedor: [1, 3, 5], mvp: 6 }),
    new Partidas({ id: 7, timeVencedor: [1, 3, 5], timePerdedor: [2, 4, 6], mvp: 3 }),
    new Partidas({ id: 8, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 4 }),
    new Partidas({ id: 9, timeVencedor: [3, 5, 1], timePerdedor: [2, 4, 6], mvp: 1 }),
    new Partidas({ id: 10, timeVencedor: [4, 1, 5], timePerdedor: [3, 2, 6], mvp: 5 }),
    new Partidas({ id: 11, timeVencedor: [5, 3, 6], timePerdedor: [1, 2, 4], mvp: 2 }),
    new Partidas({ id: 12, timeVencedor: [6, 2, 4], timePerdedor: [1, 3, 5], mvp: 4 }),
    new Partidas({ id: 13, timeVencedor: [1, 3, 5], timePerdedor: [2, 4, 6], mvp: 1 }),
    new Partidas({ id: 14, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 6 }),
    new Partidas({ id: 15, timeVencedor: [3, 5, 1], timePerdedor: [2, 4, 6], mvp: 3 }),
    new Partidas({ id: 16, timeVencedor: [4, 1, 5], timePerdedor: [3, 2, 6], mvp: 5 }),
    new Partidas({ id: 17, timeVencedor: [5, 3, 6], timePerdedor: [1, 2, 4], mvp: 4 }),
    new Partidas({ id: 18, timeVencedor: [6, 2, 4], timePerdedor: [1, 3, 5], mvp: 2 }),
    new Partidas({ id: 19, timeVencedor: [1, 3, 5], timePerdedor: [2, 4, 6], mvp: 5 }),
    new Partidas({ id: 20, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 6 })
];

class PartidasDAO {
    // Retorna a lista de partidas
    listar() {
        return partidas;
    }

    // Retorna um partida filtrado peloa sua ID
    buscarPorId(id) {
        return partidas.find(partida => partida.id === id);
    }

    // Verifica existe uma instância de partida com aquele id
    exist(id) {
        return this.buscarPorId(id) ? true : false;
    }

    // Cria e armazena um novo partida
    criar(partida) {
        partida.id = partidas[partidas.length - 1].id + 1;
        partidas.push(partida);
        return parseInt(partida.id);
    }

    // Atualiza um partida
    atualizar(id, partidaAtualizado) {
        const index = partidas.findIndex(partida => partida.id === id);
        if (index !== -1) {
            partidas[index] = partidaAtualizado;
        }
    }

    // Deleta um partida
    deletar(id) {
        const index = partidas.findIndex(partida => partida.id === id);
        if (index !== -1) {
            partidas.splice(index, 1);
        }
    }
}

module.exports = new PartidasDAO();