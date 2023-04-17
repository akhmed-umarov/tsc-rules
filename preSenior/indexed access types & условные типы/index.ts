// type Example = string extends 'hello' | 'poka' ? string : number;


type Example<T> = T extends 'hello' | 'poka' ? string : number;

const test1:Example<'s'> = 4;           //то есть тут идет проврека подходит ли T под extends 

type lit = 'yes' | 'no';

type Example2 = string extends 'hello' ? lit : unknown;      //стринг не ограничена одним hello поэтому там получается не верно для того чтобы былологично надо использовать джинерики

interface WorkMan { 
    name: string, 
    age: number
}

interface GoogleCompany  { 
    width: number,
    workman: WorkMan[]
}

interface GoogleCompanyOwner { 
    owner: string
}

type GoogleCompanyData<T extends number | string> = T extends number ? GoogleCompany : GoogleCompanyOwner;


const test: GoogleCompanyData<'asd'> = {                //   тут в свою очередь надо запомнить что литеральные значения типов сохраняются и проверяются сначала в условиях xentedns а уже после проверются их примитивные литеральные типы , поэтому вверху asd подходит к типу string
    owner: 'asd'
}

type ArNumOrStr<T extends number | string> = Array<T>;

type keyGoogle = keyof GoogleCompany;

type TypeFromGoogle<T extends keyGoogle> = GoogleCompany[T];

///практика того что надо вспомнить как получить доступ  типу внутри интерфейса внутри которого находится массив других значений внизу

type WorkTest = TypeFromGoogle<'workman'>[number];


//пускай мне надо создать функцию которая следит за тем что она получает и в зависимости от того что получается выдает разные ответы (не простое typegueard)


interface TestCompanyOwner { 
    owner: string
}

interface TestCompanyNumber { 
    number: number
}


// function testWar (data: number ): TestCompanyNumber;
// function testWar (data: string ): TestCompanyOwner;
function testWar<T extends number | string > (data: T ): T extends number ? TestCompanyNumber : TestCompanyOwner  {         //если так указать то внизу при возвращение будет ошибка объекта так как неизвестно какого типа будет возвращаемый объект чтобы этоисправить необхоимо взять и использоваь as 
    if (typeof data === 'string') { 
        const res: TestCompanyOwner = { 
            owner: 'asd'
        }
        // return res                       тут была бы ошибка
        return res as T extends number ? TestCompanyNumber : TestCompanyOwner
    } else  { 
        const res: TestCompanyNumber = { 
            number: 10
        }
        return res as T extends number ? TestCompanyNumber : TestCompanyOwner
    }
}

//таким образом я указываю что только когда приходящие данные равны какому то типу то тогда возвращается какой то другой тип



interface test1 { 
    name: string,
    age: number
}
interface test2 { 
    name: string, 
    message: string
}
type typeSum = test1 | test2;

type DjinericType<T extends typeSum> = T extends test1 ? number : string;

function isTest1(data: typeSum): data is test1 { 
    if (data.hasOwnProperty("age")) return true
    return false
}


function testingPractick<T extends typeSum>(params: T ): T extends test1 ? number : string {
    if (isTest1(params)) { 
        return params.age as DjinericType<T>
    } else { 
        return params.message as T extends test1 ? number : string              //тут такой же дженерик поэтому можно вынести его в отдельный type
    }
}

const ttt1:test1 = { 
    name: 'asd', 
    age: 20
}
testingPractick(ttt1)                       //тут джинерик подставиться автоматически 


type companyType = { 
    name: string ,
    owner: number
}

type keysCompany = keyof companyType;

type companyValues<T extends keysCompany> = companyType[T]; 

const names:companyValues<'name'> = 'ad';

const keysss:keysCompany = 'owner';


type typeTestPrac<T> = T extends Array<infer First> ? First : T;            //тут  с помощью infer возвращается тип первого элемента массива, а так же если тип принадлежит массиву то он это только тогда выполняет иначе возвращает тот же тип который приходит в жинерик


const Nuuumber: typeTestPrac<number> = 5;

type typeTestPracs<T extends number | string> = T;