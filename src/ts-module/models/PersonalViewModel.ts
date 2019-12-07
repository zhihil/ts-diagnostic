define([
    'dojo/_base/declare',
    'dojo/Stateful',
    'dojo/_base/lang'
], (declare, Stateful, lang) => {
    return declare([Stateful], {
        /* Personal details */
        FirstName: "",
        LastName: "",
        Age: null,
        School: "",
        Occupation: "",
        City: "",
        State: "",
        Country: "",
        Address: "",
        Gender: "",
        Birthday: "",
        Hometown: "",
        PhoneNumberCell: "",
        Friends: [],
        Status: "",

        /* Padding properties */
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

        /* Constants */
        alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                    'y', 'z'],
        firstNames: ["Andrew", "Thomas", "Morgan", "Alex", "Sarah", "Velma"],
        lastNames: ["Wellington", "Smith", "Thurston", "Armstrong", "Samson", "Goldberg"],

        /* Methods derived from the parent model */
        getLocation: null,
        getBiography: null,

        constructor(model) {
            this.set('FirstName', model.FirstName);
            this.LastName = model.LastName;
            this.Age = model.Age;
            this.School = model.School;
            this.Occupation = model.Occupation;
            this.City = model.City;
            this.State = model.State;
            this.Country = model.Country;
            this.Address = model.Address;
            this.Gender = model.Gender;
            this.Birthday = model.Birthday;
            this.Hometown = model.Hometown;
            this.PhoneNumberCell = model.PhoneNumberCell;
            this.Friends = model.Friends;
            this.Status = model.Status;

            this.registerWatches(model);

            this.getBiography = lang.hitch(this, model.getBiography);
            this.getLocation = lang.hitch(this, model.getLocation);

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

        registerWatches(model) {
            /* Boilerplate to initialze handlers that keep derived model updated 
                with original model
            */
            model.watch("FirstName", (_propName, _oldValue, newValue) => {
                this.FirstName = newValue;
            });
            model.watch("LastName", (_propName, _oldValue, newValue) => {
                this.LastName = newValue;
            });
            model.watch("Age", (_propName, _oldValue, newValue) => {
                this.Age = newValue;
            });
            model.watch("School", (_propName, _oldValue, newValue) => {
                this.School = newValue;
            });
            model.watch("Occupation", (_propName, _oldValue, newValue) => {
                this.Occupation = newValue;
            });
            model.watch("City", (_propName, _oldValue, newValue) => {
                this.City = newValue;
            });
            model.watch("State", (_propName, _oldValue, newValue) => {
                this.State = newValue;
            });
            model.watch("Country", (_propName, _oldValue, newValue) => {
                this.Country = newValue;
            });
            model.watch("Address", (_propName, _oldValue, newValue) => {
                this.Address = newValue;
            });
            model.watch("Gender", (_propName, _oldValue, newValue) => {
                this.Gender = newValue;
            });
            model.watch("PhoneNumberCell", (_propName, _oldValue, newValue) => {
                this.PhoneNumberCell = newValue;
            });
            model.watch("Birthday", (_propName, _oldValue, newValue) => {
                this.Birthday = newValue;
            });
            model.watch("Hometown", (_propName, _oldValue, newValue) => {
                this.Hometown = newValue;
            });
            model.watch("Friends", (_propName, _oldValue, newValue) => {
                this.Friends = newValue;
            });
            model.watch("Status", (_propName, _oldValue, newValue) => {
                this.Status = newValue;
            });
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
                Id: Math.random() * 10000000 + 10000000,
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
                const localD = this.functionB(this.propertyE, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyD) {
                this.functionC();
                console.log(localA, localB, localA);
            } else {
                this.functionE();
                console.log(localA, localB, localA);
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
                const localD = this.functionB1(this.propertyE, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyD) {
                this.functionC1();
                console.log(localA, localB, localA);
            } else {
                this.functionE1();
                console.log(localA, localB, localA);
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
                const localD = this.functionB2(this.propertyE, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyD) {
                this.functionC2();
                console.log(localA, localB, localA);
            } else {
                this.functionE2();
                console.log(localA, localB, localA);
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

        functionE2: function() {
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