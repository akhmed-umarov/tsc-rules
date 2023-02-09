//если ваш объект используется лишь один раз то вместо того чтобы указыать интерфейс для отображения его типа , нам легче будет использовать typeof объекта внутри функции которая будет использовать данный объект! Пример будет указан снизу
interface IDate { 
    name: string, 
    age: number
}
    
    

const dataFromControl =  {
    water: 200,
    el: 350
}

function checkReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = { 
        water: 200,
        el: 350
    }
    if (data.el === dataFromUser.el && data.water === dataFromUser.water) { 
        return true
    } return false
}

const testFetch = async (url: string = 'https://jsonplaceholder.typicode.com/todos/1')=>{ 
    const json = await fetch(url);
    const data = await json.json();
    console.log(data);
}
testFetch()

const PI = 3.14;

let clonePi: typeof PI;