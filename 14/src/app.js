import {Button} from 'my-components';
import {add} from 'my-utils';

const button = new Button(add(2, 2));

button.render();
console.log(window.utils.sub(5, 2));
