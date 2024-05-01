const Mensagem = require("../mensagem")

// Vetor de Mensagem
let mensagem = [
    // Altere aqui para as suas mensagens
    new Mensagem({ id: 1, texto: "olá", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 16, idRemetente: 6 }),
    new Mensagem({ id: 2, texto: "sim", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 17, idRemetente: 8 }),
    new Mensagem({ id: 3, texto: "não", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 19, idRemetente: 9 }),
    new Mensagem({ id: 4, texto: "dei hs", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 18, idRemetente: 7 }),
    new Mensagem({ id: 5, texto: "rush b", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 14, idRemetente: 3 }),
    new Mensagem({ id: 6, texto: "rush a", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 20, idRemetente: 1 }),
    new Mensagem({ id: 7, texto: "muitos aqui", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 15, idRemetente: 2 }),
    new Mensagem({ id: 8, texto: "tem c", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 13, idRemetente: 4 }),
    new Mensagem({ id: 9, texto: "boa noite", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 12, idRemetente: 20 }),
    new Mensagem({ id: 10, texto: "bom dia", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 11, idRemetente: 16 }),
    new Mensagem({ id: 11, texto: "xitado", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 10, idRemetente: 18 }),
    new Mensagem({ id: 12, texto: "menos 90", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 9, idRemetente: 12 }),
    new Mensagem({ id: 13, texto: "tem b", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 8, idRemetente: 15 }),
    new Mensagem({ id: 14, texto: "tem a", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 7, idRemetente: 13 }),
    new Mensagem({ id: 15, texto: "boa tarde", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 6, idRemetente: 19 }),
    new Mensagem({ id: 16, texto: "oi", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 5, idRemetente: 17 }),
    new Mensagem({ id: 17, texto: "não quero", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 4, idRemetente: 14 }),
    new Mensagem({ id: 18, texto: "talvez", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 3, idRemetente: 5 }),
    new Mensagem({ id: 19, texto: "beleza", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 2, idRemetente: 10 }),
    new Mensagem({ id: 20, texto: "eae", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 1, idRemetente: 11 })
];

class MensagemDAO {
    // Retorna a lista de mensagem
    listar() {
        return mensagem;
    }

    // Retorna um mensagem filtrado peloa sua ID
    buscarPorId(id) {
        return mensagem.find(mensagem => mensagem.id === id);
    }

    // Verifica existe uma instância de mensagem com aquele id
    exist(id) {
        return this.buscarPorId(id) ? true : false;
    }

    // Cria e armazena um novo mensagem
    criar(mensagem) {
        mensagem.id = mensagem[mensagem.length - 1].id + 1;
        mensagem.push(mensagem);
        return parseInt(mensagem.id);
    }

    // Atualiza um mensagem
    atualizar(id, mensagemAtualizada) {
        const index = mensagem.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagem[index] = mensagemAtualizada;
        }
    }

    // Deleta um mensagem
    deletar(id) {
        const index = mensagem.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagem.splice(index, 1);
        }
    }
}

module.exports = new MensagemDAO();
