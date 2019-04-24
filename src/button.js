import './button.css';

export default class Btn {
	constructor(){
		const libraryBtn = document.createElement('button');
		const btnContainer = document.getElementById('btn-container');
		libraryBtn.setAttribute('id', 'library-btn');
		libraryBtn.textContent = 'Кнопка';
		btnContainer.append(libraryBtn);
	}
	
	setCounter() {
		let getForm = (num, words) => { // клик, кликов, клика
			if ((num >= 10 && num <= 19) || (num % 10 >= 5 && num % 10 <= 9) || num % 10 == 0) {
				return num.toString() + ' ' + words[1];
			} else if (num % 10 == 1) {
				return num.toString() + ' ' + words[0];
			} else {
				return num.toString() + ' ' + words[2];
			}
		}

		let countClick = 0;
		const btn = document.getElementById('library-btn');
		btn.addEventListener('click', function() {
			countClick++;
			btn.textContent = getForm(countClick, ['клик', 'кликов', 'клика']);
			});
	}
}