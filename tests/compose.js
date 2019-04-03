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
});
