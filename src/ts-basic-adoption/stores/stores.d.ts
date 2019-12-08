declare interface FlatEntity<T> {
  id: number;
  data: T;
  parent: number;
}

declare interface IFlatEntityStore<T> {}

declare interface IFlatEntityStoreCtorOptions<T> {
  isTracking?: boolean;
  max?: number;
  conditionA?: boolean;
  conditionB?: boolean;
  data: T;
}

declare interface IFlatEntityStoreAddOptions<T> {
  id?: number;
  data?: T;
  parent?: number; 
}

declare interface ConstructableFlatEntityStore<T> extends IFlatEntityStore<T> {
  new(options?: IFlatEntityStoreCtorOptions<T>): IFlatEntityStore<T>
}
