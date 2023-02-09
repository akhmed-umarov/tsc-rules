///Использование системы типов в функциях



/*-------------type never обозначает что ничего не возвращается от функции-------------------*/
/*-------------тут снизу функция по типу never так как не возвращет ни undefined-------------------*/
/*-------------Выброс ошибок один из вариантов получения типа never , а второй тип это синхпронная функция которая никогда не может закончится , так как никогда не дойдет до конца своего конца-------------------*/
/*-------------never обозначает что ничего не присваивается и ничего не возвращается-------------------*/

/*-------------Never используются в конце функции если надо сделать "Исчерпующуюся проверку" пример в функции logBrMsg типо если возвращается только стринг после функции то с поомощью типа never мы сможем сделать так чтобы так и было , а то если написать clg что то то вернется уже undefined-------------------*/


const createError = (msg: string):never=> { 
   throw new Error(msg);
}



const logBrMsg = (isBd:boolean  , userName:string , age: number): string=>{ 
   if (isBd) { 
      console.log(`Your name ${userName[0].toUpperCase()}${userName.slice(1)} and your age = ${age}`);
      return "0"
   } else if (isBd === false){ 
      return 'Too bad'
   }
   return createError('er')
}

console.log(null ?? 'asd');
console.log(undefined ?? 'asd');
console.log(void 0 ?? 'asd');


/*-------------any (старайтесь избегать этого типа так как если используем это считай работаем с js) и если не указывать тип данных то any присваивается автоматически -------------------*/


const userData:string = '{"isBrd": true , "ageData": 40 , "userName": "Akhmed"}';

const userIbj: { 
   isBrd: boolean , ageData: number , userName: string
} = JSON.parse(userData);        ////JSON.parse() => возвращает всегда any так как не знает что находится внутри 


/*-------------ANY Это зло для TSC но он бывает ток в пустых переменных которые еще не назначили или в json-------------------*/
let anyPer;


/*-------------Когда создаем переменные даже без присваивания их значению можно присвоить сразу тип чтобы не создать ошибок в будущем-------------------*/
let str: string;


///что бы не записывали ничего не получится получить 
// const smth:never = null; ошибка


/*-------------tsc -init-------------------*/
/*-------------Можно получить конфигурацию и изменять ее-------------------*/

const test1: null = null;
const test2: any = null;
// const test2: string = null;         //ошибка
/*-------------дает ошибку но если поменять нижний параметр то тогда null будет возможно записать в любой тип данных кроме undefined-------------------*/
// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
///null записывается без ошибки первоначально ток в any и null

///trim убирает пробелы вначале и  в конце строки

function getRndData () { 
   if (Math.random() < 0.5) { 
      return null
   } return ' Some data  ';
}

const data = getRndData();

//если отключить строгую проверку на null тогда будет ошибка в случае когда будет происходить код а тут ошибку не покажет
const trimmerData = data ?  data.trim() : null;
console.log(trimmerData);



//*-------------undefined-------------------*/

const undefined1: undefined = undefined; 
const test2123: any = undefined;

let sth2; /*-------------становится any а не undefined-------------------*/

/*-------------в js было бы undefined тут так то так же если выводить в консоль а тип данного будет any -------------------*/

console.log(sth2);

