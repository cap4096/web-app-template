import ReactDOM from 'react-dom';
import React from 'react';

import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const renderApp = Component => {
    const out = (
        <AppContainer>
          <Component/>
        </AppContainer>
    );

    ReactDOM.render(out, document.getElementById('root'));

};

renderApp(App);

if(module.hot){
   module.hot.accept('./components/App', () =>{
        renderApp(App);
    });
}
