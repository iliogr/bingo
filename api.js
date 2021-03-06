"use strict";
import uuid from 'uuid/v4';

let drawnNumbers = [];

let draw = (req, res, next) => {
    let randomNumber = null;
    while( drawnNumbers.includes(randomNumber) === true || randomNumber === null){
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
    drawnNumbers.push(randomNumber);
    if(drawnNumbers.length <= 100){
        req.io.emit("LastBall", randomNumber)
        res.send({"ball": randomNumber, "drawn": drawnNumbers});
    }
    else{
        res.send({"message": "All numbers have been drawn"});
    }

}

let verify = (req, res) => {
    for(let ticketNumber of req.body.numbers){
        if(drawnNumbers.includes(ticketNumber.number) === false){
            res.send({message: "I am sorry, you don't have the winning ticket", status: false})
            return;
        }
    }
    res.send({message: "Congratulations! Your ticket is a winner.", status: true})
}


let createTickets = (req, res) => {
    let tickets = [];
    tickets.push(new Ticket())
    tickets.push(new Ticket())
    tickets.push(new Ticket())
    tickets.push(new Ticket())
    res.send({tickets: tickets})
}


class Ticket {
    constructor() {
        this.id = uuid();
        this.numbers = this.ticketNumbers();
    }

    ticketNumbers = () => {

        let chosenNumbers = [];
        let randomNumber = null;
        let test = [];

        while(chosenNumbers.length < 25){
            let selectedNumber = Math.floor(Math.random() * 100) + 1;
            if(chosenNumbers.map(function(e) { return e.number; }).indexOf(selectedNumber) === -1){
                chosenNumbers.push({number: selectedNumber, status: false});
            }
        }
        return chosenNumbers;
    }
}

module.exports = {
    draw: draw,
    verify: verify,
    createTickets: createTickets,
    TicketClass: Ticket
}
