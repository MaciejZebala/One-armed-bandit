class Result {
    static moneyWinInGame(result, bid) {
        if (result) return result * bid;
        else return 0;
    }

    static checkWinner(draw) {

        const drawAllLemon = draw.every(el => el === 'lemon')
        if (drawAllLemon) return 12;
        const drawAllBell = draw.every(el => el === 'bell')
        if (drawAllBell) return 10;
        const drawAllDollarSign = draw.every(el => el === 'dollar-sign')
        if (drawAllDollarSign) return 8;
        const drawAllLeaf = draw.every(el => el === 'leaf')
        if (drawAllLeaf) return 6;
        const drawAllHeart = draw.every(el => el === 'heart')
        if (drawAllHeart) return 4;
        const drawAllTrophy = draw.every(el => el === 'trophy')
        if (drawAllTrophy) return 2;


        if (draw[0] === 'lemon' && draw[1] === 'lemon' || draw[0] === 'lemon' && draw[2] === 'lemon' || draw[1] === 'lemon' && draw[2] === 'lemon') return 9

        if (draw[0] === 'bell' && draw[1] === 'bell' || draw[0] === 'bell' && draw[2] === 'bell' || draw[1] === 'bell' && draw[2] === 'bell') return 8

        if (draw[0] === 'dollar-sign' && draw[1] === 'dollar-sign' || draw[0] === 'dollar-sign' && draw[2] === 'dollar-sign' || draw[1] === 'dollar-sign' && draw[2] === 'dollar-sign') return 7

        if (draw[0] === 'leaf' && draw[1] === 'leaf' || draw[0] === 'leaf' && draw[2] === 'leaf' || draw[1] === 'leaf' && draw[2] === 'leaf') return 4

        if (draw[0] === 'heart' && draw[1] === 'heart' || draw[0] === 'heart' && draw[2] === 'heart' || draw[1] === 'heart' && draw[2] === 'heart') return 2

        if (draw[0] === 'trophy' && draw[1] === 'trophy' || draw[0] === 'trophy' && draw[2] === 'trophy' || draw[1] === 'trophy' && draw[2] === 'trophy') return 3


        if (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return false

    }
}