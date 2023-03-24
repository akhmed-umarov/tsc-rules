function asd(a , b) {
   return arguments[1] !==undefined ?  a*b :  arguments
    // if (b !== undefined) { 
    //     return a* b
    // } 
    // return a + 1
}

console.log(asd(1) , asd(5 , 2));

// const test2 = (a ,b)=>{                  //нет аргументов
//     console.log(arguments);
// }
// test2('asd')