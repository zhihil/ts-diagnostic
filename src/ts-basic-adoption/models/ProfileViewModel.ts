define([
    "dojo/_base/declare",
    "dojo/Stateful",
    "models/EmployeeViewModel",
    "models/PersonalViewModel",
    "models/StudentViewModel",
    "stores/FlatEntityStore"
], (
    declare, 
    Stateful,
    EmployeeViewModel, 
    PersonalViewModel, 
    StudentViewModel,
    FlatEntityStore,
) => {
    class ProfileViewModel {
        /* Account settings */
        ProfileId: number = null;
        AccountCreated = "";
        Verified = false;
        Confirmed = false;
        Premium = false;

        /* Personal details */
        FirstName =  "";
        LastName =  "";
        Age: number = null;
        School =  "";
        Occupation =  "";
        City =  "";
        State =  "";
        Country =  "";
        Address =  "";
        WorkAddress =  "";
        Gender: Gender = null;
        Birthday =  "";
        Hometown =  "";
        PhoneNumberCell =  "";
        PhoneNumberBusiness1 =  "";
        PhoneNumberBusiness2 =  "";
        Friends =  [];
        Status =  "";
        Courses =  [];
        SIN =  "";

        /* Model state */
        isFetching = false;
        isSaving = false;

        /* Padding Properties */
        propertyA = "";
        propertyB = "";
        propertyC = "";
        propertyD = "";
        propertyE = "";
        propertyF = "";
        propertyG = "";
        propertyH = "";
        propertyA1 = false;
        propertyB1 = false;
        propertyC1 = false;
        propertyD1 = false;
        propertyE1 = false;
        propertyF1 = false;
        propertyG1 = false;
        propertyH1 = false;
        propertyA2 = 0;
        propertyB2 = 0;
        propertyC2 = 0;
        propertyD2 = 0;
        propertyE2 = 0;
        propertyF2 = 0;
        propertyG2 = 0;
        propertyH2 = 0;

        /* Object type A */
        propertyA3: User = null;
        propertyB3: User = null;
        propertyC3: User = null;
        propertyD3: User = null;
        propertyE3: User = null;
        propertyF3: User = null;
        propertyG3: User = null;
        propertyH3: User = null;

        /* Object type B */
        propertyA4: Profile = null;
        propertyB4: Profile = null;
        propertyC4: Profile = null;
        propertyD4: Profile = null;
        propertyE4: Profile = null;
        propertyF4: Profile = null;
        propertyG4: Profile = null;
        propertyH4: Profile = null;

        /* Object type C */
        propertyA5: Address = null;
        propertyB5: Address = null;
        propertyC5: Address = null;
        propertyD5: Address = null;
        propertyE5: Address = null;
        propertyF5: Address = null;
        propertyG5: Address = null;
        propertyH5: Address = null;

        /* Sub View Models */
        employeeViewModel = null;
        studentViewModel = null;
        personalViewModel = null;

        /* Store */
        commentsStore = null;

        /* Constants */
        alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                    'y', 'z'];
        firstNames = ["Andrew", "Thomas", "Morgan", "Alex", "Sarah", "Velma"];
        lastNames = ["Wellington", "Smith", "Thurston", "Armstrong", "Samson", "Goldberg"];

        constructor(model /* ProfileModel */) {
            /* Account settings */
            this.ProfileId = model.ProfileId;
            this.AccountCreated = model.AccountCreated;
            this.Verified = model.Verified;
            this.Confirmed = model.Confirmed;
            this.Premium = model.Premium;

            /* Personal details */
            this.FirstName = model.FirstName;
            this.LastName = model.LastName;
            this.Age = model.Age;
            this.School = model.School;
            this.Occupation = model.Occupation;
            this.City = model.City;
            this.State = model.State;
            this.Country = model.Country;
            this.Address = model.Address;
            this.WorkAddress = model.WorkAddress;
            this.Gender = model.Gender;
            this.Birthday = model.Birthday;
            this.Hometown = model.Hometown;
            this.PhoneNumberCell = model.PhoneNumberCell;
            this.PhoneNumberBusiness1 = model.PhoneNumberBusiness1;
            this.PhoneNumberBusiness2 = model.PhoneNumberBusiness2;
            this.Friends = model.Friends;
            this.Status = model.Status;
            this.Courses = model.Courses;
            this.SIN = model.SIN;

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

            this.propertyA4 = this.initializeObjectB();
            this.propertyB4 = this.initializeObjectB();
            this.propertyC4 = this.initializeObjectB();
            this.propertyD4 = this.initializeObjectB();
            this.propertyE4 = this.initializeObjectB();
            this.propertyF4 = this.initializeObjectB();
            this.propertyG4 = this.initializeObjectB();
            this.propertyH4 = this.initializeObjectB();

            this.propertyA5 = this.initializeObjectC();
            this.propertyB5 = this.initializeObjectC();
            this.propertyC5 = this.initializeObjectC();
            this.propertyD5 = this.initializeObjectC();
            this.propertyE5 = this.initializeObjectC();
            this.propertyF5 = this.initializeObjectC();
            this.propertyG5 = this.initializeObjectC();
            this.propertyH5 = this.initializeObjectC();
        }

        postscript() {
            this.employeeViewModel = new EmployeeViewModel(this);
            this.personalViewModel = new PersonalViewModel(this);
            this.studentViewModel = new StudentViewModel(this);

            this.commentsStore = new FlatEntityStore({});
        }

        diff() {
            const diffObj = {};
            for (const prop of Object.getOwnPropertyNames(this)) {
                if (prop === 'employeeViewModel' || prop === 'studentViewModel' || prop === 'personalViewModel') {
                    continue;
                }
                if (prop === 'commentsStore') {
                    continue;
                }
                if (prop === 'firstNames' || prop === 'alphabet' || prop === 'lastNames') {
                    continue;
                }
                if (prop === 'isFetching' || prop === 'isSaving') {
                    continue;
                }
                diffObj[prop] = this[prop];
            }
            return diffObj;
        }

        getLocation(): LocationMeta {
            return {
                city: this.City,
                state: this.State,
                country: this.Country,
                address: this.Address
            };
        }

        getContactInfo(): Contact {
            return {
                phoneNumberCell: this.PhoneNumberCell,
                phoneNumberBusiness1: this.PhoneNumberBusiness1,
                phoneNumberBusiness2: this.PhoneNumberBusiness2
            };
        }

        getBiography(): Biography {
            return {
                name: `${this.FirstName} ${this.LastName}`,
                age: this.Age,
                status: this.Status
            };
        }

        getProfessionalBio(): ProfessionalBiography {
            return {
                job: this.Occupation,
                location: this.WorkAddress,
                businessNumber1: this.PhoneNumberBusiness1,
                businessNumber2: this.PhoneNumberBusiness2
            };
        }

        getEducationalBio(): EducationalBiography {
            return {
                school: this.School,
                courses: this.Courses
            };
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
                    this.functionD(this[`property${letter}3`], Math.random() * 20);
                } else {
                    this.functionD(this[`property${letter}3`], Math.random() * 10);
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

        functionD1(obj: User, num: number) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        }

        functionE1(obj: User, num: number) {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (obj.IsQuestionable && obj.Property.Data < num) {
                    this.functionD1(this[`property${letter}3`], Math.random() * 20);
                } else {
                    this.functionD1(this[`property${letter}3`], Math.random() * 10);
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

        functionD2(obj: User, num: number) {
            if (obj.IsQuestionable) {
                obj.Property.Data = num;
            }
            this.propertyA3 = obj;
        }

        functionE2() {
            const properties = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            for (const letter of properties) {
                if (this.propertyA2 && this.propertyA3.Property.Data < this.propertyB3.Property.Data) {
                    this.functionD2(this[`property${letter}3`], Math.random() * 20);
                } else {
                    this.functionD2(this[`property${letter}3`], Math.random() * 10);
                }
            }
        }
    }

    return declare([Stateful], ProfileViewModel.prototype);
});
