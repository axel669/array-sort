const sort = require("../index.js");
describe("natural", () => {
    it("letters", () => {
        const letters = ['t', 'c', 'g', 'a'];
        letters.sort(sort.natural);

        expect(letters)
            .toEqual(['a', 'c', 'g', 't']);
    });

    it("words", () => {
        const words = ["correct", "horse", "battery", "staple"];
        words.sort(sort.natural);

        expect(words)
            .toEqual(["battery", "correct", "horse", "staple"]);
    });

    it("natural", () => {
        const items = ['item1', 'item2', 'item3', 'item10'];
        items.sort(sort.natural);

        expect(items)
            .toEqual(['item1', 'item2', 'item3', 'item10']);
    });
});
