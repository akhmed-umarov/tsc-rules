const onject =  {
    name: 'Akhmed', 
    age: 24
} as const ;


const num1 = new Number(500);

const num2 = Number(500)        //тут не создается   экземплаяр а просто идет транформация аргумента функции в тип number поэтому низкий number in type unio 500 === Number(500)

console.log(num1 == num2);      //true
console.log(num1 === num2);     //false in JS тоже самое так как в одном случае класса нет а во втором есть

const tover: {name: string} & {numver: number} = { 
    name: 'asd',
    numver: 123
}

// const btn = document.querySelector('.btn') ;

// btn?.addEventListener('click' , ()=>{});

const tet2 : unknown = { 
    name: 'asdasd',
    say: ()=>{ 
        console.log("object");
    }
}

const fetchData2 = (url:string , header: 'GET' | 'POST'):void =>{ 
    console.log(header);
}

const object = { 
    url : 'asdasd',
    header: 'GET'
}

fetchData2(object.url , object.header)          //выдаст ошибку так как в  функции в анатации был ууказан литеральынй тип GET а не примитивный string, чтобы это убрать есть множество вариантов , как использование enum так и простое уточнение в самом объекте либо уже в самой функции



// 1 способ

fetchData2(object.url , object.header as 'GET')         






//2 cпособ
const object2 = { 
    url : 'asdasd',
    header: 'GET' as 'GET'
}

const fetchData3 = (url:string , header: 'GET'):void =>{       

}

fetchData3(object2.url , object2.header )


// 3 способ

const enum HEADER { 
    GET = "GET",
    POST = "POST"
}

const fetchData4 = (url:string , header: HEADER):void =>{       
    if (header = HEADER.GET) { 
        console.log(header);
    }
}