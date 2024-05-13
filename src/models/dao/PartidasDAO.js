const Partida = require("../partida")

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
]; // Armazena as partidas

class PartidaDAO {
    // Método para criar uma nova partida
    criar(partida) {
        // Atribui um ID à partida antes de adicioná-la à lista de partidas
        partida.idPartida = partidas.length + 1;
        partidas.push(partida);
        return partida.idPartida; // Retorna o ID da partida criada
    }

    // Método para listar todas as partidas
    listar() {
        return partidas; // Retorna a lista completa de partidas
    }

    // Método para buscar uma partida pelo ID
    buscarPorId(idPartida) {
        return partidas.find(partida => partida.idPartida === idPartida); // Retorna a partida correspondente ao ID fornecido
    }

    // Método para atualizar uma partida
    atualizar(idPartida, partidaAtualizada) {
        // Encontra a partida correspondente ao ID fornecido e atualiza seus dados com os da partida atualizada
        const index = partidas.findIndex(partida => partida.idPartida === idPartida);
        if (index !== -1) {
            partidas[index] = partidaAtualizada;
        }
    }

    // Método para deletar uma partida
    deletar(idPartida) {
        // Remove a partida correspondente ao ID fornecido da lista de partidas
        partidas = partidas.filter(partida => partida.idPartida !== idPartida);
    }
}

module.exports = new PartidasDAO();

