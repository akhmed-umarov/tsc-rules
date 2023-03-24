interface ICar  { 
    name: 'car', 
    shini: true,
    engine: 'electr'
}

interface IAirplain { 
    name: 'airplane', 
    winter: true,
    engine: 'electr'
}

interface IShip { 
    name: 'ship', 
    water: true,
    engine: 'electr'
}

type Mashini = ICar | IAirplain | IShip;

function isCar(msg: Mashini): msg is ICar { 
    return (msg as ICar).name === 'car'
}

function isAirplain(msg: Mashini): msg is IAirplain { 
    return (msg as IAirplain).name === 'airplane'
}

function isShip(msg: Mashini): msg is IShip { 
    return (msg as IShip).name === 'ship'
}

function consoleFunction (test : Mashini ) { 
    switch (test.name) {
        case "car":
            console.log(test);
            break;
        case "airplane":
            console.log(test);
            break;
        case "ship":
            console.log(test);
            break; 
        default:
            console.log(test);              //тип never для того чтобы палить если добавим в аргумент функции другие типы и их забудем добавит в проверку
            break;
    }
}