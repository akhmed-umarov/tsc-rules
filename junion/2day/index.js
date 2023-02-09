///Использование системы типов в функциях
var _a;
/*-------------type never обозначает что ничего не возвращается от функции-------------------*/
/*-------------тут снизу функция по типу never так как не возвращет ни undefined-------------------*/
/*-------------Выброс ошибок один из вариантов получения типа never , а второй тип это синхпронная функция которая никогда не может закончится , так как никогда не дойдет до конца своего конца-------------------*/
/*-------------never обозначает что ничего не присваивается и ничего не возвращается-------------------*/
/*-------------Never используются в конце функции если надо сделать "Исчерпующуюся проверку" пример в функции logBrMsg типо если возвращается только стринг после функции то с поомощью типа never мы сможем сделать так чтобы так и было , а то если написать clg что то то вернется уже undefined-------------------*/
var createError = function (msg) {
    throw new Error(msg);
};
var logBrMsg = function (isBd, userName, age) {
    if (isBd) {
        console.log("Your name ".concat(userName[0].toUpperCase()).concat(userName.slice(1), " and your age = ").concat(age));
        return "0";
    }
    else if (isBd === false) {
        return 'Too bad';
    }
    return createError('er');
};
console.log(null !== null && null !== void 0 ? null : 'asd');
console.log(undefined !== null && undefined !== void 0 ? undefined : 'asd');
console.log((_a = void 0) !== null && _a !== void 0 ? _a : 'asd');
/*-------------any (старайтесь избегать этого типа так как если используем это считай работаем с js) и если не указывать тип данных то any присваивается автоматически -------------------*/
var userData = '{"isBrd": true , "ageData": 40 , "userName": "Akhmed"}';
var userIbj = JSON.parse(userData); ////JSON.parse() => возвращает всегда any так как не знает что находится внутри 
/*-------------ANY Это зло для TSC но он бывает ток в пустых переменных которые еще не назначили или в json-------------------*/
var anyPer;
/*-------------Когда создаем переменные даже без присваивания их значению можно присвоить сразу тип чтобы не создать ошибок в будущем-------------------*/
var str;
///что бы не записывали ничего не получится получить 
// const smth:never = null; ошибка
/*-------------tsc -init-------------------*/
/*-------------Можно получить конфигурацию и изменять ее-------------------*/
var test1 = null;
var test2 = null;
// const test2: string = null;         //ошибка
/*-------------дает ошибку но если поменять нижний параметр то тогда null будет возможно записать в любой тип данных кроме undefined-------------------*/
// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
///null записывается без ошибки первоначально ток в any и null
///trim убирает пробелы вначале и  в конце строки
function getRndData() {
    if (Math.random() < 0.5) {
        return null;
    }
    return ' Some data  ';
}
var data = getRndData();
//если отключить строгую проверку на null тогда будет ошибка в случае когда будет происходить код а тут ошибку не покажет
var trimmerData = data ? data.trim() : null;
console.log(trimmerData);
//*-------------undefined-------------------*/
var undefined1 = undefined;
var test2123 = undefined;
var sth2; /*-------------становится any а не undefined-------------------*/
/*-------------в js было бы undefined тут так то так же если выводить в консоль а тип данного будет any -------------------*/
console.log(sth2);
