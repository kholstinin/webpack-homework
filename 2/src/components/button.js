export class Button {
	constructor(opts) {
		this.text = opts.text;
	}

	render() {
		const root = document.getElementsByTagName('body')[0];
		root.innerHTML = `<button>${this.text}</button>`
	}
}
