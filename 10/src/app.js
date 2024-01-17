__webpack_nonce__ = window.nonce;

const button = import('./components/button').then(({ button }) => {
	const node = document.getElementById('app');

	try {
		node.innerHTML = `cool <button class="button">${button}</button>`;

	} catch (err) {
		console.log(err);
	}

	try {
		const scriptElement = document.createElement('script');
		scriptElement.src = 'https://yastatic.net';

	} catch (err) {
		console.log(err);
	}

	try {
		const str = "console.log(2 + 2)";
		eval(str);

	} catch (err) {
		console.log(err);
	}

})
