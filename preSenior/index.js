const test =  { 
    name: 'Akhmed', 
    age: 25
}

console.log(5 * "ASD");
// console.log("age" in test);



//false
console.log("" == " ");
console.log("" == "0");
console.log("" == null);

console.log(NaN == NaN);

console.log(NaN == +"asd");


//true
console.log("" == 0);
console.log("0" == 0);
console.log(false == "");
console.log(false == 0);
console.log(false == " ");

console.log(undefined == null);     //они равны ток друг другу в нестрогом сравнение 


//NaN

console.log(+"asd");
console.log(3 * "asd");
console.log(+"asd");

