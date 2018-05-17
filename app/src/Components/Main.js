import React, {Component} from 'react';
import Board from './Board';
import { Redirect } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'
import socketio from 'socket.io-client'

const socket = socketio('http://localhost:8888');

class Main extends Component {

    componentDidMount = () => {
        this.props.getTickets()
        socket.on('LastBall', (number) => {
            this.props.lastBall(number)
        });
    }

    render() {
        if (this.props.gameStatus === 'Finished') {
            return <Redirect to='/success' />;
        }
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
