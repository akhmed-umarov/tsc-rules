type test = "CONST";

type testUnion = "ok" | "no";
type tessingUn = "Out" | "In";      //все со всеми при темплайт литерал


type test2 = `${test}IN`

type testUnion2 = `${testUnion}${tessingUn}`;


//чтобы создать такие же штуки но уже с большой буквы используется тип  c джинериком как на примере внизу Capitalize<Primer>
//но в нем можно использовать только union тип со строками без других типов, иначе будет ошибка
type testUnion3 = `${Capitalize<testUnion>}${tessingUn}`;



type GoogleForm =  {
    name: string,
    age: number,
    rol?: string
}


type CurrentGoogleForm<T> = { 
   +readonly [P in keyof T as testUnion3]-?: P extends "age" ? number : string          //  то есть тут мы поменяли имеющиеся свойсвта лтипа на те что мы им присвоили 
}


const testss: CurrentGoogleForm<GoogleForm> = {             //
    OkIn: "ASD",
    NoOut: 'asd',
    OkOut: '',
    NoIn: ''
}


type Simple = { 
    [P in testUnion]: string            //то есть можно взять любой литеральынй тип и внутри него сделать перебор
}

const TESTTT:Simple = { 
    ok: '',
    no: ''
}


type CustomSimple<T> = { 
    +readonly [P in keyof T as `Custom ${string & P}`]-?: string         //если не указать символ  & то там будет ошибка так как свойство в объекте так же может быть символом     
 }                                  // а тут мы прям указали что будет строкой
 
