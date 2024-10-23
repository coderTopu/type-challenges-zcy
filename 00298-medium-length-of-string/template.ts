// 定义一个字符串转数组的属性
type StringToArr<T> = T extends `${infer s}${infer xs}` ? [1, ...StringToArr<xs>] : []
// 获取数组长度
type LengthOfString<S extends string> = StringToArr<S>['length']