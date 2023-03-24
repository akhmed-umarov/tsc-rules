interface Square { 
    side: number;
    aria: number
}

interface Rect { 
    a: number;
    b: number;
    aria: number
}
//перегрузка это описание того что будет происходить в функции в различных случаях (когда приходят различные виды аргументов)
//первые две строчки перед самой функцией и называются перегрузкой функции  они нужны для подсказок (аннотаций) во время самого вызова функции
//перегрузка записывается до объявления самой функции , названия аргументов в перегрузках можно менять 

//  не влияет на скорость так как является просто уточнением
function calculateArea(a: number): Square;
function calculateArea(a: number , b:number): Rect;
function calculateArea(a: number , b?: number): Square | Rect { 
    if (b) {  
        const rect: Rect = { 
            a,
            b,
            aria: a * b
        }
        return rect
    } else { 
        const square: Square = { 
            side: a,
            aria: a*a
        }
        return square
    }
}