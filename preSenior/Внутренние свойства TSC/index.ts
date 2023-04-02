// const array: Array = [ 3,4 ,2,1];           //тут надо указывать джинерики
const array: Array<number> = [ 3,4 ,2,1];    


const array2: ReadonlyArray<string> = ["asd"];      //нельзя менять!        для иммутабильности (нельзя менять , менняем ток новый клон)!   redux

//ReadOnly работает ток на вврехних уровнях на вложенных уже не смотрит!
interface IState { 
    data: { 
        message: string
    }, 
    name: string,
    ok?: boolean
}

function action (state:Readonly<IState>) {
    // state.data = 'asd'              //выдает ошибку так как нельзя менять свойтсва вверхнего уровня! но уже внутрненние он не увидит ошибку
    state.data.message = 'ok';          //чтобы этого не было надо использовать врариант с инета DeepReadOnly
}


///есть два типа используемые с джинериками это Partial Reqaured первый делает все свойства данного типа необательными то есть добавляет оптинал оператор  ( опертор оптиционального приследования)

const tesss: Partial<IState> = { 
    //теперь тут нет ничего обязательного
}

const tess2: Required<IState> = { 
    //тут все обязательно
    data: { 
        message: 'asd'
    }, 
    name: 'asd',
    ok: true
}

