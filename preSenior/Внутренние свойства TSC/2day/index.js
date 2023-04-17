class Judo { 
    #bottak = 5;
    constructor(a , b) { 
        this.name = a
        this.age = b + this.#bottak;
    }
    get getBd () { 
        return 'yeeeeeeeeees'
    }
    set getBd (x) { 
        console.log('nopppppp');
        this.age = 100 - x;
    }
}


const judd = new Judo('akhemd' , 10)


console.log(judd);

console.log(judd.getBd);
console.log(judd.getBd = 30);

console.log(judd);


class NewJudo { 
    constructor(a) {
        if (a) { 
            this.i
        }
    }
}