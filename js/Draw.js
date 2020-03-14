class Draw {
    constructor() {
        this.options = this.drawInitialFields()[0]
        let _result = [];
        this.getDrawResult = () => _result;

        for (let i = 0; i < 3; i++) {
            _result.push(this.drawResult())
        }
    }

    drawInitialFields() {
        const init = ['lemon', 'bell', 'dollar-sign', 'leaf', 'heart', 'trophy'];
        const initDrums = []
        for (let i = 0; i < 3; i++) {
            initDrums.push(init);
        }
        return initDrums;
    }


    drawResult() {
        let fields = [];
        //uzupełnianie poprzez losowanie
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)
            // fields = this.options[index]
            // colors.push(color)
            fields.push(this.options[index])
        }
        return fields

    }
}