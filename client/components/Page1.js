import React from 'react';
import SortableList from './SortableList.js';

export default class Page1 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

    render(){
        const itemSty = {
            border : 'solid black 1px',
            display : 'inline-block',
            textAlign: 'center',
            width: '256px',
            height: '32px'
        };

        return(
            <div>
                This is PAGE 1.
                <SortableList>
                    <div style={itemSty}>Item A</div>
                    <div style={itemSty}>Item B</div>
                    <div style={itemSty}>Item C</div>
                    <div style={itemSty}>Item D</div>
                    <div style={itemSty}>Item E</div>
                    <div style={itemSty}>Item F</div>
                    <div style={itemSty}>Item G</div>
                    <div style={itemSty}>Item H</div>
                    <div style={itemSty}>Item I</div>
                    <div style={itemSty}>Item J</div>
                </SortableList>
            </div>
        );
    }
}
