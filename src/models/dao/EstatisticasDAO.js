const Estatisticas = require("../estatistica");

let estatisticas = [
  // Altere aqui para as suas estatisticas
  new Estatisticas({ id: 1, pontuacao: 1500, jogosJogados: 44, jogosVencidos: 28, jogosPerdidos: 16 }),
  new Estatisticas({ id: 2, pontuacao: 1200, jogosJogados: 52, jogosVencidos: 23, jogosPerdidos: 29 }),
  new Estatisticas({ id: 3, pontuacao: 800, jogosJogados: 37, jogosVencidos: 11, jogosPerdidos: 26 }),
  new Estatisticas({ id: 4, pontuacao: 950, jogosJogados: 31, jogosVencidos: 12, jogosPerdidos: 19 }),
  new Estatisticas({ id: 5, pontuacao: 1200, jogosJogados: 52, jogosVencidos: 23, jogosPerdidos: 29 }),
  new Estatisticas({ id: 6, pontuacao: 1800, jogosJogados: 60, jogosVencidos: 45, jogosPerdidos: 15 }),
  new Estatisticas({ id: 7, pontuacao: 1350, jogosJogados: 48, jogosVencidos: 32, jogosPerdidos: 16 }),
  new Estatisticas({ id: 8, pontuacao: 1100, jogosJogados: 40, jogosVencidos: 20, jogosPerdidos: 20 }),
  new Estatisticas({ id: 9, pontuacao: 1600, jogosJogados: 55, jogosVencidos: 35, jogosPerdidos: 20 }),
  new Estatisticas({ id: 10, pontuacao: 1400, jogosJogados: 50, jogosVencidos: 28, jogosPerdidos: 22 }),
  new Estatisticas({ id: 11, pontuacao: 1050, jogosJogados: 45, jogosVencidos: 15, jogosPerdidos: 30 }),
  new Estatisticas({ id: 12, pontuacao: 1700, jogosJogados: 58, jogosVencidos: 42, jogosPerdidos: 16 }),
  new Estatisticas({ id: 13, pontuacao: 1250, jogosJogados: 42, jogosVencidos: 25, jogosPerdidos: 17 }),
  new Estatisticas({ id: 14, pontuacao: 900, jogosJogados: 38, jogosVencidos: 18, jogosPerdidos: 20 }),
  new Estatisticas({ id: 15, pontuacao: 1450, jogosJogados: 54, jogosVencidos: 35, jogosPerdidos: 19 }),
  new Estatisticas({ id: 16, pontuacao: 1300, jogosJogados: 47, jogosVencidos: 30, jogosPerdidos: 17 }),
  new Estatisticas({ id: 17, pontuacao: 1550, jogosJogados: 51, jogosVencidos: 39, jogosPerdidos: 12 }),
  new Estatisticas({ id: 18, pontuacao: 950, jogosJogados: 36, jogosVencidos: 18, jogosPerdidos: 18 }),
  new Estatisticas({ id: 19, pontuacao: 1650, jogosJogados: 56, jogosVencidos: 38, jogosPerdidos: 18 }),
  new Estatisticas({ id: 20, pontuacao: 1150, jogosJogados: 43, jogosVencidos: 20, jogosPerdidos: 23 })

]

class EstatisticasDAO {
  // Retorna a lista de estatisticas
  listar() {
    return estatisticas;
  }

  // Retorna uma estatistica filtrado pela sua id
  buscarPorId(id) {
    return estatisticas.find(estatistica => estatistica.id === id);
  }

  // Verifica se existe uma instância de estatisticas com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena uma nova estatistica
  criar(estatistica) {
    estatistica.id = estatisticas[estatisticas.length - 1].id + 1;
    estatisticas.push(estatistica);
    return parseInt(estatistica.id);
  }

  // Atualiza uma estatistica
  atualizar(id, estatisticaAtualizado) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas[index] = estatisticaAtualizado;
    }
  }

  // Deleta um estatistica
  deletar(id) {
    const index = estatisticas.findIndex(estatistica => estatistica.id === id);
    if (index !== -1) {
      estatisticas.splice(index, 1);
    }
  }
}

module.exports = new EstatisticasDAO();
