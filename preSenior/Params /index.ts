function test (a: number):void { 
    console.log("asd");
}

type ExamplePar = Parameters<typeof test>

type ExampleRes = ReturnType<typeof test>


class ExampleClass {
    name: string;
    age: number;
    constructor(a: string , b: number) {
        this.name = a;
        this.age = b;
    }
}