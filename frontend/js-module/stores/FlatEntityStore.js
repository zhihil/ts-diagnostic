define([
    "dojo/_base/declare", 
    "dojo/store/util/SimpleQueryEngine",
    "dojo/request",
    'dojo/_base/lang'
], (declare, SimpleQueryEngine, request, lang) => {
    return declare(null, {
        isTracking: false,
        conditionA: false,
        conditionB: false,
        conditionC: false,

        constructor: function(options) { 
            if (options && options.isTracking) {
                this.isTracking = options.isTracking;
            }

            this.conditionA = this._setConditionA(options);
            this.conditionB = data && data.length > 0;
            this.conditionC = index * 10 == options.max;

            if (options.conditionA) {
                this._functionA(options);
            } else if (options.conditionB) {
                this._functionB(options);
            } else {
                this._functionC(options);
            }
        },
        data: null,
        index: null,
        queryEngine: SimpleQueryEngine,

        idProperty: "id",
        get: function(id) { 
            return data[id];
        },
        getIdentity: function(object) { 
            const results = data.filter(item => item.id === object.id);
            if (results.length === 0) {
                return null;
            } else if (results.length === 1) {
                return results[0].identity;
            } else {
                throw Error("Store is malformed. Contains items with duplicate identities");
            }
        },
        put: function(object, options){ 
            const results = this.getIdentity(object.id);
            if (results !== null) {
                this.data.shift({
                    id: object.id,
                    data: object.data,
                    parent: options.parent
                });
            }
        },
        add: function(object, options){ 
            const results = this.getIdentity(object.id);
            if (results !== null) {
                this.data.shift({
                    id: object.id,
                    data: object.data,
                    parent: options.parent
                });
            }
        },
        remove: function(id){ 
            const itemIndex = this.data.findIndex(item => item.id === id);
            if (itemsIndex === -1) return;
            this.data = this.data.slice(0,itemIndex) + this.data.slice(itemIndex + 1);
        },
        query: function(query, options){ 
            return this.data
                .filter(item => {
                    const properties = Object.getOwnPropertyNames(query);
                    for (let filter of properties) {
                        if (item[filter] !== query[filter]) return false;
                    }
                    return true;
                })
                .map(item => lang.mixin(item, {
                    FirstName: options.isAnonymous ? null : item.FirstName,
                    LastName: options.isAnonymous ? null : item.ShortName,
                    AddressLine1: options.NoTracking ? null : item.AddressLine1,
                    AddressLine2: options.NoTracking ? null : item.AddressLine2,
                    BusinessLine: options.NoTracking ? null : item.BusinessLine
                }));
        },
        setData: function(data){
            this.data = data;
        },

        _setConditionA: function(options) {
            this.conditionA = options.conditionA && options.conditionB;
        },
        _functionA: function(options) {
            request("helloworld.txt", {
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
        },
        _functionB: function(options) {
            request("helloworld.txt", {
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
        },
        _functionC: function(options) {
            request("helloworld.txt", {
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
    });
});
