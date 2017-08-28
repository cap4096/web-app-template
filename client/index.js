import style from './assets/css/style.css';
import Linux from './image';
import Tux from './image2';

const app = document.getElementById('root');


app.innerHTML = `
<div>${Linux}${Tux}</div>
<div class="${style.box}">
   <p>PROD: ${PRODUCTION}</p>
   <p>DEV: ${DEVELOPMENT}</p>
</div>
<div id="menu">
<button id="page1">Page 1</button>
<button id="page2">Page 2</button>
</div>
<div id="content">
<h1>Empty</h1>
</div>
`;

document.getElementById('page1').addEventListener('click', () => {
    System.import('./page1')
	.then(pageModule => {
	    document.getElementById('content').innerHTML = pageModule.default;
	});
});

document.getElementById('page2').addEventListener('click', () => {
    System.import('./page2')
	.then(pageModule => {
	    document.getElementById('content').innerHTML = pageModule.default;
	});
});

if(DEVELOPMENT){
    if(module.hot){
	module.hot.accept();
    }
}
