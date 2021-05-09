class MapNormalClass {

    mapObject = new Map()
    mapTenObject = new Map()

    constructor() { }

    setThousand() {
        const ezerElemMap = "Ezer elem hozzáadása a normal Maphez"
        console.time(ezerElemMap);
        for (let index = 0; index < 1000; index++) {
            let value = "value" + index
            this.mapObject = this.mapObject.set(index, value);
        }
        console.timeEnd(ezerElemMap);
    }

    setTenThousand() {
        const tizezerElemMap = "Tízezer elem hozzáadása a rendes Maphez"
        console.time(tizezerElemMap);
        for (let index = 0; index < 10000; index++) {
            let value = "value" + index
            this.mapTenObject = this.mapTenObject.set(index, value);
        }
        console.timeEnd(tizezerElemMap);
    }

    getOne(value) {
        const egyElemMap = "Egy elem elérése tízezer elemből rendes Mapen"
        console.time(egyElemMap);
        this.mapTenObject.get(value)
        console.timeEnd(egyElemMap);
    }

    deleteOne(value){
        const torlesMap = "Egy elem törlése tízezer elemből rendes Mapen"
        console.time(torlesMap);
        this.mapTenObject.delete(value)
        console.timeEnd(torlesMap);
    }


}

module.exports = { MapNormalClass }