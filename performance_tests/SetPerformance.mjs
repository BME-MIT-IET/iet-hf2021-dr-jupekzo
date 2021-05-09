import { createRequire } from 'module'
const require = createRequire(import.meta.url);
const { Set } = require("immutable");
const {SetNormalClass} = require('./SetNormalPerformance.js');

const ezerUgyanolyanElemImmutableSet = "Ezer ugyanolyan elem hozzáadása az immutable Sethez"
console.time(ezerUgyanolyanElemImmutableSet);
let setImmutable = Set.of();
for (let i = 0; i < 1000; i++) {
    setImmutable = setImmutable.add(1);
}
console.timeEnd(ezerUgyanolyanElemImmutableSet);

const setNormal = new SetNormalClass()
setNormal.setSame()


const ezerElemImmutableSet = "Ezer különböző elem hozzáadása az immutable Sethez"
console.time(ezerElemImmutableSet);
let setDifferentImmutable = Set.of();
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

