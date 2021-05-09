class SetNormalClass {

    setObject = new Set()
    setDifferentObject = new Set()

    constructor() { }

    setSame() {
        const ezerUgyanolyanElemSet = "Ezer ugyanolyan elem hozzáadása a Sethez";
        console.time(ezerUgyanolyanElemSet);

        for (let i = 0; i < 1000; i++) {
            this.setObject = this.setObject.add(1);
        }
        console.timeEnd(ezerUgyanolyanElemSet);
    }

    setDifferent() {
        const ezerElemSet = "Ezer különböző elem hozzáadása a Sethez"
        console.time(ezerElemSet);
        for (let i = 0; i < 1000; i++) {
            this.setDifferentObject = this.setDifferentObject.add(i);
        }
        console.timeEnd(ezerElemSet);
    }

    getOne(searchNum) {

        const benneVanSet = "Ezer különböző elemű Setből egy elem keresés"
        console.time(benneVanSet);
        this.setDifferentObject.has(searchNum)
        console.timeEnd(benneVanSet);
    }

    deleteOne(searchNum) {
        const torlesSet = "Ezer különböző elemű Setből egy elem törlése"
        console.time(torlesSet);
        this.setDifferentObject.delete(searchNum)
        console.timeEnd(torlesSet);
    }

}

module.exports = { SetNormalClass }