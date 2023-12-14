import headerMocks from 'Helpers/header-mocks';
import {sum} from 'Utils/sum';

export class Header {
	constructor(title, height) {
		this.title = title;
		this.height = sum(height, 50);
	}

	debug() {
		this.title = headerMocks.title;
		this.height = headerMocks.height;
	}

	render() {
		document.title = this.title;
		document.getElementById('header').height = this.height;
	}
}
