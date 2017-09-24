import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

    render(){
        return(
            <div>
                <img width={this.props.scale}
                    height={this.props.scale}
                    src={this.props.pic}/>
            </div>
        );
    }
}

Image.propTypes = {
    scale : PropTypes.string.isRequired,
    pic   : PropTypes.string.isRequired
};
