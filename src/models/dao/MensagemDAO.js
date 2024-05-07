const MensagemModel = require("../mensagem");

// Vetor de Mensagem
let mensagens = [
    new MensagemModel({ id: 1, texto: "olá", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 16, idRemetente: 6 }),
    new MensagemModel({ id: 2, texto: "sim", data: new Date(), hora: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }), idDestinatario: 17, idRemetente: 8 }),
    // outras mensagens...
];

class MensagemDAO {
    // Retorna a lista de mensagem
    listar() {
        return mensagens;
    }

    // Retorna uma mensagem filtrada pela sua ID
    buscarPorId(id) {
        return mensagens.find(mensagem => mensagem.id === id);
    }

    // Verifica se existe uma instância de mensagem com aquele id
    exist(id) {
        return this.buscarPorId(id) ? true : false;
    }

    // Cria e armazena um novo mensagem
    criar(mensagem) {
        mensagem.id = mensagens.length > 0 ? mensagens[mensagens.length - 1].id + 1 : 1; // Corrigido para garantir que o ID seja único
        mensagens.push(mensagem);
        return mensagem.id;
    }

    // Atualiza um mensagem
    atualizar(id, mensagemAtualizada) {
        const index = mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagens[index] = mensagemAtualizada;
        }
    }

    // Deleta um mensagem
    deletar(id) {
        mensagens = mensagens.filter(mensagem => mensagem.id !== id); // Corrigido para deletar corretamente a mensagem pelo ID
    }
}

module.exports = new MensagemDAO();
