/*-------------Как добавить несколько возможных типов для одной переменной-------------------*/
//union type называется когда объединяются несколько других типов как снизу строока или число


const message: string | number = 5; 


//Так я скажу что может быть в массиве либо строки либо числа
const messages: (string | number)[]  = ["a" , "b" , 5];
const messages2: string[] | number[] = [ 4 ,5]; ///либо массив чисто строк либл массив только строк


//Внутри функций если использовать Union тип то нельзя будет использовать методы которые есть у данных типов так как неизвестно какого именно типа будет данная переменная и поэтому чтобы избежать ошибки ts не позволяет вовсе использовать методы этих типов и чтобы этого избежать необходимо произвести сужение типов (с помощью typeof)

// const printMessage = (message: string | number)=>{ 
//    if (typeof message === 'string') { 
//       console.log(message.toUpperCase());
//    } else { 
//       console.log(message.toString());
//    }
//    console.log(message);
// }

/*-------------typeof очень хорошо работает с tsc а именно union типом то есть благодаря этому можно будет использовать уже методы которые есть только у нужного нам типа-------------------*/


// const printMessage = (message: string[] | number | boolean)=>{ 
//    if (typeof message === 'string' || typeof message ==='number') { 
//       console.log(message.toString());
//    } else { 
//       console.log(message.valueOf());
//    }
//    console.log(message);
// }





const printMessage = (message: string[] | number | boolean):void=>{ 
   if (Array.isArray(message)) { 
      message.forEach(el=> console.log(el))
   } else if (typeof message == 'number') { 
      console.log(message.toString());
   } else { 
      console.log(message);
   }
}


///произоводить сужение типов можно не только с помощью typeof но так же и сравнением с другими переменными 

const test2 =(a: number | string , b: boolean | string):void=> { 
   if ( a === b ){ 
      console.log('done');
      //тут внутри данного блока уже будет известно что a b равны а это значит что их тип будет равен строке
   }
}

//когда мы работамем с объектами то поеределить какого типа объект к нам попал можно с помощью команды in как в примере снизу
const checkReadings = (readings: { system: number } | { users:string[] }): void=>{ 
   if ('system' in readings) { 
      console.log(readings.system);
   }else { 
      readings.users.forEach(el => console.log(el.toUpperCase()))
   }
}

//с помощью instanseOf можно определить является ли объект наследником класса 

function logValue (x : string | Date ) { 
   if ( x instanceof Date ) { 
      console.log(x.getDay());
   } else  {
      console.log(x);
   }
}