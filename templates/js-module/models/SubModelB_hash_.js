define([
    'dojo/_base/declare'
], declare => {
    const SubModelB = {
        propertyA: "",
        propertyB: "",
        propertyC: "",
 
        propertyA1: false,
        propertyB1: false,
        propertyC1: false,

        propertyA2: 0,
        propertyB2: 0,
        propertyC2: 0,

        /* Object type A */
        propertyA3: null,
        propertyB3: null,
        propertyC3: null,

        /* Object type B */
        propertyA4: null,
        propertyB4: null,
        propertyC4: null,

        /* Object type C */
        propertyA5: null,
        propertyB5: null,
        propertyC5: null,

        constructor(model) {
            this.propertyA  = model.propertyA
            this.propertyB  = model.propertyB
            this.propertyC  = model.propertyC
            
            this.propertyA1 = model.propertyA1
            this.propertyB1 = model.propertyA2
            this.propertyC1 = model.propertyC1

            this.propertyA2 = model.propertyA2
            this.propertyB2 = model.propertyB2
            this.propertyC2 = model.propertyC2

            this.propertyA3 = model.propertyA3
            this.propertyB3 = model.propertyB3
            this.propertyC3 = model.propertyC3

            this.propertyA4 = model.propertyA4
            this.propertyB4 = model.propertyB4
            this.propertyC4 = model.propertyC4

            this.propertyA5 = model.propertyA5
            this.propertyB5 = model.propertyB5
            this.propertyC5 = model.propertyC5
        },

        constructor: function() {
            this.propertyA  = this.initializeString();
            this.propertyB  = this.initializeString();
            this.propertyC  = this.initializeString();

            this.propertyA1 = this.initializeBoolean();
            this.propertyB1 = this.initializeBoolean();
            this.propertyC1 = this.initializeBoolean();

            this.propertyA2 = this.initializeNumber();
            this.propertyB2 = this.initializeNumber();
            this.propertyC2 = this.initializeNumber();

            this.propertyA3 = this.initializeObjectA();
            this.propertyB3 = this.initializeObjectA();
            this.propertyC3 = this.initializeObjectA();

            this.propertyA3 = this.initializeObjectB();
            this.propertyB3 = this.initializeObjectB();
            this.propertyC3 = this.initializeObjectB();

            this.propertyA3 = this.initializeObjectC();
            this.propertyB3 = this.initializeObjectC();
            this.propertyC3 = this.initializeObjectC();
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
    };

    return declare(null, SubModelB);
});