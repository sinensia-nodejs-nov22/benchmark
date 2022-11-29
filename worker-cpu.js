// worker-cpu.js
function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}

module.exports = async () => {
    fibonacci(20);
};
