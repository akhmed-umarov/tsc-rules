interface IParent { 
    name: string ,
    age: number
}


//если нам надо сделать чтобы generic был расшряемым но содержал какие то свосйства то надо записать как на примере снизу

interface UserData <T extends IParent> { 
    name: string, 
    age: number,
    parent: T
}

//теперь я смогу указывать дополнительные свойства при объявление объекта с данноым интеррфейсом

const userData: UserData<{name: string , age: number , marridg: boolean}> = {       
    name: 'asd', 
    age: 123, 
    parent: { 
        name: 'asd',
        age: 123,
        marridg: true
    }
}

//дженерик аннотация для функицй 

interface Funct { 
    <T>(data: T):T      //говорит что вернется то же самое что придет в данную функцию но можно указывать чуть по другому ччобы указывать то какая аннотация будет  у аргументов функций каждый раз 
}


interface Funct2 <T>{ 
    (data: T):T   
}

function test1 (params):Funct{
    return params 
}

type ArrayOrNull<T> = T[] | null;           //теперь можно создавать тот список массивов который нам нужен при создание самого массива

type ArrayOrNull2<T extends number | string> = T[] | null;           //а тут можно будет дополнительно указать те типы даннных которые могут быть в массиве

const testAr: ArrayOrNull2<number> = [ 123 , 23 ,233];      //вот что я имел ввиду