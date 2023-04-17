var todoList = [];
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(responce=> responce.json())
//     .then(json=> { 
//         if ('id' in json) { 
//             todoList.push(json)
//             console.log('Pending...');
//         }
//         console.log(json);
//     })
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (responce) { return responce.json(); })
    .then(function (json) {
    if ('id' in json) {
        todoList.push(json);
        console.log('Pending...');
    }
    else if (Array.isArray(json)) {
        todoList = json;
    }
    console.log(json);
})["catch"](function () { return new Error('you have error'); });
