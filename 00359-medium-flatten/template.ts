type Flatten<T extends unknown[]> = T extends [infer X, ...infer XS] ? X extends unknown[] ? [...Flatten<X>, ...Flatten<XS>] : [X, ...Flatten<XS>] : T
