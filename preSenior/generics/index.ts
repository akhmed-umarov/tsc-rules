let number = new Number(54);
let number2  = 100;

// number = number2;            тут нет ошибки
// number2 = number;            тут есть ошибка         так как из родительской в дочернюю группу преобразовать нельзя а наоборот можно

//      чтобы так огромно не писать можно чреез дженерик задать тип функции и потом добавить через обычную типизацию
function processingData (data: string | number | boolean | string[]):string | number | boolean | string[] { 
    return data
}

//с помощью дженериков обощение типов идет , можно с помощю обобщения 
function Djenerick<T>(params:T):T {
    return params
}

const string = "Этот вариант используеются когда данные приходят из другого стороненнего места , то есть мы указываем в функции обобщенный тип с помощью дженериков и потом в месте вызова используем еще один дженерик и тогда уже будет типизация"
let number3 = Djenerick<string>(string);

interface DesignUS { 
design: string
}
interface DesignEUR { 
design: number
}

//таким образом идет обобщение 
interface DesignAll<DES> { 
design: DES
} 

const designUs: DesignAll<string> =  { 
    design: "asd"
}

const DesignEUR: DesignAll<number> =  { 
    design: 5
}

const isNumber = (arg:unknown): arg is number=>{ 
    if (typeof arg === 'number'){ 
        return true
    } return false
}

///Если хочу передать несколько аргументов неизвестных типов но так чтобы их можно было задать во время вызова функции я просто пишу вот так

function testingGeneratics2<T , S>(params: T , option: S): string{
    console.log(option);
    switch (typeof params) { 
        case 'string': 
        return params
        case 'number': 
        return `It's number ${params}`
        default: 
        return 'Uooops'
    } 
}

//Можно вот так указывать 
const tes1 = testingGeneratics2<string , number>("" , 5);

//а можно не указывать и тогда будут добавлены автоматически
const tes2 = testingGeneratics2("" , 5);


///тут будет передаваться массив тех значений что указан в идентификаторе как показано если описать 
function testingGeneratics3<T , S>(params: T , option: S[]): string{
    console.log(option);
    switch (typeof params) { 
        case 'string': 
        return params
        case 'number': 
        return `It's number ${params}`
        default: 
        return 'Uooops'
    } 
}

function processing<T>(data: T): T { 
    return data
}

interface DataServer { 
    // process:<T>(data: T)=>T
    process: typeof processing
}

const ServerFirst: DataServer = { 
    // process(data) { 
    //     return data
    // }
    process: (data)=>{ 
        return data
    }
}

interface ProFunc { 
     <T>(data: T):T         //функция в JS это объект поэтому вот такая вот дичь для описания функции работает 
}

interface DataServer { 
    process: ProFunc
}
