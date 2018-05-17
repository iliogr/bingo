import React, {Component} from 'react';

class Header extends Component {


    render() {
        return (
            <div id="Header">
                <div className="fl-row">
                    <div className="fl-30">
                        <LastBall />
                    </div>
                    <div className="fl-70">
                        <PreviousBalls />
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
                    <div className="current-ball-num">
                        <span>77</span>
                    </div>
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
                <div className="fl-row">
                    <div className="fl">
                        <div className="previous-ball">
                            <span>05</span>
                        </div>
                    </div>
                    <div className="fl">
                        <div className="previous-ball">
                            <span>05</span>
                        </div>
                    </div>
                    <div className="fl">
                        <div className="previous-ball">
                            <span>05</span>
                        </div>
                    </div>
                    <div className="fl">
                        <div className="previous-ball">
                            <span>05</span>
                        </div>
                    </div>
                    <div className="fl">
                        <div className="previous-ball">
                            <span>05</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Header;
