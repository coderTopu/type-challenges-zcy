type ExampleType = Promise<string>
// @ts-ignore
type Result = MyAwaited<ExampleType> // string

type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;

