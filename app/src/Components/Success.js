import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

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
export default Success;
