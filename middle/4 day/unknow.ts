//примитивный тип данных безопасный аналог any 
//когда мы получаем какие то данные с сервера мы не знаем какой это тип данных и потом когда мы будем присваивать эту переменную к другой то ошибок у нас не будет хотя у новой переменной уже будет указан тип данных  ивсе методы можно будет использовать

let smth: any; //сделали запрос не знаем какой тип придет
smth = 'str'; //получили данные но они типа any

let data: string[] = smth;      //тут ошибок нет так как неизвестно чем является smth и tsc думает что все норм 

//дальше мы можем использовать методы массива на новой перменной что и вызовет ошибку у нас в коде!

// data.find(e => e);          //ошибка! в рантайме

//!!!! поэтому нельзя использовать any, в any может быть что угодно а в unknow мы не знаем что там может быть поэтому присваивать этот тип данных другим нельзя!


let smth2: unknown; 

smth2 = 'test';
//как видно на примере снизу unknown вообще нельзя ничему приравнивать! кроме any|unknown !!!
// let data2: string = smth2;


///на any можно использовать любые методы и тд и тп поэтому и нет ошибок !
//на unknow нельзя использовать вообще никакой метод! 
//для того чтобы работать с методами на типе unknow надо просто использовать сужение типов уже в функциях где используется переменная с типом unknow! 


function fetchData (data: unknown):void { 
    if (typeof data === 'string') { 
        console.log(data.toLowerCase());
    }
}

const userData = `{"isBrd": true , "userName" : "John" , "age" : 12}`;

function safeParse (s:string):unknown { 
    return JSON.parse(s)
}

const data3 = safeParse(userData);

const data4:unknown = JSON.parse(userData);

//!!!ДЛЯ РАБОТЫ С ФАЙЛАМИ ПОЛУЧЕННЫМИ С ПОМОЩЬЮ     json parse или вообще откуда либо с сервера нам необходимо будет всегда работать с сужением типов !но для начала указывать тип unknown

// null является объектом в typeof поэттому надо еще проверять что оно еще существует! 

const createError = (message: string):never =>{ 
    throw new Error(message)
}
const transferData =(d: unknown):void => { 
    if (typeof d === "string") { 
        return console.log(d.toUpperCase());
    }
    else if (typeof d === "object" && d) { //проверка на то что не является null
       return console.log(d);
    } 
    //выдаст ошибку не надо использовать указание типа в функции так как до never не дойдет дело выйдет ошибка!     Надо указывать только в функциях для создания ошибок! пример на :48
    createError(`${d} dont work!`);
}

transferData(5)


//instanceOf говорит принадлжеит ли данный объект нужному нам классу!
try { 
    if (1) { 
        throw new Error('message')
    }
} catch(e) { 
    if (e instanceof Error && e.message) { 
        console.log('object');
    }
}

//union | intersaxion & 

///при работе unknow с union type unknown перекрывает все типы кроме any!

let T0: string | unknown;       //будет unknown
let T1: any | unknown;          //будет any
let T2: number | unknown;       //будет unknown

//intersaxion наоборот!

let T3: unknown & number;       //number
let T4: any & unknown;          //any