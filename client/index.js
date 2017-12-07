require('bootstrap/dist/css/bootstrap.css');

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';
const app = document.getElementById('root');


const mainPage=(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

render(mainPage, app);

/*eslint-disable no-undef*/
if(DEVELOPMENT){
    if(module.hot){
        module.hot.accept();
    }
}
/*eslint-enable no-undef*/
