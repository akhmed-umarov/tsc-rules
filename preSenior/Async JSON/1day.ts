//  Аннотации в работе с async await promise нужны лишь для удобства разработчика чтобы при виде данных которые он записал ранее он мог видеть что именно находится тут

interface ToDos { 
id: number, 
userId: number,
title: string,
completed: boolean
}

let todoList: ToDos[] = [];

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(responce=> responce.json())
//     .then(json=> { 
//         if ('id' in json) { 
//             todoList.push(json)
//             console.log('Pending...');
//         }
//         console.log(json);
//     })


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responce=> responce.json())
    .then((json: ToDos) => {                //не факт что именно этот тип данных придет так как невозможно это проверить но мы уазываем другим разработчикам что мы именно тут ожидаем
        if ('id' in json) { 
            todoList.push(json)
            console.log('Pending...');
        } else if (Array.isArray(json)) { 
            todoList = json;
        }
        console.log(todoList);
    })
    .catch(()=>{console.log('Error'); return new Error('you have error')});


///есть джинерик по типу  Promise  но это не совсем джинерик это уже прям промис просто внутри него мы можем указать с каким типом данных будет работаь данных промис , то есть какой тип данных будет возвращать промис , например в fetch промис будет возвращать Responce || Запрос это можно увидеть на 23 строке , а если нужно работаь с обычным промисом то можно указать через джинерики

const NumberPromise = new Promise<number>((res, rej) => { 
    res(1000)                                     //тут можно внутрь закидывать только цифры, теперь тип будет в then(number)
}) 

NumberPromise.then(numb => console.log(numb))


//чтобы сразу получить тип который будет возвращаться от элементов которые возвращаются от Promise можно просто исользовать джинерик Awaited внутрь которого можно засунуть Promise

type NumberFromProm = Awaited<typeof NumberPromise>

type Users = { 
    names: string
}

const fetchUsers = async (): Promise<Users[]>=>{ 
return [{ 
    names: 'Alex'
}]
}

//если мы хотим узнать какой тип данных возвращается с промиса то мы просто делаем Await 


type testAwait = Awaited<ReturnType<typeof fetchUsers>>

