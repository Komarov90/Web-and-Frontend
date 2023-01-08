const mainForm = document.forms[0];
console.log(mainForm);


const mainForm = document.forms.main;
console.log(mainForm);


console.log(document.querySelectorAll('form'));
console.log(document.forms);


document.body.insertAdjacentHTML(
	"beforeend",
	`<form name="some" class="some-form" action="#"></form>`
);


const mainFormInput = mainForm.elements.nameInput;
console.log(mainFormInput);


const mainFormRadioButtons = mainForm.nameRadio;
console.log(mainFormRadioButtons);


const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;


console.log(mainFormInput.value);
console.log(mainFormTextarea.value);


mainFormInput.value = "Пока";
mainFormTextarea.value = "До встречи!";


const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;


console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);


console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);


mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[1].checked = true;


mainFormCheckBox.value = "save";
mainFormCheckBox.checked = true;


const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

console.log(mainFormSelect.options);


const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);

const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);

const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);


let newOption = new Option("100", "4", true, true);
mainFormSelect.append(newOption);


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function (e) {
	mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
});


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.focus();

setTimeout(() => {
	mainFormInput.blur();
}, 3000);


lesson.addEventListener("focus", function (e) {
	lesson.classList.add('_focus');
	console.log('Див lesson в фокусе!');
});

lesson.addEventListener("blur", function (e) {
	lesson.classList.remove('_focus');
});


const mainForm = document.forms.main;

mainForm.addEventListener("focusin", function (e) {
	mainForm.classList.add('_active');
});


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormSelect = mainForm.nameSelect;
const mainFormFile = mainForm.nameFile;

mainFormInput.addEventListener("change", function (e) {
	console.log('Сработало change в input');
});
mainFormSelect.addEventListener("change", function (e) {
	console.log('Сработало change в select');
});
mainFormFile.addEventListener("change", function (e) {
	console.log('Сработало change в file');
});


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("input", function (event) {
	console.log(`value: ${mainFormInput.value}`);
});


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("copy", function (event) {
	console.log(`Копируем`);
});
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Вставляем`);
});
mainFormInput.addEventListener("cut", function (event) {
	console.log(`Вырезаем`);
});


mainFormInput.addEventListener("paste", function (event) {
	console.log(`Нельзя вставить`);
	event.preventDefault();
});


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	console.log('Форма отправляется...');

	// Проверяем поля и если есть ошибки отменяем отправку
	if (!mainFormInput.value) {
		console.log('Поле nameInput не заполнено');
		event.preventDefault();
	}
});


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;


mainFormInput.addEventListener("blur", function (e) {
	mainForm.submit();
});


const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event) {
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});


function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


const mainForm = document.forms.main;
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener("change", function (e) {
	let selectedFile = mainFormFile.files[0];

	let fileUrl = URL.createObjectURL(selectedFile);

	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
		</div>`
	);
});
