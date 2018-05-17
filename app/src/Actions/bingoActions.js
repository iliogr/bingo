import * as actionType from './ActionType';
import axios from 'axios';


const BACKEND_ADDRESS = 'http://localhost:8888';
const api = axios.create({
    baseURL: BACKEND_ADDRESS,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});




export const lastBall = (number) => {
    return {
        type: actionType.LAST_BALL,
        lastBall: number
    }
}

const requestTickets = () => {
    return {
        type: actionType.REQUEST_TICKETS
    }
}

const ticketsSuccess = (tickets) => {
    return {
        type: actionType.TICKETS_SUCCESS,
        tickets: tickets
    }
}

const ticketsError = (error) => {
    return {
        type: actionType.TICKETS_SUCCESS,
        message: error
    }
}


const requestVerification = () => {
    return {
        type: actionType.REQUEST_VERIFICATION
    }
}

const verificationSuccess = (status) => {
    return {
        type: actionType.VERIFICATION_SUCCESS,
        status: status
    }
}

const verificationError = (message) => {
    return {
        type: actionType.VERIFICATION_ERROR,
        message: message
    }
}

const verificationFailed = (data) => {
    return {
        type: actionType.VERIFICATION_FAILED,
        message: data.message
    }
}



export const getTickets = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(requestTickets())
            api.get('/tickets')
            .then((response) => {
                resolve(dispatch(ticketsSuccess(response.data.tickets)))
            })
            .catch((error) => {
                reject(dispatch(ticketsError(error)))
            });
        })
    }
}

export const verifyTicket = (id, numbers) => {
    return (dispatch) => {
        dispatch(requestVerification())
        for(let number of numbers){
            if(number.status === false){
                return dispatch(verificationFailed({message: "I am sorry, you don't have the winning ticket", status: false}))
            }
        }
        return new Promise((resolve, reject) => {
            api.post(`/verify/${id}`, {numbers: numbers})
            .then((response) => {
                if(response.data.status){
                    resolve(dispatch(verificationSuccess(response.data)))
                }
                else{
                    resolve(dispatch(verificationFailed(response.data)))
                }

            })
            .catch((error) => {
                reject(dispatch(verificationError(error)))
            });
        })
    }
}
