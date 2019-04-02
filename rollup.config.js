import tea from "@axel669/teascript/rollup";

export default {
    input: "./src/sorts.tea",
    output: [
        {
            file: "index.js",
            format: "cjs"
        },
        {
            file: "standalone/array-sort.js",
            format: "iife",
            name: "arraySort"
        },
        {
            file: "es6/index.js",
            format: "es"
        }
    ],
    plugins: [
        tea({
            include: "**/src/*.tea"
        })
    ]
};
