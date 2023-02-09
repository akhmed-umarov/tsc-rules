/*-------------first work-------------------*/
//Литерация const x :"http" | "https"

//union type | 

//псевдонимы типов type 

// картеж (tuples) [number , bolean , string] => заставлем массив быть именно таким

// interface INameConfig { name: string }     

// interface ITotal extends INameConfig , ISecondConfig  { тут пишу дополнительную типизацию }

//type используется для фукнций 

//Пересечия или тип песечения & объект соответствует сразу двум типам

// interface или type можно использовать внутри функции при типизации передаваемого внутрь функции объекта но тогда будет происходить не строгая типизация а сравнение есть ли нужные в данном типе параметры в передаваемом объекте , то есть объект передаваемый внутрь функции может быть шире чем указанный при типизации.

//обычно такого как наверху написано нет , при указание типа или интерфейса сразу же происходит строгая типизация и объект должен быть 1 в 1 как при типизации

type Config = { protocol: 'http:' | "https" , portal : 3000 | 8000 };

type Role = { 
   role: string
}

type Test2 = Config & Role;


const onj : Config & Role= { 
protocol: 'http:',
portal : 3000,
role: 'asd'
}


/*-------------Интерфейсы позволяет записать шабблон (описание структуры) объекта или только его части (не путать с классами которые формируют новые экземпляры данного класса) type и interface работают практически одинакого interface Config { } type Config = {} -------------------*/

/*-------------Венгерская анотация это анотация где вначале интерфейсов пишется буква I перед типами T-------------------*/

//intersaxion & union | 

type Config2 = { protocol: 'http:' | "https" , portal : 3000 | 8000 };

interface Config3 { 
protocol: 'http:' | "https" ; 
portal : 3000 | 8000
}

interface IConfigRole { 
   role: string
}

//Из за того что после интерфейсов нет знакак присваивания то нам надо вместо знака & использовать extends и потом указывать список тех интерфейсво от которых мы наследуем все значения , так же в конце необходимо указывать фигурынеые сокбки внутри которых вы можете указать дополнительную стркутуру объекта 

interface ITotal extends Config3 , IConfigRole {
   message: 'ok' | "not ok", 
   log: (msg:string)=> void
};

const serverConfig2 : ITotal = { 
   protocol: 'http:',
   role: 'asd',
   portal: 3000,
   message: 'ok',
   log: (msg)=>{ 
      console.log(`${msg}`);
   }
}

//интерьфейсы нельзя использовать с функциями так как просто сломается синтаксис интерфейсы нужны только для объектов!!! 

//тут описываются аргументы функций поэтому между ними нельзя ставить точку с запятой надо ставить ток , 
type TFunction = (protocol: 'http:' | "https" , portal : 3000 | 8000 , log: (msg: string)=>void) => void;

//если указывать тип для функции то придется делать все 1 в 1 

const startFunction:TFunction =(protocol: 'http:' | "https" , portal: 3000 | 8000 , log:(msg: string)=>void ):void=>{ 
   log(protocol + portal.toString())   
}


startFunction(serverConfig2.protocol , serverConfig2.portal , serverConfig2.log);


//если мы не знаем сколько будет свойств но знаем чт типипзация всех свойств объекта будут строками то можем использовать индексные свойства 

interface IStyles {
   ///индексные свойства 
   [key: string ]: string
}

const styles: IStyles = { 
   position : 'absolute', 
   age: '25age'
}


///интерфейсы используются не только для строгого типизирования в дальнейшем будем смотреть по шаблонам

const serverConfig: IBasicConfig   = { 
   protocol: 'http:',
   portal: 3000
}

const backaupConfig = { 
   protocol: 'https', 
   portal: 8000, 
   role: 'admin'
}

interface IBasicConfig { 
   protocol: string , 
   portal: number
}

///с помощью такого интерфейса можно фильтровать те значения что будут приходить в функцию то есть обычно если указывал что объект имет тип интерфейса то он должен был быть 1 в 1 как он но в функциях не так , там надо чтобы были те параметры что есть в интерфейсе описания и пофиг если объект приходящий в функцию шире

///функция сама определяет что подходит что нет
const startNewServer =(config: IBasicConfig):void=>{ 
   console.log(config.protocol + config.portal.toString())   
}

startNewServer(backaupConfig);

const numvs: [number[]] =[[1,2,3,4]];  //ток один массив чсел внутри второго массива



type uis = {
   name: string
}

type asd = { 
   number: number
}

type ASD = uis & asd & { ara: boolean };

const bj2: ASD = { 
   name: 'asd',
   number: 1,
   ara: false
}
