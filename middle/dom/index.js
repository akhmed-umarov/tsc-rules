var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
var EmailInp = document.querySelector('#email');
var titleInp = document.querySelector('#title');
var TextInp = document.querySelector('#text');
var CheckBox = document.querySelector('#checkbox');
var buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(EmailInp, titleInp, TextInp, CheckBox);
        console.log(EmailInp.value);
        event.preventDefault();
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if ("condition") {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if ("condition") {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
