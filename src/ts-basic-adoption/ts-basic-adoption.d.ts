/* global.d.ts

    Declaration file for Dojo toolkit. This contains explicit typing for many of Dojo's
*/

declare const define: Function;

declare interface Map<T> {
  [id: string]: T;
}
