const Amizade = require("../amizade");

// Vetor de Amizades
let amizades = [
  new Amizade({ id: 1, idAmigo1: 1, idAmigo2: 1 }),
  new Amizade({ id: 2, idAmigo1: 2, idAmigo2: 2 }),
  new Amizade({ id: 3, idAmigo1: 3, idAmigo2: 3 }),
  new Amizade({ id: 4, idAmigo1: 4, idAmigo2: 4 }),
  new Amizade({ id: 5, idAmigo1: 5, idAmigo2: 5 }),
  new Amizade({ id: 6, idAmigo1: 6, idAmigo2: 6 }),
  new Amizade({ id: 7, idAmigo1: 7, idAmigo2: 7 }),
  new Amizade({ id: 8, idAmigo1: 8, idAmigo2: 8 }),
  new Amizade({ id: 9, idAmigo1: 9, idAmigo2: 9 }),
  new Amizade({ id: 10, idAmigo1: 10, idAmigo2: 10 }),
  new Amizade({ id: 11, idAmigo1: 11, idAmigo2: 11 }),
  new Amizade({ id: 12, idAmigo1: 12, idAmigo2: 12 }),
  new Amizade({ id: 13, idAmigo1: 13, idAmigo2: 13 }),
  new Amizade({ id: 14, idAmigo1: 14, idAmigo2: 14 }),
  new Amizade({ id: 15, idAmigo1: 15, idAmigo2: 15 }),
  new Amizade({ id: 16, idAmigo1: 16, idAmigo2: 16 }),
  new Amizade({ id: 17, idAmigo1: 17, idAmigo2: 17 }),
  new Amizade({ id: 18, idAmigo1: 18, idAmigo2: 18 }),
  new Amizade({ id: 19, idAmigo1: 19, idAmigo2: 19 }),
  new Amizade({ id: 20, idAmigo1: 20, idAmigo2: 20 })

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
