// enum или перечисление!

//нужны когда точно известны варианты для самого пользователя чтобы не указывать стринг и потом не писать только какие то значения 

//нужны для того чтобы делать более точное сравнение в функциях! :26

//если хотите присвоить какое то значение то пример снизу , если поставить первый элемент числом то следующие будут на 1 болльше 
// если поставить какое то значение по типу числато седующие будут на 1 больше а если поставить уже строку то это другое дело там надо будет все следующие ставить либо числом либо строкой (если поставить допустим строку а потом сразу число то ошибок дальше не будет так как все значнения после числа становятся числом на 1 больше предыдущего)


///энамы бывают трех типов строковые числовые и гетерогеные которые являются комбинацией первых двух (почти не бывает)

    //так делать не надо! если пишешь энам то все значения внутри должны быть одного типа
enum Directions { // первоначально с 0 по порядку
    TOP ,           //  вычисления можно делать только в числовых энамах 
    RIGHT = TOP + 5,
    LEFT, 
    BOTTOM = 2
}

const enum TimingFunc {           //  тут не получится использовать интерполяцию
    EASE = 'easy',                   
    EASE_IN = "easy-in",
    LINEAR1 = "linear"
}

const frame = (elem: string , dir: Directions , timeF: TimingFunc):void =>{ 
    if (dir === Directions.BOTTOM) {            //имеет смысл сравнивать только с одной из возможный вариантов Direction
        timeF.toLocaleLowerCase()       //методы у энамов будут подсказываться в зависимости от того какой первый элемент будет в энаме
    }
}


///энамы бывают ток в ts поэтому после компеляции они становятся уже функциями переменными которые можно ускорить с помоштю константы просто написав const перед самим энамом , делается это для того чтобы вместо огромных функций в js по типу 
// var Directions;
// (function (Directions) {
//     Directions[Directions["TOP"] = 0] = "TOP";
//     Directions[Directions["RIGHT"] = 5] = "RIGHT";
//     Directions[Directions["LEFT"] = 6] = "LEFT";
//     Directions[Directions["BOTTOM"] = 2] = "BOTTOM";
// })(Directions || (Directions = {}));

//TSC  просто возьмет наши энамы и при компеляции вставить те значения из него туда где они использовались и эти функции уже не будут в конечном файле!

//через  const не особо выгоноиспользовать так как потом где то может выйти ошибка лучше потратить лишних несколько миллисек на доп работу этих функций 