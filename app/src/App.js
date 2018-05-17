import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Main from './Components/Main'

// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import * as actions from './Actions'
// import {withRouter} from 'react-router-dom'


class App extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount = () => {
    }

    render() {
        return (
            <div id="App">
                <Route exact={true} path="/" component={Main}/>
            </div>);
    }
}

export default App;
