interface ICompany { 
    name: string, 
    age: number
}

 type Tkeys = keyof ICompany;           //создает литеральный тип между всеми ключами того интерфейса в который попадет

 const keys:Tkeys = 'name';

 //используется если нам надо создать функцию которая будет использовать переменне которые мы в нее преедали и смотреть что пускай первым придет аргументом будет сам объект а вторым придет тот параметр который нужно законсолить
function cinsoleSecondArgument <T , K extends Tkeys> (object:T , key:Tkeys):void { 
console.log(`your key (${key}) it's ${object[key]} `);              //  теперь тут вторым аргументом может ьбыть толко ключи из первого объекта 
}


function cinsoleSecondArgument2 <T , K extends keyof T , S extends keyof T> (object:T , key:K , sec: S):void { 
console.log(`your key (${object[sec]}) it's ${object[key]} `);              //  теперь тут вторым аргументом может ьбыть толко ключи из первого объекта 
}

const objTest = { 
    name: 'Akhmed',
    age: 24
} 

cinsoleSecondArgument2(objTest , 'age' , 'name');

cinsoleSecondArgument(objTest , 'age');


interface Google { 
    name: string, 
    age: number, 
    type: string
}

const google: Google = { 
    name: 'Google',
    age: 235,
    type: 'It'
}

const google2 = { 
    name: 'Google',
    age: 235,
    type: 'It'
}

type KeyGoogle = keyof typeof google; 
type KeyGoogle2 = keyof typeof google2; 


//доступ к типу свойства типа или интерфейса можно сдлеать нижним образом 
//Indexed access types

type GoogleName = Google['name'];
