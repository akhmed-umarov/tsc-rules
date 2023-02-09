var totalData = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
    deficit: true,
    date: new Date()
}; 

const result = Object.entries(totalData)
                    .filter(el=> el[1] === 'empty')
                    .reduce((res , next)=> `${res} , ${next[0]}`, "")
console.log(result.trim().slice(2 ,-1));


const arrayRes = [];
for (let x in totalData){ 
    if (totalData[x] === 'empty') { 
        arrayRes.push(x)
    }
}
console.log(arrayRes.join(",").slice(0 , -1));


const array23 = [1, 2, 3,4, 5 , 1];



console.log(array23.pop());




