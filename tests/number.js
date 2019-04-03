const sort = require("../index.js");
describe("number", () => {
    it("natural", () => {
        const nats = [2, 1, 3, 7, 6, 4, 5];
        nats.sort(sort.number);

        expect(nats)
            .toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it("integer", () => {
        const ints = [2, -1, 3, -7, 6, -4, 5, 0];
        ints.sort(sort.number);

        expect(ints)
            .toEqual([-7, -4, -1, 0, 2, 3, 5, 6]);
    });

    it("decimal", () => {
        const decs = [1.0, 3.14, 2.72, 42.0, -1.0, -0.083];
        decs.sort(sort.number);

        expect(decs)
            .toEqual([-1.0, -0.083, 1.0, 2.72, 3.14, 42.0]);
    });
});
