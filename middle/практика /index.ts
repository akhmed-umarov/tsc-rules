type Animal = 'cat' | 'dog' | 'bird';
interface AnimalData { 
	breed: string,
	sterilized?: string,
}
interface AnimalRequest extends AnimalData {animal: Animal};
enum Available { 
	AvailableOk= "available",
	AvailableNot = "not available"
}
interface AvailabeData extends AnimalRequest { 
	 	location: string,
        age?: number
}
interface AvailableNotData { 
		message: string,
        nextUpdateIn: Date
}
interface ResponceOk { 
	status: Available.AvailableOk,
	data: AvailabeData
}
interface ResponceNot { 
	status: Available.AvailableNot,
	data: AvailableNotData
}

type Res = ResponceOk | ResponceNot;

function isAvailable (res: Res): res is ResponceOk { 
	if (res.status === Available.AvailableOk) { 
		return true
	} return false
}

function checkAnimalData(animal: Res): AvailabeData | string {
	if (isAvailable(animal)) {
		// Заменить условие!
		return animal.data;
	} else {
		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
	}
}
