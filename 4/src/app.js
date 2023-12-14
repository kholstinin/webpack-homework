import {Button} from 'Components/button';
import {Header} from 'Components/header';
import {render} from '_/render';
import {sum} from '_/sum';

import URL from 'coolurl';

const button = new Button();
const header = new Header();

render(sum(button + header));

const url = new URL(location.origin);
