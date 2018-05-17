import React, {Component} from 'react';
import Board from './Board';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'

class Main extends Component {

    componentDidMount = () => {
        this.props.getTickets()
    }

    render() {
        return (
            <div id="Main">
                <Board />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
   return {...state};
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
      ...actions,
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
