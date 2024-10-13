// @ts-ignore
type Result = Concat<[1], [2]> // expected to be [1, 2]

type Concat<T extends readonly any[], P extends readonly any[]> = [...T, ...P]
