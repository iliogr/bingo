import React, {Component} from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

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

Ticket.propTypes = {
    verify: PropTypes.func,
    id: PropTypes.string,
    numbers: PropTypes.array
};

export default Ticket;
