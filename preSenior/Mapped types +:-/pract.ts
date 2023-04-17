interface GoogleCompany { 
    name: string,
    age: number,
    rol?: string
}



type GoogleCompanyClone<T> = { 
    [P in keyof T]: P extends "age" ? number : string
}

const testG:GoogleCompanyClone<GoogleCompany> = { 
name: "asd",
age: 5
}


