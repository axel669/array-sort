var sorts = {
    string: (a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    },
    number: (a, b) => a - b,
    reverse: (sortFunc) => (a, b) => -sortFunc(a, b),
    map: (mapFunc, sortFunc) => (a, b) => sortFunc(mapFunc(a), mapFunc(b)),
    prop: (propName, sortFunc) => {
        const propFunc = new Function("source", `return source${propName}`);
        return (a, b) => sortFunc(propFunc(a), propFunc(b));
    },
    compose: (...sortFuncs) => (a, b) => {
        for (const sortFunc of sortFuncs) {
            const compared = sortFunc(a, b);
            if (compared !== 0) {
                return compared;
            }
        }
        return 0;
    },
    natural: new Intl.Collator(undefined, {
        numeric: true
    }).compare
};

export default sorts;
