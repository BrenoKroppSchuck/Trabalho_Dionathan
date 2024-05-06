class Partidas {
    constructor({ id, timeVencedor = [], timePerdedor = [], mvp = null }) {
        this.id = id;
        this.timeVencedor = timeVencedor;
        this.timePerdedor = timePerdedor;
        this.mvp = mvp;
    }
}

module.exports = Partidas