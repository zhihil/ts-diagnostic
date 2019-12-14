import { Store } from "types@dojo/store";

export interface FlatEntity<T> {
  id: number;
  data: T;
  parent: number;
}

export type IFlatEntityStoreAddOptions<T> = Partial<FlatEntity<T>>

export interface IFlatEntityStore<T> extends Store<FlatEntity<T>> {
  new(options?: Readonly<IFlatEntityStoreCtorOptions<T>>): IFlatEntityStore<T>;
}

export interface IFlatEntityStoreCtorOptions<T> {
  isTracking?: boolean;
  max?: number;
  conditionA?: boolean;
  conditionB?: boolean;
  data: T;
}

export interface ConstructableFlatEntityStore<T> extends IFlatEntityStore<T> {
  new(options?: IFlatEntityStoreCtorOptions<T>): IFlatEntityStore<T>
}
