import axios from 'axios';
import config from '../config';

let interval = 2000;
(() => {
    let timeout = setInterval(() => {
        axios.get(`${config.serverAddress}:${config.serverPort}/draw`)
        .then((response) => {
            console.log(response.data);
        })
    }, interval);
})();
