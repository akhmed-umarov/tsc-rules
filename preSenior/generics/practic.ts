interface DatabaseNUmber1 {
name: string,
age: number
}

interface DatabaseNUmber1 {
    name: string,
    age: number
}

function testingDatas<T>(data:T):T{
    return data
}


interface testObject { 
    sport: number,
};


interface testObject2 { 
    sport: string,
};

interface Obj<T> { 
    sport: T
}

const numberObj: Obj<number> = { 
sport: 23
}


// function isNumber (data: any): data is number { 
//     if ( typeof data === 'number') {
//         return true
//     }
//     return false
// }


interface testObject3 { 
    sport: string | number,
};



function TestFunc<T> (data: T): T { 
    return data
}

const number22 = TestFunc<string>("5");



// function testingNUM<T ,S>(data: T , option: S):string { 
    
// }

const array = [2 ,3,4]
// array.map(()=>{ 

// })

console.log( array.some((el)=> typeof el === 'number'));

console.log( array.find((el)=> typeof el === 'number'));

console.log( array.filter((el)=> typeof el === 'number'));

console.log( array.map((el)=> typeof el === 'number'));

//находит цифру значения которое я передал
console.log( array.indexOf(3));

//проверяет есть ли данное число в  массиве
console.log( array.includes(4));


interface IProject { 
    process: <T>(data: T)=>T
}

type Objs = { 
    name: string
}

const data: Objs =  { 
name: 'asd'
}

const data2: IProject =  { 
    process: (x)=>x
}

const arrayTest: [number , ...string[] , boolean ] = [ 4 , 'asd' , 'ad' , true];


function tesd (data: string):void;
function tesd (data: string , number: number):void;
function tesd (data: string , number?: number):void { 
    console.log(data , number);
}

tesd("asd" , 5 );
 