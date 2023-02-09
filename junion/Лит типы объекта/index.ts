///анотация это опредения типа 

// const serverConfig: {protocol: 'http:' ; port: 3000 } = { 
//    protocol: 'http:', 
//    port : 3000,
// }

//анотация функции очень похожа на объявление функции надо не перепутать сначала идет анатация цункции которая позволяет следить за тем какие переменные были закинуты как агрументы для функции
// const startServer: (protocol: "http:" | "https" , domen: string , port: 3000 | 8000)=>string = 
// // (protocol: "http:" | "https" , domen: string , port: 3000 | 8000): "Server started" | "Server error" =>{ 
// (protocol , domen: string , port ): "Server started" | "Server error" =>{ 
//    if (port === 3000 || port === 8000) { 
//       console.log(`Server started on port ${port} her protocol is ${protocol}`);
//       return "Server started"
//    } 
//    return "Server error"
// }

// startServer(serverConfig.protocol , 'asdasd' , serverConfig.port);


const test = ():'hello'=>{ 
   return 'hello'
}
// const test2 = (): string => { 
//    return 'asdasd'
// }
const test3 = (): number[]=>{ 
   return [2 , 3 ,4, 5]
}

//тут ток 1 массив чисел внутри массива
const test4 = ():[number[]]=>{ 
   return [[12, 313 , 123]]
}

const test5 = (): number[][] =>{ 
   return [[123], [123]]
}

