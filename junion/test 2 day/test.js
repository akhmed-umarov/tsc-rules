const array = [5, 6 ,7, 8];

/*-------------test вернет ток то число что добавляет но при этом в старый массив будет добавлено данное число и будет изменен старый массив-------------------*/
// const test = array.push(5);

// const test2 = array.pop();
// console.log(array);
// console.log(test);

const test3 = array.unshift(1 ,2, 3, 4);
console.log(array);
console.log(test3);

/*-------------Пуш и unshift возвращают длину нового массива а пул и шифт возвращают удаленные элементы массива-------------------*/

const test4 = array.push(9 , 10);

console.log(test4 , array);

const test5 = array.shift(1);
console.log(test5 , array);


const array2 = array.filter(el=> el!== 5 && el!== 6);

console.log('asd' , array2);
