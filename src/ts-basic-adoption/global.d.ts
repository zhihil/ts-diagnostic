/* global.d.ts

    Declaration file for Dojo toolkit. This contains explicit typing for many of Dojo's

declare const define: (imports: string[], code: Function) => any;

declare namespace Dojo {
  interface SelectValue {
    value: any;
    label: string;
  }
  
  type WatchHandler<T> = (propName: string, oldValue: T, newValue: T) => void;

  interface Handle {
    unwatch: () => void;
  }

  interface Stateful {
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;
    watch: <T>(prop: string, handler: WatchHandler<T>) => void;
  }

  interface Class {
    inherited: (arguments: IArguments) => any;
  }

  interface _WidgetBase {
    domNode: HTMLElement;
  }

  interface View extends Dojo.Stateful, Dojo.Class, Dojo._WidgetBase {}

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
    (name: string, mixins: any[], prototype: object): Function;
    (mixins: any[], prototype: object): Function;
  }

  interface lang {
    hitch: <T extends Function>(thisType: object, toBind: T) => T;
  }
}

*/

declare const define: Function;

declare interface Map<T> {
  [id: string]: T;
}
