import style from './assets/css/style.css';
const messages = require('./m');
const app = document.getElementById('root');

import Button from './button';
import Linux from './image';
import Tux from './image2';

import { mul } from './math-stuff';

const newMessage = () => {
    return Button.button +
	Linux +
	Tux +
	`<div>${mul(3,6)}</div>` +
	`<div class="${style.box}" <p>PROD: ${PRODUCTION}</p> <p>DEV: ${DEVELOPMENT}</p></div>`;
};

app.innerHTML = newMessage();
//    `<div class="box"><p> ${maessages.hi} ${messages.event} !!</p></div>`;

Button.attachEl();

if(module.hot){
    module.hot.accept();
}
