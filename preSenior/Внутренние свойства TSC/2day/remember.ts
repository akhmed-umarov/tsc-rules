interface Company { 
    name: string,
    age: number,
    teacher: Teacher[],
    owner: string
}

interface Teacher { 
    name: string,
    message: string,
    age: number
}

const Google: Company  = { 
    name: 'string',
    age: 102,
    teacher: [
    
    ],
    owner: 'US.SD.'
}

//  indexed access types если мне надо получить значение свойстваключ которой равен значению переменной

const test: keyof Company = 'age';          //получим литеральный тип ключей данного интерфейса в типах 

type KeysCompany = keyof Company;           //тут получаю литеральное значение всех ключей находящихся в данном интерфейсе

type TFromCompany = Company['name'];        //тут получаю конкретное значение  типа 

type TeacherFromCompany = Company['teacher'][number];           //тут интерес заключается в том что я вместо числа указываю тип литеральный number так как в types я не могу рабоатьс числами и приходится работать с литральными значениями объекта 

//если я хочу использовать переменную вместо литеральных значений я просто делаю через typeof пример снизу 

const strings = 'name';           //через const объявлена значит тип будет литерального значения а не примитивом 

type TestLast = Company[typeof strings];
