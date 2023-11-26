import throttle from 'lodash.throttle'

const form = document.querySelector('form');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);


let formData = {};

function setVeluesToForm() {
	const velues = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if (!velues) {
		return
	}
	formData = velues;

	for (let key in formData) {
		const inputElement = form.querySelector(`[name="${key}"]`);
		if (inputElement) {
			inputElement.value = formData[key];
		}
	}

}
setVeluesToForm();

function onInput(e) {
	formData[e.target.name] = e.target.value;
	setValuesToLocalStorage(formData)
}

function onFormSubmit(e) {
	e.preventDefault();
	localStorage.clear();
	for (let key in formData) {
		const inputElement = form.querySelector(`[name="${key}"]`);
		if (inputElement) {
			inputElement.value = "";
		}
	}
	console.log(formData);
	formData = {};
}


function setValuesToLocalStorage(data) {
	const stringData = JSON.stringify(data)
	localStorage.setItem(STORAGE_KEY, stringData)
}






