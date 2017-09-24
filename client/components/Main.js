import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

export default class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

    render(){

        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Page1" component={Page1}/>
                <Route exact path="/Page2" component={Page2}/>
                <Route exact path="/Page3" component={Page3}/>
                <Route exact path="/Page4" component={Page4}/>
                <Route exact path="/Page5" component={Page5}/>
            </Switch>
        );
    }
}
