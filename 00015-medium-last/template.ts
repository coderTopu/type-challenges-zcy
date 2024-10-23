type Last<T extends any[]> = [never, ...T][T['length']]
