import React, {Component} from 'react'
import Header from './Header'
import Ticket from './Ticket'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'
import PropTypes from 'prop-types'

class Board extends Component {
    render() {
        return (
            <div id="Board">
                <div className="fl-row">
                    <div className="fl-100">
                        <Header />
                    </div>
                </div>

                {this.props.tickets ? (
                    <div className="bingo-board">
                        { this.props.tickets.map((ticket) => <Ticket key={ticket.id} verify={this.props.verifyTicket} id={ticket.id} numbers={ticket.numbers} /> ) }
                    </div>
                ) : (
                    <h3>Game is loading, Please wait ...</h3>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.bingoReducer.isFetching,
        tickets: state.bingoReducer.tickets
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

Board.propTypes = {
    tickets: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
