// ${U}${string} 表示U后面跟了任意的字符串
type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false