interface IForm {
	login: string;
	password: string;
}


// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации



// type ReqValid= {
// 	isValid:  boolean, 
// 	errorMsg?: string
// }

// type IValidForm = {
// 	[P in keyof IForm]: ReqValid
// }

type ReqValid= {
	isValid:  boolean, 
	errorMsg?: string
}

type IValidForm = {
	[P in keyof IForm]: {isValid: true} | {isValid: false , errorMsg: string}
}

const validationData:IValidForm = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};




// type ReqValid<T extends boolean> = {
// 	isValid: T, 
// 	errorMsg: T extends true ? never : string
// }


// type IValidForm = { 
// 	[P in keyof IForm]: ReqValid<boolean>
// }