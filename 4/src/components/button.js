import {log} from 'Helpers/log';

export class Button {
	constructor(text) {
		this.text = text;
	}

	render() {
		log('render button');
		return `<button>${this.text}</button>`;
	}
}
