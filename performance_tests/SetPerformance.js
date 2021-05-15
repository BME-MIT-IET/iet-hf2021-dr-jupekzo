const { Set: ImmutableSet } = require("immutable");

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

const ezerUgyanolyanElemImmutableSet = "Ezer ugyanolyan elem hozzáadása az immutable Sethez"
console.time(ezerUgyanolyanElemImmutableSet);
let setImmutable = ImmutableSet.of();
for (let i = 0; i < 1000; i++) {
    setImmutable = setImmutable.add(1);
}
console.timeEnd(ezerUgyanolyanElemImmutableSet);

const setNormal = new SetNormalClass()
setNormal.setSame()


const ezerElemImmutableSet = "Ezer különböző elem hozzáadása az immutable Sethez"
console.time(ezerElemImmutableSet);
let setDifferentImmutable = ImmutableSet.of();
for (let i = 0; i < 1000; i++) {
    setDifferentImmutable = setDifferentImmutable.add(i);
}
console.timeEnd(ezerElemImmutableSet);

setNormal.setDifferent()

const benneVanImmutableSet = "Ezer különböző elemű immutable Setből egy elem keresés"
console.time(benneVanImmutableSet);
setDifferentImmutable.has(878)
console.timeEnd(benneVanImmutableSet);

setNormal.getOne(878)


const torlesImmutableSet = "Ezer különböző elemű immutable Setből egy elem törlése"
console.time(torlesImmutableSet);
setDifferentImmutable.remove(878)
console.timeEnd(torlesImmutableSet);

setNormal.deleteOne(878)

