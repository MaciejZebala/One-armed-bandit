class Draw {
    constructor() {
        this.options = this.drawInitialFields()[0]
        let _result = [];

        for (let i = 0; i < 3; i++) {
            const result = this.drawResult()
            _result.push(result)
        }

        this.getDrawResult = () => _result;
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

        for (let i = 0; i < this.options.length; i++) {
            let index = Math.floor(Math.random() * this.options.length)
            fields.push(this.options[index])
        }
        return fields

    }

    drawEndFields() {
        let endFields = []
        const drawResult = this.getDrawResult()

        drawResult.forEach((result, i) => {
            endFields.push(drawResult[i][drawResult[i].length - 1])
        })

        return endFields
    }

}