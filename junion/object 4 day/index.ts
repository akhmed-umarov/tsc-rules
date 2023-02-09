/*-------------oBJECT типизуруются в момент использования  то есть я указываю как тип не надпись object а {} и в них пишу типизацию всех свойств данного объекта, пример указан снизу с declaration function -------------------*/


const userData = { 
   isBrd: true, 
   name:  `Akhmed`,
   age: 24
}

const userData2 = { 
   isBrd: true, 
   name:  `Akhmed`,
   age: 24, 
   messages: { 
      error: 'Error', 
      ok: 'ok'
   }
}


function createError(msg:string):never { 
   throw new Error(msg)
}

function logBrdMsg ( data: {isBrd: boolean , name: string , age: number} = userData2):string { 
   if (data.isBrd) { 
      return `Your name ${data.name} your age ${data.age}`
   } 
   return createError('Error')
}

console.log(logBrdMsg());


/*-------------Делаем дисктруктурицазию объекта с указанием типов-------------------*/

function logBrdMsg2 ( { isBrd , name , age , messages: {error}}: {isBrd: boolean , name: string , age: number , messages: { error: string }} = userData2):string { 
   if (isBrd) { 
      return `Your name ${name} your age ${age}`
   } 
   return createError(error)
}

console.log(logBrdMsg());


const testObjReplaceT = { 
   name: `akhmed`, 
   age: 10
}

function mal (data : { name: string , age: number} = testObjReplaceT) { 
   for (data.age ; data.age < 18 ; data.age++){ 
      console.log(`You are little bastard ${data.age}`);
   }  
   console.log(`Your name ${data.name.charAt(0).toUpperCase() + data.name.slice(1)} ${data.age} last age`);
}
mal()