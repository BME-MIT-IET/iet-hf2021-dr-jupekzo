const { List, Map } = require("immutable");

const ezerElemImmutableList = "Ezer elem hozzáadása az immutable Listhez"
console.time(ezerElemImmutableList);
const listImmutable = List.of();
for (let i = 0; i < 1000; i++) {
  listImmutable.push(i);
}
console.timeEnd(ezerElemImmutableList);

const tizezerElemImmutableList = "Tízezer elem hozzáadása az immutable Listhez"
console.time(tizezerElemImmutableList);
const listImmutableTizezer = List.of();
for (let i = 0; i < 10000; i++) {
  listImmutableTizezer.push(i);
}
console.timeEnd(tizezerElemImmutableList);


const ezerElemRendesList = "Ezer elem hozzáadása a rendes Listhez"
console.time(ezerElemRendesList);
const listRendes = [];
for (let i = 0; i < 1000; i++) {
  listRendes.push(i);
}
console.timeEnd(ezerElemRendesList);

const tizezerElemRendesList = "Tízezer elem hozzáadása a rendes Listhez"
console.time(tizezerElemRendesList);
const listRendesTizezer = [];
for (let i = 0; i < 10000; i++) {
  listRendesTizezer.push(i);
}
console.timeEnd(tizezerElemRendesList);

