let salary;         //let дает примитивные типы а  const дает литеральное значение типа!
salary = 500;      
                    //если не указывать анатацию типа (не работает с объектами и массивами) то работает вот так
let uiu = true;     //получаем примитив в анатации;
const uiu2 = true;  //литеральный тип true;

///если не указать тип и после уже задать какое значение переменной то все равно у данной переменной уже будет заданный тип any;

const testJson = `{"name" : "Akhmed", "age" : 5}`;

interface IUserData { 
    name: string, 
    age: number
}

const userData:IUserData = JSON.parse(testJson);

console.log(userData.age);

const dataTest = { 
    name: `Akhmed`,
    age: 10
}

// const jsonTest = JSON.stringify(dataTest);

// console.log(jsonTest);


///сначала выполнятся не асинронные операции
// const fetchMy = async ()=>{ 
//     const json = await fetch('https://jsonplaceholder.typicode.com/todos/1' );
//     const data = await json.json();
//     console.log(data);
// }
// console.log(`Hello`);
// fetchMy()

// const fetchMy2 = ()=> {
//     fetch('https://jsonplaceholder.typicode.com/todos/2')
//             .then(json=> json.json())
//             .then(data=> console.log(data))
// }

// fetchMy2()