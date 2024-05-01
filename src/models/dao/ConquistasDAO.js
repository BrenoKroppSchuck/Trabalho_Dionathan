const Conquista = require("../conquista");

// Vetor de Conquistas
let conquistas = [
  // Altere aqui para as suas conquistas
  new Conquista({ id: 1, nome: "Qualquer meio", descricao: "Elimine 3 inimigos com um único uso da Aniquilação de Ramattra" }),
  new Conquista({ id: 2, nome: "Dor Incomparável", descricao: "Bloqueio 300 danifique e sobreviva em um único uso da Forma Nêmesis de Ramattra" }),
  new Conquista({ id: 3, nome: "Adrenaline Junkie", descricao: "Tenha 7 das feridas da Junker Queen ativas nos inimigos ao mesmo tempo em Jogo Rápido ou Competitivo" }),
  new Conquista({ id: 4, nome: "Coup De Gracie", descricao: "Use a lâmina irregular e carnificina de Junker Queen para puxar e matar um inimigo em Quick ou Compet Jogo ativo" }),
  new Conquista({ id: 5, nome: "On the Move", descricao: "Mate um inimigo com um tiro na cabeça do Railgun carregado enquanto desliza no Jogo Rápido ou Competitivo" }),
  new Conquista({ id: 6, nome: "Inquebrável", descricao: "Sobreviva a uma explosão direta de uma Granada de Plasma a menos de 2 metros de distância" }),
  new Conquista({ id: 7, nome: "Mestre do Camuflado", descricao: "Fique invisível por mais de 60 segundos consecutivos sem ser detectado por um inimigo" }),
  new Conquista({ id: 8, nome: "Fogo Amigo?", descricao: "Mate acidentalmente um membro da sua equipe e ainda vença a partida" }),
  new Conquista({ id: 9, nome: "Precisão Cirúrgica", descricao: "Acerte 10 tiros na cabeça em 10 inimigos diferentes em menos de 2 minutos" }),
  new Conquista({ id: 10, nome: "Resiliência Extrema", descricao: "Sobreviva a um combate com menos de 10% de saúde e elimine um inimigo em seguida" }),
  new Conquista({ id: 11, nome: "Mestre das Emboscadas", descricao: "Elimine 5 inimigos seguidos sem ser visto, usando apenas armas brancas" }),
  new Conquista({ id: 12, nome: "Sem Rastro", descricao: "Vença uma partida sem ser abatido uma única vez, e elimine pelo menos metade da equipe inimiga" }),
  new Conquista({ id: 13, nome: "Coração de Ferro", descricao: "Complete uma missão solo em modo difícil sem usar nenhum item de cura" }),
  new Conquista({ id: 14, nome: "Colecionador de Troféus", descricao: "Colete todas as armas lendárias disponíveis no jogo em uma única sessão" }),
  new Conquista({ id: 15, nome: "Velocidade da Luz", descricao: "Complete um percurso de obstáculos em menos de 30 segundos" }),
  new Conquista({ id: 16, nome: "Artilheiro de Elite", descricao: "Consiga uma sequência de 10 eliminações sem morrer em um único round" }),
  new Conquista({ id: 17, nome: "Evasão Perfeita", descricao: "Esquive de todos os ataques inimigos por um período de 60 segundos sem sofrer dano" }),
  new Conquista({ id: 18, nome: "Guardião Implacável", descricao: "Defenda um objetivo-chave sozinho contra um ataque inimigo coordenado e vença a partida" }),
  new Conquista({ id: 19, nome: "Domínio Tático", descricao: "Capture todos os pontos de controle em um mapa sem perder nenhum" }),
  new Conquista({ id: 20, nome: "Desafiante Supremo", descricao: "Vença uma partida sem utilizar a habilidade especial de seu personagem" })
];

class ConquistasDAO {
  // Retorna a lista de conquistas
  listar() {
    return conquistas;
  }

  // Retorna um conquista filtrado peloa sua ID
  buscarPorId(id) {
    return conquistas.find(conquista => conquista.id === id);
  }

  // Verifica existe uma instância de conquista com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo conquista
  criar(conquista) {
    conquista.id = conquistas[conquistas.length - 1].id + 1;
    conquistas.push(conquista);
    return parseInt(conquista.id);
  }

  // Atualiza um conquista
  atualizar(id, conquistaAtualizado) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas[index] = conquistaAtualizado;
    }
  }

  // Deleta um conquista
  deletar(id) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas.splice(index, 1);
    }
  }
}

module.exports = new ConquistasDAO();
