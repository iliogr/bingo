var expect  = require('chai').expect;
var assert = require('chai').assert
var axios = require('axios');
var TicketClass = require('../api').TicketClass;

describe('API calls', () => {
    it('GET /draw', (done) => {
        axios.get('http://localhost:8888/draw')
        .then((response) => {
            expect(response.data).to.be.an('object');
            expect(response.data).to.have.all.keys(['ball', 'drawn']);
            expect(response.data).to.have.property('drawn').to.be.instanceof(Array);
            done();
        })
    })

    it('GET /tickets', (done) => {
        axios.get('http://localhost:8888/tickets')
        .then((response) => {
            expect(response.data).to.be.an('object');
            expect(response.data).to.include.keys('tickets');
            done();
        })
    })

    it('POST /verify/:id', (done) => {
        let id = 1;
        let numbers = [5, 10, 15, 25, 30];
        axios.post(`http://localhost:8888/verify/${id}`, {
            numbers: numbers
        })
        .then(function (response) {
            expect(response.data).to.be.an('object');
            expect(response.data).to.have.all.keys(['message', 'status']);
            done();
        })
    })
})

describe('Create Tickets Class', () => {
    it('Creating a Ticket', (done) => {
        let ticketInstance = new TicketClass();
        expect(ticketInstance).to.be.an('object');
        expect(ticketInstance).to.have.property('numbers').with.lengthOf(25);
        done();
    })
})
