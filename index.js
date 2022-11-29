const mod = process.argv[2] || 'cpu';
console.log(`benchmark ${mod}-bound worker`);
const path = require("path"),
    Benchmark = require("benchmark"),
    suite = new Benchmark.Suite(),
    Piscina = require("piscina"),
    pool = new Piscina({
        idleTimeout: 5000,
        filename: path.resolve(__dirname, `./worker-${mod}.js`),
    }),
    method = require(`./worker-${mod}`);

const parallelism = parseInt(process.env.P);

suite
    .add("single thread", {
        defer: true,
        fn: async function (deferred) {
            const promises = [];
            for (let i = 0; i < parallelism; i++) {
                promises.push(method());
            }
            await Promise.all(promises);
            deferred.resolve();
        },
    })
    .add("worker threads", {
        defer: true,
        fn: async function (deferred) {
            const promises = [];
            for (let i = 0; i < parallelism; i++) {
                promises.push(pool.run());
            }
            await Promise.all(promises);
            deferred.resolve();
        },
    })
    .on("cycle", function (event) {
        console.log(String(event.target));
    })
    .on("complete", function () {
        console.log("Done");
    })
    .run();
