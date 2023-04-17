type Currently = { 
    usd: "usd",
    uk: "uk",
    rus: "rus",
}

type Exclude2<T , U> = T extends U ? never : T;

type Omit2<T, S extends string | symbol | number> = { 
    [P in Exclude<keyof T , S>]: T[P]
}

type Pick2<T , S extends keyof T> = { 
    [P in S]: T[P]
}

type Excract2<T, U> = T extends U ? never : T;

type TestUnion = 100 | 200 | 300;

type StringTest<T , U> = { 
    [P in Exclude<keyof T , U>]: T[P]
}

type TTT = Extract<"UK" | "uk" , "uk">          //выбор подходящего 

type TTT2 = "UK" | "uk" extends "uk"  ? "uk" : never;       //отдельно нельзя так проверять литералы потому что он смотрит на полное совпадение а не на единстевенные экземпляры

type TTT3<T, U> = T extends U ? T : never;

type ULA = TTT3<"UK" | "uk" , "UK">;

//  побробуем создать джинерик который добавляет один элемент 

type MyPlus<T, U> = { 
    [P in keyof T | string & U]: P extends keyof T ? T[P] : string          //  РАБОТАЕТ
}

// ща проверим

type GoogleTest = { 
    name: string,
    age: number, 
    rol: string
}

type GoogleTestPlusPar = MyPlus<GoogleTest , 'par'>
