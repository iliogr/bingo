import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Main from './Components/Main'
import Success from './Components/Success'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <div id="App">
                <Route exact={true} path="/" component={Main}/>
                <Route exact={true} path="/success" component={Success}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        gameStatus: state.bingoReducer.gameStatus
    };
}

export default connect(mapStateToProps)(App);
