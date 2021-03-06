type Gender = "M" | "F" | "X" | null;

declare interface Verifiable {
  Property: {
    Data: number;
  }
  IsQuestionable: boolean;
}

declare interface User extends Verifiable {
  Property: {
    Data: number;
    Name: string;
    Id: number;
    UserId: number;
    RoleId: number;
    Timestamp: number;
    IsConditionA: boolean;
    IsConditionB: boolean;
    IsConditionC: boolean;
    IsSomething: boolean;
  },
  DoSomething: () => number;
}

declare interface Profile {
    FirstName: string;
    LastName: string;
    Id: number;
    Job: string;
    AddressLine1: Address;
    AddressLine2: Address;
    BusinessLIne: Address;
}

declare interface Address {
    City: string;
    Province: string;
    Country: string;
    Number: number;
    Suite: number;
}

declare interface LocationMeta {
  city: string;
  state: string;
  country: string;
  address: string;
}

declare interface Contact {
  phoneNumberCell: string;
  phoneNumberBusiness1: string;
  phoneNumberBusiness2: string;
}

declare interface Biography {
  name: string;
  age: number;
  status: string;
}

declare interface ProfessionalBiography {
  job: string;
  location: string;
  businessNumber1: string;
  businessNumber2: string;
}

declare interface EducationalBiography {
  school: string;
  courses: string[];
}

declare interface CommentMetadata {
  textContent: string;
  createdTimestamp: string;
  creatorId: number;
  targetUserId: number;
}

declare interface DiffObject {
  ProfileId?: number;
  AccountCreated?: string;
  Verified?: boolean;
  Confirmed?: boolean;
  Premium?: boolean;
  FirstName?: string;
  LastName?: string;
  Age?: number;
  School?: string;
  Occupation?: string;
  City?: string;
  State?: string;
  Country?: string;
  Address?: string;
  WorkAddress?: string;
  Gender?: Gender;
  Birthday?: string;
  Hometown?: string;
  PhoneNumberCell?: string;
  PhoneNumberBusiness1?: string;
  PhoneNumberBusiness2?: string;
  Friends?: number[];
  Status?: string;
  Courses?: string[];
  SIN?: string;
}

interface WatchHandler<T> {
  (propName: string, oldVal: T, newVal: T): void;
}

declare interface IProfileModel {
  ProfileId: number;
  AccountCreated: string;
  Verified: boolean;
  Confirmed: boolean;
  Premium: boolean;
  FirstName: string;
  LastName: string;
  Age: number;
  School: string;
  Occupation: string;
  City: string;
  State: string;
  Country: string;
  Address: string;
  WorkAddress: string;
  Gender: Gender;
  Birthday: string;
  Hometown: string;
  PhoneNumberCell: string;
  PhoneNumberBusiness1: string;
  PhoneNumberBusiness2: string;
  Friends: number[];
  Status: string;
  Courses: string[];
  SIN: string;
}

declare interface IEmployeeViewModel {
  FirstName: string;
  LastName: string;
  Age: number;
  Occupation: string;
  WorkAddress: string;
  Gender: Gender;
  PhoneNumberCell: string;
  PhoneNumberBusiness1: string;
  PhoneNumberBusiness2: string
  SIN: string;
}

declare interface IStudentViewModel {
  FirstName: string;
  LastName: string;
  Age: number;
  School: string;
  Gender: Gender;
  PhoneNumberCell: string;
  Courses: string[];
  SIN: string;
}

declare interface IPersonalViewModel {
  FirstName: string;
  LastName: string;
  Age: number;
  School: string;
  Occupation: string;
  City: string;
  State: string;
  Country: string;
  Address: string;
  Gender: Gender;
  Birthday: string;
  Hometown: string;
  PhoneNumberCell: string;
  Friends: number[];
  Status: string;
}

declare interface IProfileViewModel extends IProfileModel {
  getLocation(): LocationMeta;
  getContactInfo(): Contact;
  getBiography(): Biography;
  getProfessionalBio(): ProfessionalBiography;
  getEducationalBio(): EducationalBiography;

  /* Mixin implementation methods */  
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  personalViewModel: IPersonalViewModel;
  employeeViewModel: IEmployeeViewModel;
  studentViewModel: IStudentViewModel;
}

declare interface IProfileCollectionViewModel {
  /* Mixin implementation methods */  
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  userProfiles: Map<IProfileViewModel>;
  selectedProfileId: string;

  getUsersData(): any;
  changeSelectedUser(targetId: number): void;
}

/* These are necessary because Dojo's imports don't take advantage of the fact
    that in TypeScript, class declarations create both a value, the class's 
    constructor function, and a type, the class's actual type.

    This project opted to use declaration files to overcome this issue, however,
    it is not possible to simply embed the constructor's type signature into an
    interface. Some additional legwork is needed when a class constructor is
    required.  
*/
declare interface DerivedConstructable<T,K> {
  new(model: K): T;
}

declare interface IConstructablePersonalViewModel extends 
  IPersonalViewModel, 
  DerivedConstructable<IPersonalViewModel, IProfileViewModel> {}

declare interface IConstructableEmployeeViewModel extends 
  IEmployeeViewModel, 
  DerivedConstructable<IEmployeeViewModel, IProfileViewModel> {}

declare interface IConstructableStudentViewModel extends 
  IStudentViewModel, 
  DerivedConstructable<IStudentViewModel, IProfileViewModel> {}

declare interface IConstructableProfileViewModel extends 
  IProfileViewModel, 
  DerivedConstructable<IProfileViewModel, IProfileModel> {}

declare interface IConstructableProfileCollectionViewModel {
  new(): IProfileCollectionViewModel
}
