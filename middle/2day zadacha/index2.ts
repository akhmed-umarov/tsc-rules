// тут интересно использованно reduce то есть с помощью данного метода мы сделала строку из массива нужных нам значний

type clothes = "empty" | number;

interface IClotherWarehouse { 
	jackets: clothes;
	hats: clothes;
	socks: clothes;
	pants: clothes;
}
interface IStationeryWarehouse { 
	scissors: clothes;
	paper: "empty" | boolean;
}
interface IAppliancesWarehouse { 
	dishwashers: clothes;
	cookers: clothes;
	mixers: clothes;
}
interface ITotalWarehouse extends IClotherWarehouse, IStationeryWarehouse , IAppliancesWarehouse { 
	deficit: boolean;
	date: Date;
} 


const totalData: ITotalWarehouse = {
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
	date: new Date(),
};

function printReport(data: ITotalWarehouse):string {
	const result = Object.entries(data)
					.filter(el=> el[1] === 'empty')
					.reduce((res , next)=> `${res}, ${next[0]}` , "");
	if (result.trim().length) { 
	return `We need this items: ${result.slice(0,-1)}`;
	}
	// или
	return "Everything fine";
}

console.log(printReport(totalData));


