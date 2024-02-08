interface Monoid<T> {
    mempty : T
    mappend(arg1: T, arg2: T): T
}

class StringM implements Monoid<string>{
    mempty = ""
    mappend(arg1: string, arg2: string): string {
        return arg1 + arg2
    }
}



