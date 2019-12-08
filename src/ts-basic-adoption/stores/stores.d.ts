declare interface FlatEntity<T> {
  id: number;
  data: T;
  parent: number;
}
