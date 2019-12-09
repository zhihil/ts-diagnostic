declare interface FlatEntity<T> {
  id: number;
  data: T;
  parent: number;
}

declare type IFlatEntityStoreAddOptions<T> = Partial<FlatEntity<T>>

declare interface IFlatEntityStore<T> extends Dojo.Store<FlatEntity<T>> {}

declare interface IFlatEntityStoreCtorOptions<T> {
  isTracking?: boolean;
  max?: number;
  conditionA?: boolean;
  conditionB?: boolean;
  data: T;
}

declare interface ConstructableFlatEntityStore<T> extends IFlatEntityStore<T> {
  new(options?: IFlatEntityStoreCtorOptions<T>): IFlatEntityStore<T>
}
