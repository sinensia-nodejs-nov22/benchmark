// worker-io.js
const axios = require('axios');

module.exports = () => {
    return axios.get('https://httpbin.org/get');
};
