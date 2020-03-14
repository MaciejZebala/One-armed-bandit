class Wallet {
    constructor(money) {
        let _money = money;
        this.getWalletValue = () => _money;
    }

    checkCanPlay(value) {
        if (this.getWalletValue() >= value) return true;
        return false;
    }

    changeWallet(value, type = "+") {
        if (typeof value === 'number' && !isNaN(value)) {
            if (type === "+") {
                return this.getWalletValue() += value;
            } else if (type === '-') {
                return this.getWalletValue() -= value;
            } else {
                throw new Error('nieprawidłowy typ działania')
            }
        } else {
            throw new Error("nieprawdidłowa liczba")
        }
    }
}