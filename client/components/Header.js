import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';


export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

    render(){

        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/Page1'>Page 1</Link></li>
                        <li><Link to='/Page2'>Page 2</Link></li>
                        <li><Link to='/Page3'>Page 3</Link></li>
                        <li><Link to='/Page4'>Page 4</Link></li>
                        <li><Link to='/Page5'>Page 5</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
