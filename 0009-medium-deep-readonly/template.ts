type DeepReadonly<T> = T extends any ? {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
} : never
