const MensagemController = require('../controllers/MensagemController');

class Mensagem {
    constructor({ id, texto, data, hora, idDestinatario, idRemetente }) {
        this.id = id ? id : -1;
        this.texto = texto;
        this.data = data; 
        this.hora = hora; 
        this.idDestinatario = idDestinatario;
        this.idRemetente = idRemetente;
    }

    // Método para criar uma nova mensagem
    static criarMensagem(texto, idRemetente, idDestinatario) {
        const novaMensagem = new Mensagem({
            texto: texto,
            idRemetente: idRemetente,
            idDestinatario: idDestinatario,
            data: new Date().toISOString().split('T')[0], // Obtém a data atual no formato YYYY-MM-DD
            hora: new Date().toISOString().split('T')[1].slice(0, 8), // Obtém a hora atual no formato HH:MM:SS
        });
        return novaMensagem;
    }

    // Método para obter uma representação detalhada (verbose) da mensagem
    verbose() {
        return {
            id: this.id,
            texto: this.texto,
            data: this.data,
            hora: this.hora,
            idDestinatario: this.idDestinatario,
            idRemetente: this.idRemetente
        };
    }
}

module.exports = Mensagem;
