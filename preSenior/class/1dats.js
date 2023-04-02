class User { 
    //тут указываются свойства которые будут одинаковые для всего класса 
    eha = 'asd';
    constructor(a ,b) { 
        this.name = a;
        this.age = b;
        //метод можно указывтаь тут а можно не тут а снизу
        this.ula = (x)=>{ 
            console.log(`asd ${x} ${this.age}`);
        }
    }
    //тут можно не тольько методы записывать но и свойсвта которые будут статическими ля всех элементов класса!!!!! а я обычно писал ток методы теперь понятно дл ячего именно туту они указываются , так как в конструктор их нет смысла писать если они для  всех одинаковые
    ULAAA = (s) => {                    //array
        console.log(this.name , s);
    }
    ulaa2 (sd) {                        //diclaration
        console.log(this.age);
    }
}

const ahm = new User( 'asds' , 23 );

console.log(ahm);

ahm.ula('123')

ahm.ULAAA('00')

ahm.ulaa2(10);