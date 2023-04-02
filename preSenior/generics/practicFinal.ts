// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

//1-ый способ
interface dataHours { 
    total: number,
    inMenu: number
}

type Hours = dataHours | number | string;

interface PlayerData<T> { 
    game: T,
    hours: Hours,
    server: string
}

const player1:PlayerData<string> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2:PlayerData<number> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3:PlayerData<string> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};



//2-ый способ

type HourData = {total: number, inMenu: number};

interface PlayerData2<T  , H extends number | string | HourData> { 
    game: T,
    hours: H, 
    server: string
}

const player11: PlayerData2<string  , number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player22: PlayerData2<number  , string>  = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player33: PlayerData2<string  , HourData> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};


// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

enum NameData { 
	RECT = 'rect',
	TRIANGLE = 'triangle',
	OTHER = 'other',
	CIRCLE = 'circle'
}

interface DataInt { 
	name: string,
}

interface Dopolnitel extends DataInt { 
	data?: { 
		a?: number,
		b?: number,
		c?: number,
		l?: number,
		r?: number
	}
}

// function opredilymType<T> (data: T): true { 						такое не очень так как если забыть передать то автоматически возьмет то что закинуто
// 	return true
// }

function calculateAmountOfFigures<T extends DataInt>(figure: T[]): AmountOfFigures {
	const amountOfFigures = { 
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0
	}
	figure.forEach((el)=>{ 
		switch (el.name) {
			case NameData.RECT:
				return amountOfFigures.squares++;
			case NameData.TRIANGLE:
				return amountOfFigures.triangles++;
			case NameData.CIRCLE:
				return amountOfFigures.circles++;
			case NameData.OTHER:
				return amountOfFigures.others++;
			default:
				return new Error('Never пока что')
		}
	})
	return amountOfFigures
}

const datas = [
	{
		name: NameData.RECT,
		data: { a: 5, b: 10 },
	},
	{
		name: NameData.RECT,
		data: { a: 6, b: 11 },
	},
	{
		name: NameData.TRIANGLE,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: NameData.OTHER,
		data: { l: 15 },
	},
	{
		name: NameData.CIRCLE,
		data: { r: 10 },
	},
	{
		name: NameData.CIRCLE,
		data: { r: 5 },
	},
	{
		name: NameData.RECT,
		data: { a: 15, b: 7 },
	},
	{
		name: NameData.TRIANGLE,
	},
];

console.log(calculateAmountOfFigures<Dopolnitel>(datas));



//теперь надо сделать это же задание но при этом ппосчиттаь длину всех квадратов и кругов!

interface TestArguments { 
	name: string
}

const data123 = { 
	name: 'Akhmed',
	age: 25
}

function testArg<T extends TestArguments> (data: T): void { 
	console.log(data);
}

// testArg<{name: string , par: number }>(data123); 			обозначает что то что я написал в дженерик должно будет соблюдаться в типизации аргумента