const Amizade = require("../amizade");

// Vetor de Amizades
let amizades = [
  new Amizade({ id: 1, amigos: [1, 3] }),
  new Amizade({ id: 2, amigos: [2, 4] }),
  new Amizade({ id: 3, amigos: [3, 5] }),
  new Amizade({ id: 4, amigos: [4, 6] }),
  new Amizade({ id: 5, amigos: [5, 7] }),
  new Amizade({ id: 6, amigos: [6, 8] }),
  new Amizade({ id: 7, amigos: [7, 9] }),
  new Amizade({ id: 8, amigos: [8, 10] }),
  new Amizade({ id: 9, amigos: [9, 11] }),
  new Amizade({ id: 10, amigos: [10, 12] }),
  new Amizade({ id: 11, amigos: [11, 13] }),
  new Amizade({ id: 12, amigos: [12, 14] }),
  new Amizade({ id: 13, amigos: [13, 15] }),
  new Amizade({ id: 14, amigos: [14, 16] }),
  new Amizade({ id: 15, amigos: [15, 17] }),
  new Amizade({ id: 16, amigos: [16, 18] }),
  new Amizade({ id: 17, amigos: [17, 19] }),
  new Amizade({ id: 18, amigos: [18, 20] }),
  new Amizade({ id: 19, amigos: [19, 1] }),
  new Amizade({ id: 20, amigos: [20, 2] })
];

class AmizadeDAO {
  // Retorna a lista de amizades
  listar() {
    return amizades;
  }

  // Retorna uma amizade filtrada pelo seu ID
  buscarPorId(id) {
    return amizades.find(amizade => amizade.id === id);
  }

  exist(id) {
    return this.buscarPorId(id) ? true : false;
}


  // Cria e armazena uma nova amizade
  criar(amizade) {
    amizade.id = amizades.length + 1;
    amizades.push(amizade);
    return amizade.id;
  }

  // Atualiza uma amizade
  atualizar(id, amizadeAtualizada) {
    const index = amizades.findIndex(amizade => amizade.id === id);
    if (index !== -1) {
      amizades[index] = amizadeAtualizada;
    }
  }

  // Deleta uma amizade
  deletar(id) {
    const index = amizades.findIndex(amizade => amizade.id === id);
    if (index !== -1) {
      amizades.splice(index, 1);
    }
  }
}

module.exports = new AmizadeDAO();
