define([
    "dojo/_base/declare"
], declare => {
    return declare(null, {
        propertyA: "",
        propertyB: "",
        propertyC: "",
        propertyD: "",
        propertyE: "",
        propertyF: "",
        propertyG: "",
        propertyH: "",
        propertyA1: false,
        propertyB1: false,
        propertyC1: false,
        propertyD1: false,
        propertyE1: false,
        propertyF1: false,
        propertyG1: false,
        propertyH1: false,
        propertyA2: 0,
        propertyB2: 0,
        propertyC2: 0,
        propertyD2: 0,
        propertyE2: 0,
        propertyF2: 0,
        propertyG2: 0,
        propertyH2: 0,

        /* Object type A */
        propertyA3: null,
        propertyB3: null,
        propertyC3: null,
        propertyD3: null,
        propertyE3: null,
        propertyF3: null,
        propertyG3: null,
        propertyH3: null,

        /* Object type B */
        propertyA4: null,
        propertyB4: null,
        propertyC4: null,
        propertyD4: null,
        propertyE4: null,
        propertyF4: null,
        propertyG4: null,
        propertyH4: null,

        /* Object type C */
        propertyA5: null,
        propertyB5: null,
        propertyC5: null,
        propertyD5: null,
        propertyE5: null,
        propertyF5: null,
        propertyG5: null,
        propertyH5: null,

        alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                    'y', 'z'],
        firstNames: ["Andrew", "Thomas", "Morgan", "Alex", "Sarah", "Velma"],
        lastNames: ["Wellington", "Smith", "Thurston", "Armstrong", "Samson", "Goldberg"],

        constructor: function() {
            this.propertyA  = this.initializeString();
            this.propertyB  = this.initializeString();
            this.propertyC  = this.initializeString();
            this.propertyD  = this.initializeString();
            this.propertyE  = this.initializeString();
            this.propertyF  = this.initializeString();
            this.propertyG  = this.initializeString();
            this.propertyH  = this.initializeString();

            this.propertyA1 = this.initializeBoolean();
            this.propertyB1 = this.initializeBoolean();
            this.propertyC1 = this.initializeBoolean();
            this.propertyD1 = this.initializeBoolean();
            this.propertyE1 = this.initializeBoolean();
            this.propertyF1 = this.initializeBoolean();
            this.propertyG1 = this.initializeBoolean();
            this.propertyH1 = this.initializeBoolean();

            this.propertyA2 = this.initializeNumber();
            this.propertyB2 = this.initializeNumber();
            this.propertyC2 = this.initializeNumber();
            this.propertyD2 = this.initializeNumber();
            this.propertyE2 = this.initializeNumber();
            this.propertyF2 = this.initializeNumber();
            this.propertyG2 = this.initializeNumber();
            this.propertyH2 = this.initializeNumber();

            this.propertyA3 = this.initializeObjectA();
            this.propertyB3 = this.initializeObjectA();
            this.propertyC3 = this.initializeObjectA();
            this.propertyD3 = this.initializeObjectA();
            this.propertyE3 = this.initializeObjectA();
            this.propertyF3 = this.initializeObjectA();
            this.propertyG3 = this.initializeObjectA();
            this.propertyH3 = this.initializeObjectA();

            this.propertyA3 = this.initializeObjectB();
            this.propertyB3 = this.initializeObjectB();
            this.propertyC3 = this.initializeObjectB();
            this.propertyD3 = this.initializeObjectB();
            this.propertyE3 = this.initializeObjectB();
            this.propertyF3 = this.initializeObjectB();
            this.propertyG3 = this.initializeObjectB();
            this.propertyH3 = this.initializeObjectB();

            this.propertyA3 = this.initializeObjectC();
            this.propertyB3 = this.initializeObjectC();
            this.propertyC3 = this.initializeObjectC();
            this.propertyD3 = this.initializeObjectC();
            this.propertyE3 = this.initializeObjectC();
            this.propertyF3 = this.initializeObjectC();
            this.propertyG3 = this.initializeObjectC();
            this.propertyH3 = this.initializeObjectC();
        },

        initializeNumber: function() {
            return Math.random() * 100;
        },

        initializeString: function() {
            let str = "";
            while (Math.random() > 0.7) {
                str += this.alphabet[Math.random() * this.alphabet.length];
            }
            return str;
        },

        initializeBoolean: function() {
            return Math.random() > 0.5;
        },
         
        initializeObjectA: function() {
            return {
                Property: {
                    Data: this.initializeNumber(),
                    Name: this.initializeString(),
                    Id: this.initializeNumber(),
                    UserId: this.initializeNumber(),
                    RoleId: this.initializeNumber(),
                    Timestamp: this.initializeNumber(),
                    IsConditionA: this.initializeBoolean(),
                    IsConditionB: this.initializeBoolean(),
                    IsConditionC: this.initializeBoolean(),
                    IsSomething: this.initializeBoolean()
                },
                DoSomething: function() {
                    return this.Property.Data + this.Property.RoleId;
                }
            };
        },

        initializeObjectB: function() {
            return {
                FirstName: this.firstNames[Math.random() * this.firstNames.length],
                LastName: this.lastNames[Math.random() * this.firstNames.length],
                Id: Math.random * 10000000 + 10000000,
                Job: "Human Occupation",
                AddressLine1: this.initializeObjectC(),
                AddressLine2: this.initializeObjectC(),
                BusinessLIne: this.initializeObjectC(),
            };
        },

        initializeObjectC: function() {
            return {
                City: "Toronto",
                Province: "Ontario",
                Country: "Canada",
                Number: 1202,
                Suite: 602
            };
        },

        functionA: function() {
            const localA = 10;
            const localB = "string";
            
            if (this.propertyA && this.propertyB) {
                const localD = functionB(this.propertyE, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyD) {
                this.functionC();
                console.log(localA, localB, localD);
            } else {
                this.functionE();
                console.log(result, localB, localD);
            }
        },

        functionB: function(str, num1, num2) {
            if (str.length > 0) {
                return num1 + num2;
            } 
            return num1 * num2 + num1;
        },

        functionC: function() {
            if (this.propertyG3.Property.Data) {
                this.propertyG3.DoSomething();
            } else if (this.propertyH3.Property.IsSomething) {
                this.propertyH3.DoSomething();
            } else {
                this.propertyA3.DoSomething();
            }
        },

        functionD: function(obj, num) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        },

        functionE: function() {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (this.propertyD1 && this.propertyE2 < this.propertyE3) {
                    this.functionD(this[`property${letter}3`], Math.random() * 20);
                } else {
                    this.functionD(this[`property${letter}3`], Math.random() * 10);
                }
            }
        },

        functionA1: function() {
            const localA = 10;
            const localB = "string";
            
            if (this.propertyA && this.propertyB) {
                const localD = functionB1(this.propertyE, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyD) {
                this.functionC1();
                console.log(localA, localB, localD);
            } else {
                this.functionE1();
                console.log(result, localB, localD);
            }
        },

        functionB1: function(str, num1, num2) {
            if (str.length > 0) {
                return num1 + num2;
            } 
            return num1 * num2 + num1;
        },

        functionC1: function() {
            if (this.propertyG3.Property.Data) {
                this.propertyG3.DoSomething();
            } else if (this.propertyH3.Property.IsSomething) {
                this.propertyH3.DoSomething();
            } else {
                this.propertyA3.DoSomething();
            }
        },

        functionD1: function(obj, num) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        },

        functionE1: function(obj, num) {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (this.propertyD1 && this.propertyE2 < this.propertyE3) {
                    this.functionD1(this[`property${letter}3`], Math.random() * 20);
                } else {
                    this.functionD1(this[`property${letter}3`], Math.random() * 10);
                }
            }
        },

        functionA2: function() {
            const localA = 10;
            const localB = "string";
            
            if (this.propertyA && this.propertyB) {
                const localD = functionB2(this.propertyE, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyD) {
                this.functionC2();
                console.log(localA, localB, localD);
            } else {
                this.functionE2();
                console.log(result, localB, localD);
            }
        },

        functionB2: function(str, num1, num2) {
            if (str.length > 0) {
                return num1 + num2;
            } 
            return num1 * num2 + num1;
        },

        functionC2: function() {
            if (this.propertyG3.Property.Data) {
                this.propertyG3.DoSomething();
            } else if (this.propertyH3.Property.IsSomething) {
                this.propertyH3.DoSomething();
            } else {
                this.propertyA3.DoSomething();
            }
        },

        functionD2: function(obj, num) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        },

        functionE2: function(obj, num) {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (this.propertyD1 && this.propertyE2 < this.propertyE3) {
                    this.functionD2(this[`property${letter}3`], Math.random() * 20);
                } else {
                    this.functionD2(this[`property${letter}3`], Math.random() * 10);
                }
            }
        }
    });
});
