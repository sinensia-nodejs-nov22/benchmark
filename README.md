# Worker threads benchmark

Based on [Dhwaneet Bhatt's "Benchmarking Node.js Worker Threads"](https://dhwaneetbhatt.com/blog/benchmarking-nodejs-worker-threads).

Usage:

```shell
# Install dependencies
yarn install
# Benchmark CPU-bound workers (default)
node index cpu
# Benchmark I/O-bound workers
node index io
# Benchmark mixed CPU+I/O-bound workers
node index mixed
```
