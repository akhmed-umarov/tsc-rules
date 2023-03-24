interface Data { 
	email: string, 
	title: string, 
	text: string, 
	checkbox: boolean
}

const formData: Data = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};


const EmailInp = document.querySelector('#email') as HTMLInputElement;
const titleInp = document.querySelector('#title') as HTMLInputElement;
const TextInp = document.querySelector('#text') as HTMLInputElement;
const CheckBox = document.querySelector('#checkbox') as HTMLInputElement;

const buttons = document.querySelectorAll('button');
buttons.forEach(button=> { 
	button.addEventListener('click' , (event)=>{ 	
		event.preventDefault()
		formData.email = EmailInp?.value ?? '';			//по идее слишком много проверок легче было прописать defer 
		formData.title = titleInp.value ?? '';
		formData.text = TextInp?.value ?? '';
		formData.checkbox = CheckBox?.checked ?? ''; 
			if (validateFormData(formData)){ 
				checkFormData(formData)
			}
	})
})

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: Data):boolean {
	// Если каждое из свойств объекта data правдиво...
	if (Object.values(data).every(value=>value)) {
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data: Data): void {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	// Если email совпадает хотя бы с одним из массива
	// if (emails.indexOf(email)!== -1) {
	if (emails.some(emails=>emails ===email)) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
	}
}
