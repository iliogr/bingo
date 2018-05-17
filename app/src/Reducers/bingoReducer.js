import * as actionType from '../Actions/ActionType';

const bingoReducer = (state = {
    isFetching: false,
    lastBall: null,
    message: '',
    previousBalls: [],
    gameStatus: 'Ongoing'
}, action) => {
    switch (action.type) {

        case actionType.REQUEST_TICKETS:
            return { ...state,
                isFetching: true
            }
        case actionType.TICKETS_SUCCESS:
            return { ...state,
                isFetching: false,
                tickets: action.tickets
            }
        case actionType.TICKETS_ERROR:
            return { ...state,
                isFetching: false,
                error: action.error
            }
        case actionType.LAST_BALL:
            let newState = {...state};
            let newTickets = [...newState.tickets];
            for(let ticket of newTickets){
                for(let x of ticket.numbers){
                    if(action.lastBall === x.number){
                        x.status = true;
                    }
                }
            }
            newState.tickets = newTickets;
            if(state.lastBall){
                newState.previousBalls.push(state.lastBall);
            }
            newState.lastBall = action.lastBall;
            if(newState.previousBalls.length > 5){
                newState.previousBalls.shift()
            }
            return newState;
        case actionType.REQUEST_VERIFICATION:
            return { ...state,
                isFetching: true
            }
        case actionType.VERIFICATION_FAILED:
            return { ...state,
                isFetching: false,
                message: action.message
            }
        case actionType.VERIFICATION_SUCCESS:
            return { ...state,
                isFetching: false,
                message: action.message,
                gameStatus: 'Finished'
            }
        case actionType.VERIFICATION_ERROR:
            return { ...state,
                isFetching: false,
                message: action.message
            }
        default:
            return state
    }
}
export default bingoReducer;
