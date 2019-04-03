const sort = require("../index.js");
describe("string", () => {
    it("letters", () => {
        const letters = ['t', 'c', 'g', 'a'];
        letters.sort(sort.string);

        expect(letters)
            .toEqual(['a', 'c', 'g', 't']);
    });

    it("words", () => {
        const words = ["correct", "horse", "battery", "staple"];
        words.sort(sort.string);

        expect(words)
            .toEqual(["battery", "correct", "horse", "staple"]);
    });

    it("natural", () => {
        const items = ['item1', 'item2', 'item3', 'item10'];
        items.sort(sort.string);

        expect(items)
            .toEqual(['item1', 'item10', 'item2', 'item3']);
    });

    // describe("reverse", () => {
    //     it("letters", () => {
    //         const letters = ['t', 'c', 'g', 'a'];
    //         letters.sort(
    //             sort.reverse(sort.string)
    //         );
    //
    //         expect(letters)
    //             .toEqual(['a', 'c', 'g', 't'].reverse());
    //     });
    //
    //     it("words", () => {
    //         const words = ["correct", "horse", "battery", "staple"];
    //         words.sort(
    //             sort.reverse(sort.string)
    //         );
    //
    //         expect(words)
    //         .toEqual(["battery", "correct", "horse", "staple"].reverse());
    //     });
    // });
});
