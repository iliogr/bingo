import React, {Component} from 'react';
import CancelIcon from '../Assets/images/cancel.svg';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'
import PropTypes from 'prop-types';

class Banner extends Component {

    cancel = () => {
        this.props.removeMessage();
    }
    
    render() {
        return (
            <div id="Banner">
                <h1>{this.props.message}</h1>
                <a onClick={this.cancel}><img className="cancel-button" src={CancelIcon} alt="cancel button" /></a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actions,
    }, dispatch);
}




Banner.propTypes = {
    removeMessage: PropTypes.func,
    message: PropTypes.string
};

export default connect(null, mapDispatchToProps)(Banner);
