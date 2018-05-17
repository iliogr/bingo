import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'
import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return (
            <div id="Header">
                <div className="fl-row">
                    <div className="fl-30">
                        <LastBall ball={this.props.ball} />
                    </div>
                    <div className="fl-35 fl-offset-30">
                        <PreviousBalls balls={this.props.previousBalls} />
                    </div>
                </div>
            </div>
        );
    }
}


class LastBall extends Component {
    render() {
        return (
            <div id="LastBall" className="fl-row">
                <div className="fl">
                    <h2>Last Ball</h2>
                </div>
                <div className="fl">
                    {this.props.ball && (
                        <div className="current-ball-num">
                            <span>{this.props.ball}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

class PreviousBalls extends Component {
    render() {
        return (
            <div id="PreviousBalls">
                <div className="fl-row">
                    <div className="fl">
                        <h4>PREVIOUS BALLS</h4>
                    </div>
                </div>
                {this.props.balls.length > 0 && (
                    <div className="fl-row">
                        { /* shallow copy, so that we get them in reverse order */}
                        { this.props.balls.slice(0).reverse().map((ball, i) => {
                            return(
                                <div key={i} className="fl">
                                    <div className="previous-ball">
                                        <span>{ball}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        ball: state.bingoReducer.lastBall,
        previousBalls: state.bingoReducer.previousBalls
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}

Header.propTypes = {
    ball: PropTypes.number,
    previousBalls: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
