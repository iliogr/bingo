import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Main from './Components/Main'
import Success from './Components/Success'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {
    render() {
        return (
            <div id="App">
                <Route exact={true} path="/" component={Main}/>
                <Route path="/success" component={Success}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.bingoReducer.gameStatus
    };
}

export default withRouter(connect(mapStateToProps)(App));
