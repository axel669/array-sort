const sort = require("../index.js");

describe("map", () => {
    it("number", () => {
        const items = [
            {a: 0},
            {a: 4},
            {a: 2},
            {a: 3},
            {a: 1},
        ];
        items.sort(
            sort.map(
                item => item.a,
                sort.number
            )
        );

        expect(items)
            .toEqual([
                {a: 0},
                {a: 1},
                {a: 2},
                {a: 3},
                {a: 4},
            ]);
    });

    it("string", () => {
        const items = [
            {word: "correct"},
            {word: "horse"},
            {word: "battery"},
            {word: "staple"},
        ];
        items.sort(
            sort.map(
                item => item.word,
                sort.string
            )
        );

        expect(items)
            .toEqual([
                {word: "battery"},
                {word: "correct"},
                {word: "horse"},
                {word: "staple"},
            ]);
    });

    it("calculated", () => {
        const items = [
            {a: 0},
            {a: 4},
            {a: 2},
            {a: 3},
            {a: 1},
        ];
        items.sort(
            sort.map(
                item => item.a % 3,
                sort.number
            )
        );

        expect(items)
            .toEqual([
                {a: 0},
                {a: 3},
                {a: 4},
                {a: 1},
                {a: 2},
            ]);
    });
});
