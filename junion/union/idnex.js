class People { 
   constructor() { 
      this.haveName = true;
      this.MaxAge = 100;
      this.logo = ()=>{ 
         console.log(`Za Aliyans`);
      }
   }
}

const human = new People();

class Footman extends People { 
   constructor(a , b , c){ 
      super();
      this.health = a;
      this.damage = b;
      this.bd = c;
   }
static compare (a , b) { 
   if ( a.damage > b.damage ) {
      console.log('first win');
   } else if (b>a){ 
      console.log('second win');
   } else { 
      console.log('nothing');
   }
}
get age() { 
   return new Date().getFullYear() - this.bd   
   }

   set age(value) { 
      this.bd = new Date().getFullYear() - value;
   }

}

const footman1 = new Footman(100 , 8 , 1998 );
const bugay = new Footman(350 , 22);


footman1 instanceof People //true вернет 