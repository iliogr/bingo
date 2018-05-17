import React, {Component} from 'react';
import Header from './Header';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'
import classNames from 'classnames/bind';

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

class Ticket extends Component {

    verifyClaim = (id, numbers) => {
        this.props.verify(id, numbers);
    }

    render() {
        return (
            <div id="Ticket">
                { this.props.numbers.map((num, i) => {
                    return(
                        <div key={i}
                        className={classNames({
                            "ticket-number": true,
                            "marked": num.status
                        })}>
                            <span>{num.number}</span>
                        </div>
                    )
                })}
                <a className="win-button" onClick={()=>{this.verifyClaim(this.props.id, this.props.numbers)}}>Claim Winning Ticket</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);
