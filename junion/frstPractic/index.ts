

const elRate:number = 0.45;
const wRate: number = 2;


const monthPayment: number[] = [0,0];

const calculatePayment = (elData, wData , elRate , wRate)=> { 
   if (elData.mode === 'double' && elData.readings < 50) { 
      monthPayment[0] = elData.readings * elRate * 0.7;
   } else { 
      monthPayment[0] = elData.readings * elRate
   }

   monthPayment[1] = wData.readings * wRate;
}

calculatePayment()