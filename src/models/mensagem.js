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

module.exports = Mensagem
