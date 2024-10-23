/**
 * 没做出来
 * @param values
 * @constructor
 */
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [key in keyof T]: Awaited<T[key]> }>

