import * as actionType from '../Actions/ActionType';

const bingoReducer = (state = {
    isFetching: false,
    lastBall: 0
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
        default:
            return state
    }
}
export default bingoReducer;
