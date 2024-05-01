const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  // Altere aqui para os seus jogadores
  new Jogador({ id: 1, nome: "Dionisio L. de Vargas", nickName: "dion_vargas96", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 2, nome: "Fernando G. Allen Vargas", nickName: "Kuxeru2", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 3, nome: "Lara Astala", nickName: "Bikuirer", classificacao: 0, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 4, nome: "Bianca Wiesmer", nickName: "EstuyrX", classificacao: 0, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 5, nome: "Petros Papapanagiotou", nickName: "Viapuser", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 6, nome: "Bart Papapanagiotou", nickName: "ViapusMax", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 7, nome: "Barry Papapanagiotou", nickName: "ViapusPro", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 8, nome: "Bruno Papapanagiotou", nickName: "ViapusGamer", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 9, nome: "Bastian Papapanagiotou", nickName: "ViapusMaster", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 10, nome: "Benedict Papapanagiotou", nickName: "ViapusLegend", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 11, nome: "Bryce Papapanagiotou", nickName: "ViapusChamp", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 12, nome: "Blaise Papapanagiotou", nickName: "ViapusElite", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 13, nome: "Bjorn Papapanagiotou", nickName: "ViapusKing", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 14, nome: "Bastien Papapanagiotou", nickName: "ViapusBoss", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 15, nome: "Bobby Papapanagiotou", nickName: "ViapusWarrior", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 16, nome: "Baxter Papapanagiotou", nickName: "ViapusNinja", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 17, nome: "Bruce Papapanagiotou", nickName: "ViapusSniper", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 18, nome: "Baron Papapanagiotou", nickName: "ViapusHunter", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 19, nome: "Barnaby Papapanagiotou", nickName: "ViapusAssassin", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 20, nome: "Boris Papapanagiotou", nickName: "ViapusWarlock", classificacao: 0, estatisticas: 5, conquistas: [1, 5] })

];

class JogadoresDAO {
  // Retorna a lista de jogadores
  listar() {
    return jogadores;
  }

  // Retorna um jogador filtrado peloa sua ID
  buscarPorId(id) {
    return jogadores.find(jogador => jogador.id === id);
  }

  // Verifica existe uma instância de jogadores com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo jogador
  criar(jogador) {
    jogador.id = jogadores[jogadores.length - 1].id + 1;
    jogadores.push(jogador);
    return parseInt(jogador.id);
  }

  // Atualiza um jogador
  atualizar(id, jogadorAtualizado) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores[index] = jogadorAtualizado;
    }
  }

  // Deleta um jogador
  deletar(id) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores.splice(index, 1);
    }
  }
}

module.exports = new JogadoresDAO();
