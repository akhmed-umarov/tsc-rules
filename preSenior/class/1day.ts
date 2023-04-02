


//так создается обычный класс в tsc где первые name , age там в js указываются тстаические свойства для всего класса
class User { 
    name: string;
    age: number;
    constructor(a:string , b:number) { 
        this.name = a; 
        this.age = b;
    }
}

 

//тут при создание класса будут автоматичеески указываться типы свойств элементов класса 
class User2<T , S> { 
    name: T; 
    age: S;
    constructor(a: T , b: S) { 
        this.name = a;
        this.age = b;
    }
    //в методах тоже можно указывтаь типизацию 
    sayName(data:string):string;
    sayName<T , S>(data:T , age:S):string;
    sayName<T , S>(data: T , age?: S): string { 
        console.log(data , age);
        return 'Hayzanberg'
    }
}

// class AdminUser<T> extends User2 {              //так нельзя делать так как неизвестно какие джинерики передаются в класс adminUser и  он не может его создать надо поэтому сразу передавать джинерики

// class AdminUser<T> extends User { }              //либо использовать для наследования классы которые не содержат обощенные джинерики
class AdminUser<T> extends User2<string , number> {         
    reles: T;
    constructor(a: string,b : number , c: T){ 
        super(a,b);
        this.reles = c;
    }
}

const ASD = new AdminUser('rel' , 5 , 'asd');

const testz = new User('asd' , 30); 

const test = new User2('aksd' , 23);

const test2 = new User2<string , number>('aksd' , 23);


test.sayName()
