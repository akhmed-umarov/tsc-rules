type MyOmit<T , U> = { 
    [P in Exclude<keyof T , U>]: T[P]
}
type MyPick<T, U extends keyof T> = { 
    [P in U]: T[P]
}

type Exclude2<U , D> = U extends D ? never : U;

type MyPlus<T , D> = { 
    [P in keyof T | string & D]: P extends keyof T ? T[P] : string
}




//пускай мне даны 2 человека надо создать по ним типы с объектами 

