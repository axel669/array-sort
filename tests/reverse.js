const sort = require("../index.js");
describe("reverse", () => {
    describe("number", () => {
        it("natural", () => {
            const nats = [2, 1, 3, 7, 6, 4, 5];
            nats.sort(
                sort.reverse(sort.number)
            );

            expect(nats)
                .toEqual([1, 2, 3, 4, 5, 6, 7].reverse());
        });

        it("integer", () => {
            const ints = [2, -1, 3, -7, 6, -4, 5, 0];
            ints.sort(
                sort.reverse(sort.number)
            );

            expect(ints)
                .toEqual([-7, -4, -1, 0, 2, 3, 5, 6].reverse());
        });

        it("decimal", () => {
            const decs = [1.0, 3.14, 2.72, 42.0, -1.0, -0.083];
            decs.sort(
                sort.reverse(sort.number)
            );

            expect(decs)
                .toEqual([-1.0, -0.083, 1.0, 2.72, 3.14, 42.0].reverse());
        });
    });

    describe("string", () => {
        it("letters", () => {
            const letters = ['t', 'c', 'g', 'a'];
            letters.sort(
                sort.reverse(sort.string)
            );

            expect(letters)
                .toEqual(['a', 'c', 'g', 't'].reverse());
        });

        it("words", () => {
            const words = ["correct", "horse", "battery", "staple"];
            words.sort(
                sort.reverse(sort.string)
            );

            expect(words)
                .toEqual(["battery", "correct", "horse", "staple"].reverse());
        });

        it("natural", () => {
            const items = ['item1', 'item2', 'item3', 'item10'];
            items.sort(
                sort.reverse(sort.string)
            );

            expect(items)
                .toEqual(['item1', 'item10', 'item2', 'item3'].reverse());
        });
    });

    describe("natural", () => {
        it("letters", () => {
            const letters = ['t', 'c', 'g', 'a'];
            letters.sort(
                sort.reverse(sort.natural)
            );

            expect(letters)
                .toEqual(['a', 'c', 'g', 't'].reverse());
        });

        it("words", () => {
            const words = ["correct", "horse", "battery", "staple"];
            words.sort(
                sort.reverse(sort.natural)
            );

            expect(words)
                .toEqual(["battery", "correct", "horse", "staple"].reverse());
        });

        it("natural", () => {
            const items = ['item1', 'item2', 'item3', 'item10'];
            items.sort(
                sort.reverse(sort.natural)
            );

            expect(items)
                .toEqual(['item1', 'item2', 'item3', 'item10'].reverse());
        });
    });
});
