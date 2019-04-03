const sort = require("../index.js");

describe("prop", () => {
    it("named", () => {
        const items = [
            {num: 5},
            {num: 7},
            {num: 2},
            {num: 1},
            {num: 50},
            {num: -10},
        ];
        items.sort(
            sort.prop(".num", sort.number)
        );

        expect(items)
            .toEqual([
                {num: -10},
                {num: 1},
                {num: 2},
                {num: 5},
                {num: 7},
                {num: 50},
            ]);
    });

    it("array", () => {
        const items = [
            ["A", 0],
            ["D", 1],
            ["C", 2],
            ["Q", 3],
            ["L", 4],
            ["O", 5],
        ];
        items.sort(
            sort.prop("[0]", sort.string)
        );

        expect(items)
            .toEqual([
                ["A", 0],
                ["C", 2],
                ["D", 1],
                ["L", 4],
                ["O", 5],
                ["Q", 3],
            ]);
    });

    describe("nested", () => {
        it("named", () => {
            const items = [
                {num: {nest: 5}},
                {num: {nest: 7}},
                {num: {nest: 2}},
                {num: {nest: 1}},
                {num: {nest: 50}},
                {num: {nest: -10}},
            ];
            items.sort(
                sort.prop(".num.nest", sort.number)
            );

            expect(items)
                .toEqual([
                    {num: {nest: -10}},
                    {num: {nest: 1}},
                    {num: {nest: 2}},
                    {num: {nest: 5}},
                    {num: {nest: 7}},
                    {num: {nest: 50}},
                ]);
        });

        it("array", () => {
            const items = [
                [[null, "A"], 0],
                [[null, "D"], 1],
                [[null, "C"], 2],
                [[null, "Q"], 3],
                [[null, "L"], 4],
                [[null, "O"], 5],
            ];
            items.sort(
                sort.prop("[0][1]", sort.string)
            );

            expect(items)
                .toEqual([
                    [[null, "A"], 0],
                    [[null, "C"], 2],
                    [[null, "D"], 1],
                    [[null, "L"], 4],
                    [[null, "O"], 5],
                    [[null, "Q"], 3],
                ]);
        });

        it("mixed", () => {
            const items = [
                {num: [null, 5]},
                {num: [null, 7]},
                {num: [null, 2]},
                {num: [null, 1]},
                {num: [null, 50]},
                {num: [null, -10]},
            ];
            items.sort(
                sort.prop(".num[1]", sort.number)
            );

            expect(items)
                .toEqual([
                    {num: [null, -10]},
                    {num: [null, 1]},
                    {num: [null, 2]},
                    {num: [null, 5]},
                    {num: [null, 7]},
                    {num: [null, 50]},
                ]);
        });
    });
});
