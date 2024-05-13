const mensagem = require("../mensagem")


let mensagens = [
    new Mensagem({ id: 1, texto: "Vamos jogar um jogo agora?", remetente: 3, destinatario: 5 }),
    new Mensagem({ id: 2, texto: "Claro! Qual jogo você tem em mente?", remetente: 4, destinatario: 6 }),
    new Mensagem({ id: 3, texto: "Quero montar um time para jogar Valorant hoje à noite.", remetente: 5, destinatario: 7 }),
    new Mensagem({ id: 4, texto: "Estou dentro! Que horas vamos começar?", remetente: 6, destinatario: 8 }),
    new Mensagem({ id: 5, texto: "Você viu o novo mapa de Valorant? É incrível!", remetente: 7, destinatario: 9 }),
    new Mensagem({ id: 6, texto: "Sim, eu joguei algumas partidas nele. É muito divertido!", remetente: 8, destinatario: 10 }),
    new Mensagem({ id: 7, texto: "Estou procurando alguém para fazer dupla no League of Legends. Você está interessado?", remetente: 9, destinatario: 11 }),
    new Mensagem({ id: 8, texto: "Eu adoraria! Qual é a sua posição preferida?", remetente: 10, destinatario: 12 }),
    new Mensagem({ id: 9, texto: "Estou estudando novas estratégias para Apex Legends. Quer jogar algumas partidas para testá-las?", remetente: 11, destinatario: 13 }),
    new Mensagem({ id: 10, texto: "Claro, estou sempre pronto para umas partidas de Apex!", remetente: 12, destinatario: 14 }),
    new Mensagem({ id: 11, texto: "Você viu as notas de atualização mais recentes do Fortnite?", remetente: 13, destinatario: 15 }),
    new Mensagem({ id: 12, texto: "Sim, algumas mudanças interessantes foram feitas. Vamos jogar algumas partidas para experimentá-las?", remetente: 14, destinatario: 16 }),
    new Mensagem({ id: 13, texto: "Quero melhorar meu ranque em CS:GO. Você pode me dar algumas dicas?", remetente: 15, destinatario: 17 }),
    new Mensagem({ id: 14, texto: "Claro, ficarei feliz em ajudar. Vamos jogar algumas partidas juntos e eu posso te passar algumas dicas.", remetente: 16, destinatario: 18 }),
    new Mensagem({ id: 15, texto: "Estou organizando um torneio de Rocket League neste fim de semana. Você gostaria de participar?", remetente: 17, destinatario: 19 }),
    new Mensagem({ id: 16, texto: "Definitivamente! Rocket League é um dos meus jogos favoritos. Estou animado para participar do torneio.", remetente: 18, destinatario: 20 }),
    new Mensagem({ id: 17, texto: "Você está interessado em se juntar ao meu grupo de Minecraft?", remetente: 19, destinatario: 1 }),
    new Mensagem({ id: 18, texto: "Sim, adoro jogar Minecraft! Vamos construir coisas incríveis juntos.", remetente: 20, destinatario: 2 }),
    new Mensagem({ id: 19, texto: "Estou planejando uma maratona de jogos neste fim de semana. Quer se juntar a mim?", remetente: 1, destinatario: 3 }),
    new Mensagem({ id: 20, texto: "Claro! Vamos jogar alguns jogos épicos juntos.", remetente: 2, destinatario: 4 })
];

class MensagemDAO {
    // Método para criar uma nova mensagem
    criar(mensagem) {
        mensagem.id = mensagens.length + 1;
        mensagem.dataHora = new Date(); // Adicionando a data e hora atuais
        mensagens.push(mensagem);
        return mensagem.id;
    }

    listar() {
        return mensagens;
    }

    buscarPorId(id) {
        return mensagens.find(mensagem => mensagem.id === id);
    }

    atualizar(id, mensagemAtualizada) {
        const index = mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagens[index] = mensagemAtualizada;
        }
    }

    deletar(id) {
        const index = mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagens.splice(index, 1);
        }
    }
}

module.exports = new MensagemDAO();
