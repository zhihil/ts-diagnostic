/* ts-adv-adoption.d.ts

    Declaration file for Dojo toolkit. This contains explicit typing for many of Dojo's
    exports.
*/
declare const define: (imports: string[], code: Function) => any;



/* ----------------------------- Dojo ----------------------------- */

declare interface DojoClass {
  inherited: (args: any) => any;
  getInherited: (args: any) => any;
  isInstanceOf: (constructor: DojoClass) => boolean;
}

declare module "types@-dojo-class" {
  export default DojoClass;
}

declare module "dojo/_base/declare" {
  /* TypeScript does not support variadic generics, so we need
      to manually specify the different calls to declare.
  */
  function dojo_declare<V>(name: string, mixins: null, prototype: V): V & DojoClass;
  function dojo_declare<T1,V>(name: string, mixins: [T1], prototype: V): T1 & V & DojoClass;
  function dojo_declare<T1,T2,V>(name: string, mixins: [T1, T2], prototype: V): T1 & T2 & V & DojoClass
  function dojo_declare<T1,T2,T3,V>(name: string, mixins: [T1, T2, T3], prototype: V): T1 & T2 & T3 & V & DojoClass;
  function dojo_declare<T1,T2,T3,T4,V>(name: string, mixins: [T1, T2, T3, T4], prototype: V): T1 & T2 & T3 & T4 & V & DojoClass;
  function dojo_declare<T1,T2,T3,T4,T5,V>(name: string, mixins: [T1, T2, T3, T4, T5], prototype: V): T1 & T2 & T3 & T4 & T5 & V & DojoClass;
  function dojo_declare<V>(mixins: null, prototype: V): V & DojoClass;
  function dojo_declare<T1,V>(mixins: [T1], prototype: V): T1 & V & DojoClass;
  function dojo_declare<T1,T2,V>(mixins: [T1, T2], prototype: V): T1 & T2 & V & DojoClass
  function dojo_declare<T1,T2,T3,V>(mixins: [T1, T2, T3], prototype: V): T1 & T2 & T3 & V & DojoClass;
  function dojo_declare<T1,T2,T3,T4,V>(mixins: [T1, T2, T3, T4], prototype: V): T1 & T2 & T3 & T4 & V & DojoClass;
  function dojo_declare<T1,T2,T3,T4,T5,V>(mixins: [T1, T2, T3, T4, T5], prototype: V): T1 & T2 & T3 & T4 & T5 & V & DojoClass;

  export default dojo_declare;
}

declare module "dojo/_base/lang" {
  interface DojoLangExtend {
    /* Varidiac generics are not implemented in TS, the developer should explicitly type mixin
        types for contracts involving 5 or more mixins.

       Here we provide hard-coded overloads for the likeliest use-cases for mixin operations.
    */
    <T1,T2>(obj1: T1, obj2: T2): T1 & T2; 
    <T1,T2,T3>(obj1: T1, obj2: T2, obj3: T3): T1 & T2 & T3; 
    <T1,T2,T3,T4>(obj1: T1, obj2: T2, obj3: T3, obj4: T4): T1 & T2 & T3 & T4;
  }

  interface DojoLangMixin {
    /* See documentation for Dojo.extend */
    <T1,T2>(obj1: T1, obj2: T2): T1 & T2; 
    <T1,T2,T3>(obj1: T1, obj2: T2, obj3: T3): T1 & T2 & T3; 
    <T1,T2,T3,T4>(obj1: T1, obj2: T2, obj3: T3, obj4: T4): T1 & T2 & T3 & T4;
  }

  export function hitch<T extends Function>(thisType: object, toBind: T): T;
  export function partial(toPartial: Function, ...params: string[]): Function;
  export function clone<T>(toClone: T): T;
  export function delegate<T extends object, K extends { [propName: string]: any }>(oldObject: T, newProps: K): T & K;
  export function exists(dojoClassPath: string): boolean;
  export function getObject(dojoClassPath: string): object;
  export function replace(template: string, substitutions: object | any[] | Function): string;
  export function setObject(propertyPath: string, newVal: any, target: object): void;
  export const extend: DojoLangExtend;
  export const mixin: DojoLangMixin;
}

type WatchHandler<T> = (propName: string, oldValue: T, newValue: T) => void;

declare class Stateful {
  set: <K extends keyof this>(prop: K, value: this[K]) => void;
  get: <K extends keyof this>(prop: K) => this[K];
  watch: <K extends keyof this>(prop: K, handler: WatchHandler<this[K]>) => void;
}

declare module "dojo/Stateful" {
  export default Stateful;
}

declare module 'dojo/dom-style' {
  interface ComputedStyle {}

  export function set(node: HTMLElement, property: string, value: any): void;
  export function get(node: HTMLElement, property: string): any;
  export function getComputedStyle(node: HTMLElement): ComputedStyle;
}

declare class Deferred {
  then(successHandler: Function, failureHandler?: Function): Deferred;
}

declare module "dojo/Deferred" {
  export default Deferred;
}

declare module "dojo/request" {
  export default function request(url: string, options?: object): Deferred;
}

declare module "dojo/on" {
  export default function on(target: object, event: string, handler: (e: Event) => void);
}

declare module "types@watch-handle" {
  export interface Handle {
    unwatch: () => void;
  }
}

declare module "types@dojo/store" {
  export interface Store<T> {
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
}



/* ----------------------------- Dijit ----------------------------- */

declare namespace Dijit {
  class _WidgetBase extends Stateful {
    domNode: HTMLElement;
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
}


declare module "dijit/_WidgetBase" {
  class _WidgetBase extends Dijit._WidgetBase {}
  export default _WidgetBase;
}

declare module "dijit/_TemplatedMixin" {
  class _TemplatedMixin {}
  export default _TemplatedMixin;
}

declare module "dijit/_WidgetsInTemplateMixin" {
  class _WidgetsInTemplateMixin {}
  export default _WidgetsInTemplateMixin;
}

declare module "dijit/form/Button" {
  export default class Button extends Dijit._WidgetBase {}
}



