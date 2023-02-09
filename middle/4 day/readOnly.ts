interface IUser { 
    readonly name: string,
    age: number, 
    job? : { 
        place: string | undefined
    }
}

const user: IUser = { 
    name: 'Akhmed', 
    age: 5
}

// user.name = 'asd';           только для чтения!


///можно прописывать с помощью джинериков этоакие скобки <>
//для всего кроме массивов 
const user2: Readonly<IUser> = { 
name: 'Ilyas', 
age: 20, 
job: { 
    place: undefined
}
}

type Judoist = { 
    name: string, 
    age: number, 
    discruption?: string
}

const judo1: Readonly<Judoist> = { 
    name: 'asd',
    age: 2
}

//есть такой же для массива ReadonlyArray (тоже самое если и использовать Readonly)красивая обертка