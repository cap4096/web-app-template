import React from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import { bindActionCreators } from 'redux';

class AddCounter extends React.Component{
    constructor(props){
        super(props);
	this.state = {
	};
    }

    render(){
        return (
            <div className="container">
                <form>
                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className="button is-primary"
                                onClick={(e) => {e.preventDefault(); this.props.dispatch(addCounter());}}
                                >ADD</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

//function mapStateToProps(state){
//    return {
//	prop1: state.state1,
//	prop2: state.state2,
//    };
//}

function mapDispatchToProps(dispatch){
    return {
	actions: bindActionCreators(addCounter, dispatch)
    };
}

export default connect(mapDispatchToProps)(AddCounter);
