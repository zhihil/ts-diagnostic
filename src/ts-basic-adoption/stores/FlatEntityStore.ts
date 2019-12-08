define([
    "dojo/_base/declare", 
    "dojo/store/util/SimpleQueryEngine",
    "dojo/request"
], (declare, SimpleQueryEngine, request) => {
    class FlatEntityStore<T> implements IFlatEntityStore<T>{
        isTracking = false;
        conditionA = false;
        conditionB = false;
        conditionC = false;
        dummyUrl = 'http://localhost:9001/dummy'; 

        data: FlatEntity<T>[] = null;
        index: number = null;
        queryEngine = SimpleQueryEngine;

        idProperty =  "id";

        constructor(options: object) { 
            if (options && options.isTracking) {
                this.isTracking = options.isTracking;
            }

            this.conditionA = this._setConditionA(options);
            this.conditionB = this.data && this.data.length > 0;
            this.conditionC = this.index * 10 == options.max;

            if (options.conditionA) {
                this._functionA(options);
            } else if (options.conditionB) {
                this._functionB(options);
            } else {
                this._functionC(options);
            }
        }

        get(id: number) { 
            return this.data[id];
        }

        getIdentity(object: FlatEntity<T>) { 
            const results = this.data.filter(item => item.id === object.id);
            if (results.length === 0) {
                return null;
            } else if (results.length === 1) {
                return results[0].id;
            } else {
                throw Error("Store is malformed. Contains items with duplicate identities");
            }
        }

        put(obj: FlatEntity<T>, _): void { 
            const results = this.getIdentity(obj);
            if (results !== null) {
                this.data.push({
                    id: obj.id,
                    data: obj.data,
                    parent: obj.parent
                });
            }
        }

        add(obj: FlatEntity<T>, options){ 
            const results = this.getIdentity(obj);
            if (results !== null) {
                this.data.push({
                    id: obj.id,
                    data: obj.data,
                    parent: options.parent
                });
            }
        }

        remove(id: number) { 
            const itemIndex = this.data.map(item => item.id).indexOf(id);
            if (itemIndex === -1) return;
            this.data = [...this.data.slice(0,itemIndex), ...this.data.slice(itemIndex + 1)];
        }

        query(query, options){ 
            return this.data
                .filter(item => {
                    const properties = Object.getOwnPropertyNames(query);
                    for (let filter of properties) {
                        if (item[filter] !== query[filter]) return false;
                    }
                    return true;
                });
        }

        setData(data: FlatEntity<T>[]) {
            this.data = data;
        }

        _setConditionA(options) {
            this.conditionA = options.conditionA && options.conditionB;
            return this.conditionA;
        }

        _functionA(options) {
            request(this.dummyUrl, {
                data: JSON.stringify(options.data),
                timeout: 2000
            }).then(
                function(text) {
                    console.log(text);
                },
                function(error) {
                    console.log(error);
                }
            )
        }

        _functionB(options) {
            request(this.dummyUrl, {
                data: JSON.stringify(options.data),
                timeout: 2000
            }).then(
                function(text) {
                    console.log(text);
                },
                function(error) {
                    console.log(error);
                }
            )
        }

        _functionC(options) {
            request(this.dummyUrl, {
                data: JSON.stringify(options.data),
                timeout: 2000
            }).then(
                function(text) {
                    console.log(text);
                },
                function(error) {
                    console.log(error);
                }
            )
        }
    }

    return declare(null, FlatEntityStore.prototype);
});
