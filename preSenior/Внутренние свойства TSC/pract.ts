// redux создадим! 

enum Oper { 
    plus = 'plus',
    minus = 'minus'
}

interface IState { 
    count: { 
        value: number
    },
    lastOp?: Oper
}

const state: IState = { 
    count: { 
        value: 0
    },
    // lastOp: undefined
}   



function reducer () { 

}