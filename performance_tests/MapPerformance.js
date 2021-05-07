const { Map, List } = require("immutable");

const ezerElemImmutableMap = "Ezer elem hozzáadása az immutable Maphez"
console.time(ezerElemImmutableMap);
let mapImmutable = Map.of();
for( let index = 0; index < 1000; index++){
    let value = "value" + index
    mapImmutable = mapImmutable.set(index, value);
}
console.timeEnd(ezerElemImmutableMap);


const ezerElemMap = "Ezer elem hozzáadása a rendes Maphez"
console.time(ezerElemMap);
const mapObject = {}
for( let index = 0; index < 1000; index++){
    let value = "value" + index
    mapObject[index] = value
}
console.timeEnd(ezerElemMap);


const tizezerElemImmutableMap = "Tízezer elem hozzáadása az immutable Maphez"
console.time(tizezerElemImmutableMap);
let mapImmutableTizezer = Map.of();
for( let index = 0; index < 10000; index++){
    let value = "value" + index
    mapImmutableTizezer = mapImmutableTizezer.set(index, value);
}
console.timeEnd(tizezerElemImmutableMap);


const egyElemImmutableMap = "Egy elem elérése tízezer elemből immutable Mapen"
console.time(egyElemImmutableMap);
mapImmutableTizezer.get(7555);
console.timeEnd(egyElemImmutableMap);


const tizezerElemMap = "Tízezer elem hozzáadása a rendes Maphez"
console.time(tizezerElemMap);
const mapObjectTizezer = {}
for( let index = 0; index < 10000; index++){
    let value = "value" + index
    mapObjectTizezer[index] = value
}
console.timeEnd(tizezerElemMap);


const egyElemMap = "Egy elem elérése tízezer elemből rendes Mapen"
console.time(egyElemMap);
mapObjectTizezer[7555]
console.timeEnd(egyElemMap);
