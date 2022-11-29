// worker-mixed.js
const axios = require('axios');

function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}

module.exports = () => {
    fibonacci(20);
    return axios.get('https://httpbin.org/get');
};
