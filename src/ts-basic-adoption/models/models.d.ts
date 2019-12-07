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
