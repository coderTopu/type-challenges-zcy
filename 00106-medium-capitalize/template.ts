type TrimLeft<S extends string> = S extends `${infer P}${infer R}` ? `${Uppercase<P>}`

