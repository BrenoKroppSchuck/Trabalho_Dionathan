class Partida {
    constructor({ id, timeVencedor, timePerdedor, mvp }) {
        this.id = id ? id : -1;
        this.timeVencedor = this.timeVencedor;
        this.timePerdedor = this.timePerdedor;
        this.mvp = this.mvp;
    }
}

module.exports = Partida