const { List } = require("immutable");

const ezerElemImmutableList = "Ezer elem hozzáadása az immutable Listhez"
console.time(ezerElemImmutableList);
const listImmutable = List.of();
for (let i = 0; i < 1000; i++) {
  listImmutable.push(i);
}
console.timeEnd(ezerElemImmutableList);


const elemKivételeImmutable = "Egy elem megkapása az ezer elemű immutable listából"
console.time(elemKivételeImmutable);
listImmutable[999];
console.timeEnd(elemKivételeImmutable);








const tizezerElemImmutableList = "Tízezer elem hozzáadása az immutable Listhez"
console.time(tizezerElemImmutableList);
const listImmutableTizezer = List.of();
for (let i = 0; i < 10000; i++) {
  listImmutableTizezer.push(i);
}
console.timeEnd(tizezerElemImmutableList);


const elemKivételeImmutabletizezer = "Egy elem megkapása az tízezer elemű immutable listából"
console.time(elemKivételeImmutabletizezer);
listImmutableTizezer[9999];
console.timeEnd(elemKivételeImmutabletizezer);








const ezerElemRendesList = "Ezer elem hozzáadása a rendes Listhez"
console.time(ezerElemRendesList);
const listRendes = [];
for (let i = 0; i < 1000; i++) {
  listRendes.push(i);
}
console.timeEnd(ezerElemRendesList);


const elemKivételeRendes = "Egy elem megkapása az ezer elemű rendes listából"
console.time(elemKivételeRendes);
listRendes[999];
console.timeEnd(elemKivételeRendes);








const tizezerElemRendesList = "Tízezer elem hozzáadása a rendes Listhez"
console.time(tizezerElemRendesList);
const listRendesTizezer = [];
for (let i = 0; i < 10000; i++) {
  listRendesTizezer.push(i);
}
console.timeEnd(tizezerElemRendesList);



const elemKivételeTizezerRendes = "Egy elem megkapása az tízezer elemű rendes listából"
console.time(elemKivételeTizezerRendes);
listRendesTizezer[9999];
console.timeEnd(elemKivételeTizezerRendes);
