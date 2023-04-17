function delayNumber (a , b)  { 
    return new Promise((res , rej)=>{ 
        setTimeout(() => {
            res()
        }, a);
    })
}

const delay3000 = delayNumber(3000);

delay3000   
    .then(()=>console.log("object"))

const delay2=(a , b)=> new Promise((res)=>{ 
    setTimeout(() => {
        res(b)
    }, a);
})



// delay2(3000 , 'Yes')
//     .then(data=> data.toLowerCase());


async function  testAsync  (x = 100)  {
    const stringLower = await delay2(3000 , "little");
    console.log(stringLower);
}

testAsync()

function fetch2 (url = "https://jsonplaceholder.typicode.com/users") {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data=> console.log(data))
}
fetch2()

async function fetch3() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
}
fetch3()


const numb = 0;

if (!numb) { 
    console.log("YEEEEEES!!!");
}

console.log(0 == false);

let adsd = [100];

adsd = [];

const delay = (t , f)=>(x)=>new Promise((res)=>{ 
setTimeout(() => {
    res(f(x))
}, t);
})

const testFunct = (x) =>{ 
console.log(x);
return x
}

const delay5000 = delay(5000 , testFunct);


const delay5000PPPP = delay5000('rrrr')

// const yeees5sek = delay5000('yes')




// const delay = (t)=> new Promise(res=>{ 

// })