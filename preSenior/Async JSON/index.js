fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=> res.json())
    .then(data=> console.log(data));

const myFetch = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/10')
    const data = await res.json();
    console.log(data);
}

console.log(myFetch());

const jsonTest = '{"name": "Akhmed", "age": 5}'; 

console.log(JSON.parse(jsonTest));


const arr = [ 1,0 ,2,3,4, [12,3,4,5,100] , 200];

let result = [];
arr.forEach((el , index, ar) => { 
    if (Array.isArray(el)) { 
        // let k = el.length;
        // ar.splice(index , 1 );
        for (let x of el) { 
            //  ar.splice(index , 0 , x);
             result.push(x)
        }
    }
    else { 
        result.push(el)
    }
})

console.log(result , 'ITS');