type Currencies = { 
    usa:  "usd",
    chine: "cny",
    kz: "tenge",
    russia: "rub",
}

type CustomSS<T> = { 
    [P in keyof T]: string
}

// const testtt: CustomSS<Currencies> = { 
//     usa:  "usd",
//     chine: "cny",
//     kz: "tenge",
// }

type CustomCurrencies = { 
    usa:  string,
    chine: string,
    kz: string,
    russia: string,
}

// const IsString =<T>(data: T): T extends number ? true : false=>{         а можно ведь и так делать тайпгварды
const IsString =(data: unknown): data is string=>{ 
    if (typeof data === 'string') return true
    return false
}

function tests<T extends number | string>(params:T):T extends string ? string : number {
    console.log(params);
    if (IsString(params)) return "ok" as T extends string ? string : number
    return 1 as T extends string ? string : number
}
tests("123");           //у функицй можно не указывать динерики они сами автоматом, ток у фукнций

type keysCurrencies = keyof CustomCurrencies;
type valueCurrencies = CustomCurrencies[keysCurrencies];

type TstCustom = Partial<Currencies>;


type Keys = "name" | "age" | "role";

type User = { 
    [K in Keys]: string
}



// for (let x: number = 10 ; x<20 ; x++) { 
//     console.log(x);
// }

