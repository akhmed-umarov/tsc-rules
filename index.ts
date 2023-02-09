interface IName {name: string};

type TAge = {age: number};

const obj = { 
    name: `Aked`, 
    has: true, 
    age: 200
}

const testFunction = (data: IName & TAge = {name: `Akhmed` , age: 20}):string=>{ 
    return 'ok'
}
testFunction(obj);


type ICartejNumber = [string , number , ...boolean[]];

const TestCartej: ICartejNumber = ['asd' , 10 , true , false];