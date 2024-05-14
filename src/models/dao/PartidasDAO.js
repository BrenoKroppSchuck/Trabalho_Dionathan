const Partida = require("../partida")
const JogadoresDAO = require("../dao/JogadoresDAO")

let partidas = [
    // Altere aqui para as suas partidas
    new Partida({ id: 1, timeVencedor: [1, 2, 3], timePerdedor: [4, 5, 6], mvp: 4 }),
    new Partida({ id: 2, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 2 }),
    new Partida({ id: 3, timeVencedor: [3, 5, 1], timePerdedor: [2, 4, 6], mvp: 5 }),
    new Partida({ id: 4, timeVencedor: [4, 1, 5], timePerdedor: [3, 2, 6], mvp: 1 }),
    new Partida({ id: 5, timeVencedor: [5, 3, 6], timePerdedor: [1, 2, 4], mvp: 3 }),
    new Partida({ id: 6, timeVencedor: [6, 2, 4], timePerdedor: [1, 3, 5], mvp: 6 }),
    new Partida({ id: 7, timeVencedor: [1, 3, 5], timePerdedor: [2, 4, 6], mvp: 3 }),
    new Partida({ id: 8, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 4 }),
    new Partida({ id: 9, timeVencedor: [3, 5, 1], timePerdedor: [2, 4, 6], mvp: 1 }),
    new Partida({ id: 10, timeVencedor: [4, 1, 5], timePerdedor: [3, 2, 6], mvp: 5 }),
    new Partida({ id: 11, timeVencedor: [5, 3, 6], timePerdedor: [1, 2, 4], mvp: 2 }),
    new Partida({ id: 12, timeVencedor: [6, 2, 4], timePerdedor: [1, 3, 5], mvp: 4 }),
    new Partida({ id: 13, timeVencedor: [1, 3, 5], timePerdedor: [2, 4, 6], mvp: 1 }),
    new Partida({ id: 14, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 6 }),
    new Partida({ id: 15, timeVencedor: [3, 5, 1], timePerdedor: [2, 4, 6], mvp: 3 }),
    new Partida({ id: 16, timeVencedor: [4, 1, 5], timePerdedor: [3, 2, 6], mvp: 5 }),
    new Partida({ id: 17, timeVencedor: [5, 3, 6], timePerdedor: [1, 2, 4], mvp: 4 }),
    new Partida({ id: 18, timeVencedor: [6, 2, 4], timePerdedor: [1, 3, 5], mvp: 2 }),
    new Partida({ id: 19, timeVencedor: [1, 3, 5], timePerdedor: [2, 4, 6], mvp: 5 }),
    new Partida({ id: 20, timeVencedor: [2, 4, 6], timePerdedor: [1, 3, 5], mvp: 6 })
]; // Armazena as partidas

class PartidaDAO {
    // Criar uma nova partida
    criar(partida) {
      // Atribui um ID a partida antes de adicioná-la a lista de partidas
      partida.idPartida = partidas.length + 1;
      partidas.push(partida);
      return partida.idPartida; // Retorna o ID da partida criada
    }
  
    // Listar todas as partidas
    listar() {
      // Retorna as partidas com as informações dos times vencedores, times perdedores e o MVP
      return partidas.map(partida => ({
        idPartida: partida.idPartida,
        timeVencedor: partida.timeVencedor.map(jogadorId => JogadoresDAO.buscarPorId(jogadorId)),
        timePerdedor: partida.timePerdedor.map(jogadorId => JogadoresDAO.buscarPorId(jogadorId)),
        mvp: JogadoresDAO.buscarPorId(partida.mvp)
      }));
    }
  
    //Buscar uma partida pelo ID
    buscarPorId(idPartida) {
      // Retorna a partida correspondente ao ID fornecido com as informações dos times vencedores, times perdedores e o MVP
      const partida = partidas.find(partida => partida.idPartida === idPartida);
      if (partida) {
        return {
          idPartida: partida.idPartida,
          timeVencedor: partida.timeVencedor.map(jogadorId => JogadoresDAO.buscarPorId(jogadorId)),
          timePerdedor: partida.timePerdedor.map(jogadorId => JogadoresDAO.buscarPorId(jogadorId)),
          mvp: JogadoresDAO.buscarPorId(partida.mvp)
        };
      }
      return null;
    }
  
    // Atualizar uma partida
    atualizar(idPartida, partidaAtualizada) {
      // Encontra a partida correspondente ao ID fornecido e atualiza seus dados com os da partida atualizada
      const index = partidas.findIndex(partida => partida.idPartida === idPartida);
      if (index !== -1) {
        partidas[index] = partidaAtualizada;
      }
    }
  
    // Deleta uma partida
    deletar(idPartida) {
      // Remove a partida correspondente ao ID fornecido da lista de partidas
      partidas = partidas.filter(partida => partida.idPartida !== idPartida);
    }
}

module.exports = new PartidaDAO();