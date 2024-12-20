import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Reverse<[]>, []>>,
    Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
    Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

type errors = [
    Reverse<'string'>,
    Reverse<{ key: 'value' }>,
]