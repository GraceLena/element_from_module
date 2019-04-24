import './select.css'

export default class Slt {
	constructor(n, k, ...items) { // кол-во пунктов, пункт selected, пункты
		const libSlt = document.createElement('select');
		const sltContainer = document.getElementById('btn-container');
		libSlt.setAttribute('class', 'libSlt');
		console.log(items);
		for (var i = 0; i < n; i++) {
			const libSltOpt = document.createElement('option');
			libSltOpt.setAttribute('class', 'libSltOpt');
			libSltOpt.textContent = items[i];
			libSltOpt.setAttribute('id', 'opt' + i);
			if(i+1 === k) libSltOpt.setAttribute('selected', true);
			libSlt.append(libSltOpt);
		}
		sltContainer.append(libSlt);
	}
}