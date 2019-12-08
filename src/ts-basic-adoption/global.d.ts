/* global.d.ts

    Declaration file for Dojo toolkit. This contains explicit typing for many of Dojo's
*/
declare const define;

declare namespace Dojo {
  interface SelectValue {
    value: any;
    label: string;
  }
  
  interface WatchHandler {
    <T>(propName: string, oldValue: T, newValue: T): void;
  }

  interface Handle {
    unwatch: () => void;
  }

  interface Stateful {
    set: (prop: string, value: any) => void;
    get: (prop: string) => any;
    watch: (prop: string, handler: WatchHandler) => void;
  }

  interface Class {
    inherited: (arguments: IArguments) => any;
  }

  interface _WidgetBase {
    domNode: HTMLElement;
  }

  interface View extends Dojo.Stateful, Dojo.Class, Dojo._WidgetBase {}
}

