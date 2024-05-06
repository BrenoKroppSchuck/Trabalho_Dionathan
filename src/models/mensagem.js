
class Mensagem {
    constructor({ id, texto, data, hora, idDestinatario, idRemetente }) {
        this.id = id ? id : -1;
        this.texto = this.texto;
        this.data = this.data;
        this.hora = this.hora;
        this.idDestinatario = this.idDestinatario;
        this.idRemetente = this.idRemetente;
    }
}

Mensagem.criarMensagem = function(texto, idRemetente, idDestinatario) {
    const novaMensagem = new Mensagem({
        id: Math.floor(Math.random() * 1000),
        texto: texto,
        data: new Date().toISOString().split('T')[0], // Obtém a data atual no formato YYYY-MM-DD
        hora: new Date().toISOString().split('T')[1].slice(0, 8), // Obtém a hora atual no formato HH:MM:SS
        idRemetente: idRemetente,
        idDestinatario: idDestinatario
    });
    return novaMensagem;
}

module.exports = Mensagem;
