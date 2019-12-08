declare interface FlatEntity<T> {
  id: number;
  data: T;
  parent: number;
}

declare interface IFlatEntityStore<T> extends Dojo.Store<FlatEntity<T>> {
  new(options: object): IFlatEntityStore<T>;
}
