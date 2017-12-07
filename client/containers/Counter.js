import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{
    constructor(props){
        super(props);
	this.state = {
	};
    }

    render(){
	return(
	    <div className="container">
                <div className="notification">
                    <h1>
                        {this.props.count}
                    </h1>
                </div>
	    </div>
	);
    }
}

function mapStateToProps(state){
    return {
	count: state.counterReducer
    };
}

export default connect(mapStateToProps)(Counter);
