export function popalTest(data: number):boolean { 
    if (0 < data && data < 100 ) return true
    return false
}  


class Cats { 
    name: string;
    age: number;
    constructor(a: string,b: number){ 
        this.name = a;
        this.age = b
    }
}