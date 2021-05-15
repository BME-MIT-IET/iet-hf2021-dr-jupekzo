const { Map: ImmutableMap } = require("immutable");

class MapNormalClass {
  constructor() {
    this.mapObject = new Map();
    this.mapTenObject = new Map();
  }

  setThousand() {
    const ezerElemMap = "Ezer elem hozzáadása a normal Maphez";
    console.time(ezerElemMap);
    for (let index = 0; index < 1000; index++) {
      let value = "value" + index;
      this.mapObject = this.mapObject.set(index, value);
    }
    console.timeEnd(ezerElemMap);
  }

  setTenThousand() {
    const tizezerElemMap = "Tízezer elem hozzáadása a rendes Maphez";
    console.time(tizezerElemMap);
    for (let index = 0; index < 10000; index++) {
      let value = "value" + index;
      this.mapTenObject = this.mapTenObject.set(index, value);
    }
    console.timeEnd(tizezerElemMap);
  }

  getOne(value) {
    const egyElemMap = "Egy elem elérése tízezer elemből rendes Mapen";
    console.time(egyElemMap);
    this.mapTenObject.get(value);
    console.timeEnd(egyElemMap);
  }

  deleteOne(value) {
    const torlesMap = "Egy elem törlése tízezer elemből rendes Mapen";
    console.time(torlesMap);
    this.mapTenObject.delete(value);
    console.timeEnd(torlesMap);
  }
}

module.exports = { MapNormalClass };

const ezerElemImmutableMap = "Ezer elem hozzáadása az immutable Maphez";
console.time(ezerElemImmutableMap);
let mapImmutable = ImmutableMap.of();
for (let index = 0; index < 1000; index++) {
  let value = "value" + index;
  mapImmutable = mapImmutable.set(index, value);
}
console.timeEnd(ezerElemImmutableMap);

const mapNormal = new MapNormalClass();
mapNormal.setThousand();

const tizezerElemImmutableMap = "Tízezer elem hozzáadása az immutable Maphez";
console.time(tizezerElemImmutableMap);
let mapImmutableTizezer = ImmutableMap.of();
for (let index = 0; index < 10000; index++) {
  let value = "value" + index;
  mapImmutableTizezer = mapImmutableTizezer.set(index, value);
}
console.timeEnd(tizezerElemImmutableMap);

mapNormal.setTenThousand();

const egyElemImmutableMap = "Egy elem elérése tízezer elemből immutable Mapen";
console.time(egyElemImmutableMap);
mapImmutableTizezer.get(7555);
console.timeEnd(egyElemImmutableMap);

mapNormal.getOne(7555);

const torlesImmutableMap = "Egy elem törlése tízezer elemből immutable Mapen";
console.time(torlesImmutableMap);
mapImmutableTizezer.delete(7555);
console.timeEnd(torlesImmutableMap);

mapNormal.deleteOne(7555);

/*const { Map } = require("immutable");

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
*/
