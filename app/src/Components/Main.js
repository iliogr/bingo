import React, {Component} from 'react';
import Board from './Board';
import Banner from './Banner';
import { Redirect } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'
import socketio from 'socket.io-client'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

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
            return <Redirect push to='/success' />;
        }
        return (
            <div id="Main">
                {this.props.message && (
                    <Banner message={this.props.message} />
                )}
                <Board />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        message: state.bingoReducer.message,
        gameStatus: state.bingoReducer.gameStatus
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

Main.propTypes = {
    lastBall: PropTypes.func,
    message: PropTypes.string,
    gameStatus: PropTypes.string
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
