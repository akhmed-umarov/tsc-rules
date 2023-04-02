// const data = <T>(data: T):void =>{ 

	
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

interface Dopolnitel { 
	data?: { 
		a?: number,
		b?: number,
		c?: number,
		l?: number,
		r?: number
	}
}

// 
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
	const dlina:Dopolnitel = { 
		data: { 
			
		}
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
	console.log(object);
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

console.log(calculateAmountOfFigures(datas));



//теперь надо сделать это же задание но при этом ппосчиттаь длину всех квадратов и кругов!


