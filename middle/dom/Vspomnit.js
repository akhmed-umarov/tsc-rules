const test1 = document.querySelectorAll('.test');
const test2 = document.getElementsByClassName('test');

const del = document.querySelector('button');

del.addEventListener('click' , ()=>{ 
    const body = document.body;
    const delet = document.querySelector('.test');
    const delet2 = document.getElementsByClassName('.test')[0]; //нельзя так как этон еузел а элементы именно
    body.removeChild(delet);
console.log(test1 ,  test2);
})
console.log(test1 ,  test2);



const delet = document.querySelector('.test');

console.log( delet.classList.item(0));