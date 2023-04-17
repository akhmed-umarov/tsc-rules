type GoogleForm =  {
    name: string,
    age: number,
    rol?: string
}

const testGoogle: GoogleForm = { 
    name: 'Akhmed',
    age: 25
}

type CurrentGoogleForm<T> = { 
   +readonly [P in keyof T]-?: P extends "age" ? number : string
}

const testGoogleCurrent: CurrentGoogleForm<GoogleForm> = { 
    name: 'Akhmed', 
    age: 25,
    rol: "develop"
}


