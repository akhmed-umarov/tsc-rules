type Simple = { 
    name: string,
    age: number,
    rol: string
}

type KeySimple = Exclude<keyof Simple , "rol"> ;            //Exclude удаляет второй элемент из литерального типа , то есть теперь чтобы создать свой тип который будет такой же как в объекте сверху но без одного элемента я могу это использовать 

type SimpleWithAnotherProp<T , K> = {           //  тут я указал что создал тип в котором не будет использоваться то свойство что указано вторым, Omit вместо этого можно писать
    [P in Exclude<keyof T , K>]: T[P]
}

type SimpleWithRol = SimpleWithAnotherProp<Simple , "rol">;


//так же я смогу заменить оставшиеся свойства теми что мне нужны
//например пускай у нас задание перестроить тип таким образом чтобы добаивилось вначале названия свойства Слово new 

type TestSimple = { 
    [P in keyof Simple as `Custom${Capitalize<P>}`]: string
}

//если я хочу создать такую же фигню но уже с передаваемым внутрь каким то типом то делается это чуть по другому так как внтури свойств объекта могут находиться либо строки либо числа либо символы , и надо указать что это будут именно строки с помощью & 

type Currenc = { 
    usa:  string,
    chine: string,
    kz: string,
    russia: string,
}

//если хочу что то удалить Omit 

type CurrencWithUsa = Omit<Currenc , 'usa'>;        //искл      


type CurrencWithTest<T , K extends keyof T> = {             //лучше так как есть подсказки
    [P in Exclude<keyof T , K>]: T[P]
}

type TestSimp = CurrencWithTest<Currenc , 'kz'>;

type CurrencWithUSandRus = Pick<Currenc , 'russia' | 'usa'>         //оставить

type MyPick<T , K extends keyof T> = { 
    [P in K ]: T[P]
}

type Fat = "yes" | "no" | "fade";

type Fat2 = Exclude<Fat , 'fade'>

type TestNumber = "10" | "20";

type TestJ = Extract<TestNumber , "10">;


type TestRecods = Record<Fat , string>              // то есть я создам объект внтури которого свойствами будут первы тип а ключами второй тип 

type MyRecords<T extends string, U> = {             //вот и все , сложнее было сделать единичное добавление свойтсва к уже готовым типам
    [P in T]: U
}

type test2 = MyRecords<Fat , string>

type MyPlus2<T, D extends string | number | symbol , U> = { 
    [P in keyof T | D]: P extends keyof T ? T[P] : U
}