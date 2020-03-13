class Statistics {
    constructor() {
        this.gameResult = [];
    }

    addGameToStatistics(win, bid) {
        this.gameResult = {
            win,
            bid
        }
        this.gameResult.push(this.gameResult)
    }

    showGameStatistics() {
        let games = this.gameResult.length;
        let wind = this.gameResult.filter(result => result.win).length;
        let losses = this.gameResult.filter(result => !result.win).length
        return [games, wins, losses]
    }
}