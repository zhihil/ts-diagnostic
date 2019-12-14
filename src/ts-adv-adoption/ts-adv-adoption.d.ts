/* global.d.ts

    Declaration file for Dojo toolkit. This contains explicit typing for many of Dojo's
*/
declare const define: (imports: string[], code: Function) => any;

declare namespace Dojo {
  interface SelectValue {
    value: any;
    label: string;
  }

  interface Select extends _WidgetBase {
    new(options: object): Select;
  }
  
  type WatchHandler<T> = (propName: string, oldValue: T, newValue: T) => void;

  interface Handle {
    unwatch: () => void;
  }

  interface Stateful {
    set: <K extends keyof this>(prop: K, value: this[K]) => void;
    get: <K extends keyof this>(prop: K) => this[K];
    watch: <K extends keyof this>(prop: K, handler: WatchHandler<this[K]>) => void;
  }

  interface Class {
    inherited: (args: any) => any;
    getInherited: (args: any) => any;
    isInstanceOf: (constructor: Class) => boolean;
  }

  interface _WidgetBase extends Stateful {
    domNode: _WidgetBase;
    srcNodeRef: HTMLElement;
    containerNode: _WidgetBase | HTMLElement;

    postMixInProperties: () => void;
    buildRendering: () => any;
    postCreate: () => any;
    startup: () => any;
    destroy: () => any;
    placeAt: (element: HTMLElement) => _WidgetBase;

    new(options: object): _WidgetBase;
  }

  interface _TemplatedMixin {}

  interface _WidgetsInTemplateMixin {}

  interface Store<T> {
    data: T[];
    index: number;
    queryEngine: Function;
    idProperty: string;
    get(id: number): T;
    getIdentity(object: T): number;
    put(obj: T, options: object): void;
    add(obj: T, options: object): void;
    remove(id: number): void;
    query(query: any, options: object): T[];
    setData(data: T[]): void
  }

  interface declare {
    <V>(name: string, mixins: null, prototype: V): V & Dojo.Class;
    <T1,V>(name: string, mixins: [T1], prototype: V): T1 & V & Dojo.Class;
    <T1,T2,V>(name: string, mixins: [T1, T2], prototype: V): T1 & T2 & V & Dojo.Class
    <T1,T2,T3,V>(name: string, mixins: [T1, T2, T3], prototype: V): T1 & T2 & T3 & V & Dojo.Class;
    <T1,T2,T3,T4,V>(name: string, mixins: [T1, T2, T3, T4], prototype: V): T1 & T2 & T3 & T4 & V & Dojo.Class;
    <T1,T2,T3,T4,T5,V>(name: string, mixins: [T1, T2, T3, T4, T5], prototype: V): T1 & T2 & T3 & T4 & T5 & V & Dojo.Class;
    <V>(mixins: null, prototype: V): V & Dojo.Class;
    <T1,V>(mixins: [T1], prototype: V): T1 & V & Dojo.Class;
    <T1,T2,V>(mixins: [T1, T2], prototype: V): T1 & T2 & V & Dojo.Class
    <T1,T2,T3,V>(mixins: [T1, T2, T3], prototype: V): T1 & T2 & T3 & V & Dojo.Class;
    <T1,T2,T3,T4,V>(mixins: [T1, T2, T3, T4], prototype: V): T1 & T2 & T3 & T4 & V & Dojo.Class;
    <T1,T2,T3,T4,T5,V>(mixins: [T1, T2, T3, T4, T5], prototype: V): T1 & T2 & T3 & T4 & T5 & V & Dojo.Class;
  }

  interface lang {
    hitch: <T extends Function>(thisType: object, toBind: T) => T;
    partial: (toPartial: Function, ...params: string[]) => Function;
    clone: <T>(toClone: T) => T;
    delegate: <T extends object, K extends { [propName: string]: any }>(oldObject: T, newProps: K) => T & K;
    exists: (dojoClassPath: string) => boolean;
    getObject: (dojoClassPath: string) => object;
    replace: (template: string, substitutions: object | any[] | Function) => string;
    setObject: (propertyPath: string, newVal: any, target: object) => void;
    extend: extend;
    mixin: mixin;
  }

  interface extend {
    /* Varidiac generics are not implemented in TS, the developer should explicitly type mixin
        types for contracts involving 5 or more mixins.

       Here we provide hard-coded overloads for the likeliest use-cases for mixin operations.
    */
    <T1,T2>(obj1: T1, obj2: T2): T1 & T2; 
    <T1,T2,T3>(obj1: T1, obj2: T2, obj3: T3): T1 & T2 & T3; 
    <T1,T2,T3,T4>(obj1: T1, obj2: T2, obj3: T3, obj4: T4): T1 & T2 & T3 & T4;
  }

  interface mixin {
    /* See documentation for Dojo.extend */
    <T1,T2>(obj1: T1, obj2: T2): T1 & T2; 
    <T1,T2,T3>(obj1: T1, obj2: T2, obj3: T3): T1 & T2 & T3; 
    <T1,T2,T3,T4>(obj1: T1, obj2: T2, obj3: T3, obj4: T4): T1 & T2 & T3 & T4;
  }

  interface Deferred {
    then: (successHandler: Function, failureHandler?: Function) => Dojo.Deferred;
  }

  type request = (url: string, options?: object) => Dojo.Deferred;
}
