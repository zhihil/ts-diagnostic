define([
    "dojo/_base/declare", 
    "dojo/store/util/SimpleQueryEngine",
    "dojo/request"
], (declare: Function, SimpleQueryEngine: Function, request: Function) => {
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

        constructor(options?: IFlatEntityStoreCtorOptions<T>) { 
            if (!options) return;

            if (options.isTracking) {
                this.isTracking = !!options.isTracking;
            }

            this.conditionA = this._setConditionA(options);
            this.conditionB = this.data && this.data.length > 0;
            this.conditionC = (!!options.max || options.max === 0) && 
                this.index * 10 === options.max;

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

        put(obj: FlatEntity<T>): void { 
            const results = this.getIdentity(obj);
            if (results !== null) {
                const newEntity: FlatEntity<T> = {
                    id: obj.id,
                    data: obj.data,
                    parent: obj.parent
                };
                this.data.push(newEntity);
            }
        }

        add(obj: FlatEntity<T>, options?: IFlatEntityStoreAddOptions<T>){ 
            const results = this.getIdentity(obj);
            if (results !== null) {
                const newEntity: FlatEntity<T> = {
                    id: obj.id,
                    data: obj.data,
                    parent: (options.parent === 0 || !!options.parent) ? options.parent : null
                };
                this.data.push(newEntity);
            }
        }

        remove(id: number) { 
            const itemIndex = this.data.map(item => item.id).indexOf(id);
            if (itemIndex === -1) return;
            this.data = [...this.data.slice(0,itemIndex), ...this.data.slice(itemIndex + 1)];
        }

        query(query: any){ 
            return this.data
                .filter(item => {
                    const properties = Object.getOwnPropertyNames(query);
                    for (let filter of properties) {
                        if (item.data[filter as keyof T] !== query[filter]) return false;
                    }
                    return true;
                });
        }

        setData(data: FlatEntity<T>[]) {
            this.data = data;
        }

        _setConditionA(options: IFlatEntityStoreCtorOptions<T>) {
            this.conditionA = options.conditionA && options.conditionB;
            return this.conditionA;
        }

        _functionA(options: IFlatEntityStoreCtorOptions<T>) {
            request(this.dummyUrl, {
                data: JSON.stringify(options.data),
                timeout: 2000
            }).then(
                function(text: string) {
                    console.log(text);
                },
                function(error: string) {
                    console.log(error);
                }
            )
        }

        _functionB(options: IFlatEntityStoreCtorOptions<T>) {
            request(this.dummyUrl, {
                data: JSON.stringify(options.data),
                timeout: 2000
            }).then(
                function(text: string) {
                    console.log(text);
                },
                function(error: string) {
                    console.log(error);
                }
            )
        }

        _functionC(options: IFlatEntityStoreCtorOptions<T>) {
            request(this.dummyUrl, {
                data: JSON.stringify(options.data),
                timeout: 2000
            }).then(
                function(text: string) {
                    console.log(text);
                },
                function(error: string) {
                    console.log(error);
                }
            )
        }
    }

    return declare(null, FlatEntityStore.prototype);
});
