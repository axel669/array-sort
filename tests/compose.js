const sort = require("../index.js");

describe("compose", () => {
    it("map + number/prop + number", () => {
        const items = [
            {a: 0},
            {a: 4},
            {a: 2},
            {a: 3},
            {a: 1},
        ];
        items.sort(
            sort.compose(
                sort.map(
                    item => item.a % 3,
                    sort.number
                ),
                sort.prop(
                    ".a",
                    sort.number
                )
            )
        );

        expect(items)
            .toEqual([
                {a: 0},
                {a: 3},
                {a: 1},
                {a: 4},
                {a: 2},
            ]);
    });

    it("prop + reverse + number/prop + reverse + string", () => {
        const items = [
            {type: "A", index: 1},
            {type: "A", index: 2},
            {type: "B", index: 1},
            {type: "B", index: 3},
            {type: "B", index: 10},
            {type: "C", index: 9},
        ];
        items.sort(
            sort.compose(
                sort.reverse(
                    sort.prop(".index", sort.number)
                ),
                sort.reverse(
                    sort.prop(".type", sort.string)
                )
            )
        );

        expect(items)
            .toEqual([
                {type: "B", index: 10},
                {type: "C", index: 9},
                {type: "B", index: 3},
                {type: "A", index: 2},
                {type: "B", index: 1},
                {type: "A", index: 1},
            ])
    });
});
