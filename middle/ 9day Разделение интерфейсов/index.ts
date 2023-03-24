interface ICar  { 
    name: 'car', 
    shini: 4,
    engine: 'electr'
}

interface IShip { 
    name: 'ship', 
    water: true,
    engine: 'electr'
}

interface ComplexVehicle { 
    name: 'car' | 'ship', 
    engine: 'electr', 
    water?: true, 
    shini?: 4
}

///такие вещи лучше не делать


type Mashini = ICar | IShip;

function isCar(msg: Mashini): msg is ICar { 
    return (msg as ICar).name === 'car'
}

function isShip(msg: Mashini): msg is IShip { 
    return (msg as IShip).name === 'ship'
}

function consoleFunction (test : ComplexVehicle ) { 
    //typeGuard бывает и не ток изфукнкций а еще из switch case как в примере снизу
    switch (test.name) {
        case "car":
            console.log(test.shini! * 2);           //оператор оптиоцинального кода то когда мы точно знаем что данное свойство будет 
            break;
        case "ship":
            console.log(test);
            break; 
        default:
            console.log(test);              //тип never для того чтобы палить если добавим в аргумент функции другие типы и их забудем добавит в проверку
            break;
    }
}