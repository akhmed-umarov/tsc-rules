/*-------------oBJECT типизуруются в момент использования  то есть я указываю как тип не надпись object а {} и в них пишу типизацию всех свойств данного объекта, пример указан снизу с declaration function -------------------*/
var userData = {
    isBrd: true,
    name: "Akhmed",
    age: 24
};
var userData2 = {
    isBrd: true,
    name: "Akhmed",
    age: 24,
    messages: {
        error: 'Error',
        ok: 'ok'
    }
};
function createError(msg) {
    throw new Error(msg);
}
function logBrdMsg(data) {
    if (data === void 0) { data = userData2; }
    if (data.isBrd) {
        return "Your name ".concat(data.name, " your age ").concat(data.age);
    }
    return createError('Error');
}
console.log(logBrdMsg());
/*-------------Делаем дисктруктурицазию объекта с указанием типов-------------------*/
function logBrdMsg2(_a) {
    var _b = _a === void 0 ? userData2 : _a, isBrd = _b.isBrd, name = _b.name, age = _b.age, error = _b.messages.error;
    if (isBrd) {
        return "Your name ".concat(name, " your age ").concat(age);
    }
    return createError(error);
}
console.log(logBrdMsg());
var testObjReplaceT = {
    name: "akhmed",
    age: 10
};
function mal(data) {
    if (data === void 0) { data = testObjReplaceT; }
    for (data.age; data.age < 18; data.age++) {
        console.log("You are little bastard ".concat(data.age));
    }
    console.log("Your name ".concat(data.name.charAt(0).toUpperCase() + data.name.slice(1), " ").concat(data.age, " last age"));
}
mal();
