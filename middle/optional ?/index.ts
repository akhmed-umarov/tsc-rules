interface IObj { 
    name: string, 
    age: string,
    parent?: { 
        father?: string,
        mother?: string
    }
}


const consoleData1 =(data: IObj):void=>{ 
    console.log(data.name , data.age , data.parent?.father?.toLocaleLowerCase() , data.parent?.mother);
}

const user: IObj = { 
    name: `ad`,
    age: `12`   
}
                                            //если в структуре данных указали что свойство объекта является необязательным а потом уже знаем что оно обязательное то омжно использовать редкий оператор not-undefined|null (!) , но это ток  втом случае если структуру не вариант поменять а так лучше конечно поменять структуру
                                            //выглядило бы это как на примере снизу (если бы мы точно знали что свойство парент точно будет)

// const consoleData1 =(data: IObj):void=>{ 
//     console.log(data.name , data.age , data.parent!.father?.toLocaleLowerCase() , data.parent?.mother);
// }
                                            

consoleData1(user);

                                            //оказывается оператор опционального наслдеования присваивается даже если указать тип через union undefined
                                            //то есть вся разница в том что  первом случае требоваться свойство parent не будет ,  а во втором случае надо конкретно указать что свойтсво равно undefined

                                            //пример если db требует чтобы какое то поле либо было undefined либо string тогда надо указывать второй тип а так можно  и первый
interface IObj2 { 
    name: string, 
    age: string, 
    parent: { 
        father: string | undefined, 
        mother: string | undefined
    } | undefined
}

const consoleData2 =({name , age , parent}: IObj2):void=>{ 
    console.log(name , age , parent?.father , parent?.mother);
}

const obj = { 
    message: { 
        ok: 123,
        non: 123
    }
}

const {message: { ok , non}} = obj
