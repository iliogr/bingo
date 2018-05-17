import * as actionType from './ActionType';
import axios from 'axios';
import socketio from 'socket.io-client';

const BACKEND_ADDRESS = 'http://localhost:8888';
const socket = socketio(BACKEND_ADDRESS);
const api = axios.create({
    baseURL: BACKEND_ADDRESS,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

socket.on('LastBall', (number) => {
    lastBall(number)
});


const lastBall = (number) => {
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
        error: error
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
