
type AppendArgument<Fn, A> = Fn extends (...args: infer S) => infer X ? (...args: [...S, A]) => X : never 


