class Partidas {
    constructor({ id, timeVencedor = [], timePerdedor = [], mvp = null, nickName }) {
        this.id = id;
        this.nickName = nickName;
        this.timeVencedor = timeVencedor.map(id => nickName[id]);
        this.timePerdedor = timePerdedor.map(id => nickName[id]);
        this.mvp = mvp;
    }
}

module.exports = Partidas;
