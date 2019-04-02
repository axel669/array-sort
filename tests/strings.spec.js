const {performance} = require("perf_hooks");

const color = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: "\x1b[0m"
};
const cline = (textColor, message) =>
    `${color[textColor]}${message}${color.reset}`;
for (const name of Object.keys(color)) {
    console.log[name] = (msg, ...args) =>
        console.log(cline(name, msg), ...args);
}
const write = Object.keys(color).reduce(
    (w, color) => {
        w[color] = msg =>
            process.stdout.write(cline(color, msg));
        return w;
    },
    {}
);

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter({
    jasmineStarted() {
        this.tab = "";
        this.failedSpecs = [];
        this.suiteChain = [];
        this.count = {pass: 0, fail: 0};
        this.start = performance.now();
        console.log("Starting tests");
    },
    suiteStarted(suite) {
        console.log.cyan(`${this.tab}${suite.description}`);
        this.tab = `${this.tab}  `;
        this.suiteChain.push(suite.description);
    },
    specDone(spec) {
        if (spec.failedExpectations.length === 0) {
            this.count.pass += 1;
            console.log.green(`${this.tab}✓ ${spec.description}`);
        }
        else {
            this.count.fail += 1;
            console.log.red(`${this.tab}✘ ${spec.description}`);
            for (const {message} of spec.failedExpectations) {
                console.log.red(`${this.tab}  - ${message}`);
            }
        }
    },
    suiteDone(suite) {
        this.tab = this.tab.slice(2);
        this.suiteChain.pop();
    },
    jasmineDone(results) {
        const time = performance.now() - this.start;
        console.log("");
        console.log.green(`${this.count.pass} passed`);
        console.log.red(`${this.count.fail} failed`);

        const passRate = (
            (this.count.pass * 100)
            / (this.count.pass + this.count.fail)
        );
        console.log(`pass rate: ${passRate.toFixed(2)}%`);
        console.log(`Finished in ${time.toFixed(4)}ms`);
    }
});

describe("string", () => {
    it("letters", () => {
        expect(true).toBe(true);
    });
    describe("subclass", () => {
        it("failure", () => {
            expect(false).toBe(true);
        });
    });
});
