console.log(null == undefined);         //все false кроме этого
console.log(null === undefined);

console.log(null == 0);
console.log(null === 0);

console.log(null == "");
console.log(null === "");

console.log(null == false);
console.log(null === false);

console.log(undefined == "");
console.log(undefined === "");

console.log(undefined == 0);
console.log(undefined === 0);

console.log(undefined == "");
console.log(undefined === "");

console.log(undefined == false);
console.log(undefined === false);           //все до этого false


console.log(0 == false);
console.log("" == false);
console.log(0 == "");


let obj = '';           //ложноотрицательные
let obj2 = 0;           //ложноотрицательные    || будет отрицательно
                        //чтобы их обойти ?? оператор нулевого слияния 

console.log(obj2 ? true : false);

if (obj) { 
    console.log(`док того что ложноотрицательные`);
}


console.log(+"10");             //тут число

console.log("123" + 10);        //если соединяю два числа и хоть одно из мтрока то результат тоже строка это в случае сложения ток
console.log(10 + "123");        //станет строкой

console.log(10+ +'10');         //тут уже число

console.log("123" - 10);        //а тут станет числом так как любые действия кроме сложения могут быть ток у чисел


const test = obj || 100;

console.log(test);