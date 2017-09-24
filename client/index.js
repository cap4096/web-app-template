import 'semantic-ui-css/semantic.min.css';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('root');


const mainPage=(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

render(mainPage, app);

/*eslint-disable no-undef*/
if(DEVELOPMENT){
    if(module.hot){
        module.hot.accept();
    }
}
/*eslint-enable no-undef*/
