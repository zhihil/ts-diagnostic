/// <reference path="../ts-basic-adoption.d.ts" />

declare interface IFieldComponent {
  /* Mixin implementation methods */  
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  value: string;
}

declare interface IProfileColumn {
  /* Mixin implementation methods */  
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;
}

declare interface IProfileSelect {
  /* Mixin implementation methods */  
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  values: DojoSelectValue[];
}

declare interface IProfileView {
  /* Mixin implementation methods */ 
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  domNode: HTMLElement;
}

declare interface IEmployeeView {
  /* Mixin implementation methods */  
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  domNode: HTMLElement;
}

declare interface IStudentView {
  /* Mixin implementation methods */
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  domNode: HTMLElement;
}

declare interface IPersonalView {
  /* Mixin implementation methods */
  set: (prop: string, value: any) => void;
  get: (prop: string) => any;
  watch: <T>(prop: string, handler: WatchHandler<T>) => void;

  domNode: HTMLElement;
}

declare interface DojoSelectValue {
  value: any;
  label: string;
}
