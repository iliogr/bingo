import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Success extends Component {
    render() {
        if (this.props.gameStatus !== 'Finished') {
            return <Redirect to='/' />;
        }
        return (
            <div id="Success">
                <h1>Congratulations! You won!</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.bingoReducer.gameStatus
    };
}

Success.propTypes = {
    gameStatus: PropTypes.string
};

export default connect(mapStateToProps)(Success);
