import React from 'react';
import PropTypes from 'prop-types';

export default class SortableList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

    onDragStart(e){
        this.source = e.target;
        e.dataTransfer.setData("text/plain", e.target.innerHTML);
        e.dataTransfer.effectAllowed = "move";
        console.log('DRAGSTART: ', e.target.innerHTML);
    }

    onDragOver(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    onDrop(e){
        e.preventDefault();
        e.stopPropagation();
        this.source.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData("text/plain");
    }

    render(){
        const listSty = {
            display: 'inline-block',
            listStyleType: 'none',
            border: 'solid black 1px',
            margin: '0',
            padding: '0',
            overflow: 'auto'
        };

        const itemSty = {
            padding: '4px 4px',
            textDecoration: 'none'
        };

        const items = React.Children.map(this.props.children,
            (element, index) => {
                return (
                    <li key={index.toString()}
                        style={itemSty}
                        draggable="true"
                        onDragStart={(e) => {this.onDragStart(e);}}
                        onDragOver={(e) => {this.onDragOver(e);}}
                        onDrop={(e) => {this.onDrop(e);}}>
                        {element}
                    </li>
                );
            });

        return(
            <div>
                <ul style={listSty}>
                    {items}
                </ul>
            </div>
        );
    }
}

SortableList.propTypes = {
};
