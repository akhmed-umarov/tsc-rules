/*-------------Литеральный тип тип с данными которые уже точно есть 
-------------------*/

/*-------------Например используя union type | можно записать в функцию строки которые точно будут вначале-------------------*/


/*-------------з-------------------*Значение по умолчанию ставится после указания типа перменной НЕ КАК В JS*/    //сначала типизаця потом уже знначение по умолчанию

const port1 = 3000;
const port2 = 8000;

const startServer = (protocol: "http:" | "https" , domen: string , port: 3000 | 8000): "Server started" | "Server error" =>{ 
   if (port === 3000 || port === 8000) { 
      console.log(`Server started on port ${port} her protocol is ${protocol}`);
      return "Server started"
   } 
   return "Server error"
}


startServer('http:' , 'asdasd' , 3000);

//type elias короче эта фигня позволяет литеральные типы если их надо переиспользовать и не охото писать по новой каждый раз просто вписать так, но и еще повышает симантику кода (улучшает чтение кода);

//type работает ток в tsc
type AnimationTimingFunction = 'easy-out' | 'easy-in' | "easy";

type AnimationId = string | number;

//Благодаря литеральному примитивному типу мы огранич ести возможные значения строк до трех значений и потом добавили ему значение по умолчанию
const createAnimation = (id: AnimationId , animName: string , timengFunc: AnimationTimingFunction = 'easy' , duration : number , iterCount: number | "infinite" = 5): void => { 
   // const elem = document.getElementById(`#${id}`);
   
   // if (elem) { 
      // elem.style.animation = `${animName} ${duration} ${timengFunc} ${iterCount}`
      console.log(`${animName} ${duration} ${timengFunc} ${iterCount}`);
   // }
}

createAnimation(20 , 'namesss' , "easy" , 5 , 5);

