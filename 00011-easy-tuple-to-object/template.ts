/**
 * PropertyKey 是 ts 内置的类型定义
 * declare type PropertyKey = string | number | symbol
 */
type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
}
