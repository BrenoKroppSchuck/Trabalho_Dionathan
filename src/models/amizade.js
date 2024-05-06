class Amizade {
  constructor({ id, nickName, idAmigo1, idAmigo2, amigos }) {
    this.id = id ? id : -1;
    this.nickName = nickName;
    this.idAmigo1 = idAmigo1;
    this.idAmigo2 = idAmigo2;
    this.amigos = amigos || []
  }

  // Adiciona um amigo à lista de amigos do jogador
  adicionarAmigo(amigo) {
    if (!this.amigos.includes(amigo)) {
      this.amigos.push(amigo);
    }
  }

  // Verifica se o jogador é amigo de outro jogador
  verificarAmizade(jogador) {
    return this.amigos.includes(jogador);
  }

  // Lista os amigos do jogador
  listarAmigos() {
    return this.amigos.map(amigo => amigo.principal());
  }


}

module.exports = Amizade;

