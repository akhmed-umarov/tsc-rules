type Test = 'ok' | 'no';

type Google = { 
    name: string,
    age: number,
    message: Test
}

type keysGoogle = keyof Google;

type DeleteMessaage = Omit<Google , 'message'>;

type PickAgeMessage = Pick<Google , "age" | "message">;

type DostatAge = Extract<keyof Google , 'age'>;     //оставляет ток тот что проходит фильтр

type DeleteAge =  Exclude<keyof Google , 'age'>;     //удаляет тот что проходит фильтр

type CreateNewObject = Record<keyof Google , string>


//создать свои джинерики

type MyOmit<T , K extends keyof T> = { 
    [P in Exclude<keyof T , K>]: T[P]
}

type MyOmitTest = MyOmit<Google , 'age' >


type MyPick<T , K extends keyof T> = { 
    [P in K]: T[P]
}

type MyPickTest = MyPick<Google , 'age' >

type MyRecord<T extends string | symbol | number, K > = { 
    [P in T]: K
}

type MyExtract<T , K extends T> = T extends K ? T : never;

type TestMyExtract = MyExtract<'age' | 'name' , 'age'>;

type MyExclude<T , D extends T> = T extends D ? never : T;

type TestMyExclude = MyExclude<'age' | 'name' , 'age'>;


type MyPlus<T , V , K> = { 
    [P in keyof T | string & V] : P extends keyof T ? T[P] : K;
}

type TestMyPlus = MyPlus<Google , 'recrut' , string>;


//Дополнительные для функций 

interface Funck<T> { 
    (data: T): T
}

const testFunck: Funck<number>= (dasta: number): number=>{ 
    return dasta
}

const testArguments = (data: string , age: number): string => { 
    return 'asd'
}

type ArgumentsParametrs = Parameters<typeof testArguments>

type ResultFunck = ReturnType<typeof testArguments>


 