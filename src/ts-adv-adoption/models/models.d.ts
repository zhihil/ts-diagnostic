/// <reference path="../ts-adv-adoption.d.ts" />

import Stateful from "dojo/Stateful";

type Gender = "M" | "F" | "X" | null;

export interface Verifiable {
  Property: {
    Data: number;
  }
  IsQuestionable: boolean;
}

export interface User extends Verifiable {
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

export interface Profile {
    FirstName: string;
    LastName: string;
    Id: number;
    Job: string;
    AddressLine1: Address;
    AddressLine2: Address;
    BusinessLIne: Address;
}

export interface Address {
    City: string;
    Province: string;
    Country: string;
    Number: number;
    Suite: number;
}

export interface LocationMeta {
  city: string;
  state: string;
  country: string;
  address: string;
}

export interface Contact {
  phoneNumberCell: string;
  phoneNumberBusiness1: string;
  phoneNumberBusiness2: string;
}

export interface Biography {
  name: string;
  age: number;
  status: string;
}

export interface ProfessionalBiography {
  job: string;
  location: string;
  businessNumber1: string;
  businessNumber2: string;
}

export interface EducationalBiography {
  school: string;
  courses: string[];
}

export interface CommentMetadata {
  textContent: string;
  createdTimestamp: string;
  creatorId: number;
  targetUserId: number;
}

export interface IProfileModel {
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

interface DerivedConstructable<K> {
  new(model: K): this;
}

export type IEmployeeViewModel = Pick<IProfileViewModel,
  'FirstName' | 'LastName' | 'Age' | 'Occupation' | 'WorkAddress' | 'Gender' | 
  'PhoneNumberCell' | 'PhoneNumberBusiness1' | 'PhoneNumberBusiness2' | 'SIN'
> & Stateful & DerivedConstructable<IProfileViewModel>;

export type IStudentViewModel = Pick<IProfileViewModel,
  'FirstName' | 'LastName' | 'Age' | 'School' | 'Gender' | 'PhoneNumberCell' |
  'Courses' | 'SIN'
> & Stateful & DerivedConstructable<IProfileViewModel>;

export type IPersonalViewModel = Pick<IProfileViewModel,
  'FirstName' | 'LastName' | 'Age' | 'School' | 'Occupation' | 'City' | 'State' |
  'Country' | 'Address' | 'Gender' | 'Birthday' | 'Hometown' | 'PhoneNumberCell' |
  'Friends' | 'Status' 
> & Stateful & DerivedConstructable<IProfileViewModel>;


export interface IProfileViewModel extends IProfileModel, Stateful {
  getLocation(): LocationMeta;
  getContactInfo(): Contact;
  getBiography(): Biography;
  getProfessionalBio(): ProfessionalBiography;
  getEducationalBio(): EducationalBiography;

  personalViewModel: IPersonalViewModel;
  employeeViewModel: IEmployeeViewModel;
  studentViewModel: IStudentViewModel;

  new(model: Readonly<IProfileModel>): IProfileViewModel;
}

export interface ProfileCollection {
  [id: string]: IProfileViewModel 
}

export interface IProfileCollectionViewModel extends Stateful {
  userProfiles: ProfileCollection;
  selectedProfileId: string;

  getUsersData(): any;
  changeSelectedUser(targetId: number): void;
}
