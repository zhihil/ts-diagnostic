/// <reference path="./models.d.ts" />

define([
    'dojo/_base/declare',
    'dojo/Stateful',
    'dojo/_base/lang'
], (
    declare: Dojo.declare, 
    Stateful: Dojo.Stateful, 
    lang: Dojo.lang
) => {
    interface PersonalViewModel extends IPersonalViewModel {}

    class PersonalViewModel {
        /* Personal details */
        FirstName = "";
        LastName = "";
        Age: number = null;
        School = "";
        Occupation = "";
        City = "";
        State = "";
        Country = "";
        Address = "";
        Gender: Gender = null;
        Birthday = "";
        Hometown = "";
        PhoneNumberCell = "";
        Friends: number[] = [];
        Status = "";

        /* Padding properties */
        propertyA = "";
        propertyB = "";
        propertyC = "";
    
        propertyA1 = false;
        propertyB1 = false;
        propertyC1 = false;

        propertyA2 = 0;
        propertyB2 = 0;
        propertyC2 = 0;

        /* Object type A */
        propertyA3: User = null;
        propertyB3: User = null;
        propertyC3: User = null;

        /* Object type B */
        readonly propertyA4: Profile = null;
        readonly propertyB4: Profile = null;
        readonly propertyC4: Profile = null;

        /* Object type C */
        readonly propertyA5: Address = null;
        readonly propertyB5: Address = null;
        readonly propertyC5: Address = null;

        /* Constants */
        readonly alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'];
        readonly firstNames = ["Andrew", "Thomas", "Morgan", "Alex", "Sarah", "Velma"];
        readonly lastNames = ["Wellington", "Smith", "Thurston", "Armstrong", "Samson", "Goldberg"];

        /* Methods derived from the parent model */
        readonly getLocation: () => LocationMeta = null;
        readonly getBiography: () => Biography = null;

        constructor(model: Readonly<IProfileViewModel>) {
            this.FirstName = model.FirstName;
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

            this.propertyA4 = this.initializeObjectB();
            this.propertyB4 = this.initializeObjectB();
            this.propertyC4 = this.initializeObjectB();

            this.propertyA5 = this.initializeObjectC();
            this.propertyB5 = this.initializeObjectC();
            this.propertyC5 = this.initializeObjectC();
        }

        registerWatches(model: Readonly<IProfileViewModel>) {
            /* Boilerplate to initialze handlers that keep derived model updated 
                with original model
            */
            model.watch("FirstName", (_propName, _oldValue, newValue: string) => {
                this.FirstName = newValue;
            });
            model.watch("LastName", (_propName, _oldValue, newValue: string) => {
                this.LastName = newValue;
            });
            model.watch("Age", (_propName, _oldValue, newValue: number) => {
                this.Age = newValue;
            });
            model.watch("School", (_propName, _oldValue, newValue: string) => {
                this.School = newValue;
            });
            model.watch("Occupation", (_propName, _oldValue, newValue: string) => {
                this.Occupation = newValue;
            });
            model.watch("City", (_propName, _oldValue, newValue: string) => {
                this.City = newValue;
            });
            model.watch("State", (_propName, _oldValue, newValue: string) => {
                this.State = newValue;
            });
            model.watch("Country", (_propName, _oldValue, newValue: string) => {
                this.Country = newValue;
            });
            model.watch("Address", (_propName, _oldValue, newValue: string) => {
                this.Address = newValue;
            });
            model.watch("Gender", (_propName, _oldValue, newValue: Gender) => {
                this.Gender = newValue;
            });
            model.watch("PhoneNumberCell", (_propName, _oldValue, newValue: string) => {
                this.PhoneNumberCell = newValue;
            });
            model.watch("Birthday", (_propName, _oldValue, newValue: string) => {
                this.Birthday = newValue;
            });
            model.watch("Hometown", (_propName, _oldValue, newValue: string) => {
                this.Hometown = newValue;
            });
            model.watch("Friends", (_propName, _oldValue, newValue: number[]) => {
                this.Friends = newValue;
            });
            model.watch("Status", (_propName, _oldValue, newValue: string) => {
                this.Status = newValue;
            });
        }

        initializeNumber(obj: { a: number; b: number } = { a: 12, b: 13 }) {
            const { a, b } = obj;
            return Math.random() * 100 + a * b;
        }

        initializeString() {
            let str = "";
            while (Math.random() > 0.7) {
                str += this.alphabet[Math.random() * this.alphabet.length];
            }
            return str;
        }

        initializeBoolean() {
            return Math.random() > 0.5;
        }
         
        initializeObjectA(): User {
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
                    IsSomething: this.initializeBoolean(),
                },
                IsQuestionable: this.initializeBoolean(),
                DoSomething: function() {
                    return this.Property.Data + this.Property.RoleId;
                }
            };
        }

        initializeObjectB(): Profile {
            return {
                FirstName: this.firstNames[Math.random() * this.firstNames.length],
                LastName: this.lastNames[Math.random() * this.firstNames.length],
                Id: Math.random() * 10000000 + 10000000,
                Job: "Human Occupation",
                AddressLine1: this.initializeObjectC(),
                AddressLine2: this.initializeObjectC(),
                BusinessLIne: this.initializeObjectC(),
            };
        }

        initializeObjectC(): Address {
            return {
                City: "Toronto",
                Province: "Ontario",
                Country: "Canada",
                Number: 1202,
                Suite: 602
            };
        }

        getUserById(id: string) {
            if (['A', 'B', 'C'].filter(letter => letter === id).length !== 1) {
                return null;
            }
            type userProp = 'propertyA3' | 'propertyB3' | 'propertyC3';
            const prop = `property${id}3` as userProp;
            return this[prop];
        }

        functionA() {
            const localA = 10;
            const localB = "string";
            let localD: number = null;
            
            if (this.propertyA && this.propertyB) {
                localD = this.functionB(this.propertyA, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyA) {
                this.functionC();
                console.log(localA, localB, localD);
            } else {
                this.functionE();
                console.log(localA, localB, localD);
            }
        }

        functionB(str: string, num1: number, num2: number) {
            if (str.length > 0) {
                return num1 + num2;
            } 
            return num1 * num2 + num1;
        }

        functionC() {
            if (this.propertyA3.Property.Data) {
                this.propertyA3.DoSomething();
            } else if (this.propertyA3.Property.IsSomething) {
                this.propertyA3.DoSomething();
            } else {
                this.propertyA3.DoSomething();
            }
        }

        functionD(obj: User, num: number) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        }

        functionE() {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (this.propertyA1 && this.propertyA2 < this.propertyB2) {
                    this.functionD(this.getUserById(letter), Math.random() * 20);
                } else {
                    this.functionD(this.getUserById(letter), Math.random() * 10);
                }
            }
        }

        functionA1() {
            const localA = 10;
            const localB = "string";
            
            if (this.propertyA && this.propertyB) {
                const localD = this.functionB1(this.propertyA, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyA) {
                this.functionC1();
                console.log(localA, localB, localA);
            } else {
                this.functionE1(this.propertyA3, this.propertyA2);
                console.log(localA, localB, localA);
            }
        }

        functionB1(str: string, num1: number, num2: number) {
            if (str.length > 0) {
                return num1 + num2;
            } 
            return num1 * num2 + num1;
        }

        functionC1() {
            if (this.propertyA3.Property.Data) {
                this.propertyA3.DoSomething();
            } else if (this.propertyB3.Property.IsSomething) {
                this.propertyB3.DoSomething();
            } else {
                this.propertyA3.DoSomething();
            }
        }

        functionD1(obj: Readonly<User>, num: number) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        }

        functionE1(obj: Readonly<User>, num: number) {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (obj.IsQuestionable && obj.Property.Data < num) {
                    this.functionD1(this.getUserById(letter), Math.random() * 20);
                } else {
                    this.functionD1(this.getUserById(letter), Math.random() * 10);
                }
            }
        }

        functionA2() {
            const localA = 10;
            const localB = "string";
            
            if (this.propertyA && this.propertyB) {
                const localD = this.functionB2(this.propertyA, this.propertyA2, this.propertyB2);
                console.log(localA, localB, localD);
            } else if (this.propertyC || this.propertyA) {
                this.functionC();
                console.log(localA, localB, localA);
            } else {
                this.functionE();
                console.log(localA, localB, localA);
            }
        }

        functionB2(str: string, num1: number, num2: number) {
            if (str.length > 0) {
                return num1 + num2;
            } 
            return num1 * num2 + num1;
        }

        functionC2() {
            if (this.propertyA3.Property.Data) {
                this.propertyA3.DoSomething();
            } else if (this.propertyB3.Property.IsSomething) {
                this.propertyB3.DoSomething();
            } else {
                this.propertyA3.DoSomething();
            }
        }

        functionD2(obj: Readonly<User>, num: number) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        }

        functionE2() {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (this.propertyA2 && this.propertyA3.Property.Data < this.propertyB3.Property.Data) {
                    this.functionD2(this.getUserById(letter), Math.random() * 20);
                } else {
                    this.functionD2(this.getUserById(letter), Math.random() * 10);
                }
            }
        }
    }

    return declare([Stateful], PersonalViewModel.prototype);
});