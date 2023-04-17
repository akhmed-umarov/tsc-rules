type MyOmit<T , D> = { 
    [P in Exclude<keyof T , D>]: T[P];
}

type MyPick<T ,U extends keyof T> = { 
    [P in U]: T[U]
}

type MyPlus<T , U > = { 
    [P in keyof T | U & string]: P extends keyof T ? T[P] : string
}

type testMy = 'age' | 'name' | 'olil';

type MyExclude<T , D> = T extends D ? never : T;
type testMyExclude2 = MyExclude<testMy , 'age'>

type MyExtract<T , D> = T extends D ? T : never;
type testMyExcract2 = MyExtract<testMy , 'age'>

type MyRecord<T , U> = { 
    [P in keyof T]: U
}