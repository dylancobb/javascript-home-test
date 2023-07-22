function assertEquals(expect, actual) {
    // throw an error if arguments missing
    if (arguments.length !== 2) {
        throw new Error('Missing argument');
    };

    // throw an error if types differ
    if (typeof expect !== typeof actual) {
        throw new Error(`Expected ${typeof expect} but found ${typeof actual}`)
    }

    // handle primitive types
    if (typeof expect !== 'object') {
        if (expect !== actual) {
            throw new Error(`Expected ${expect} but found ${actual}`)
        }
        return true;
    }

    // special case of both arguments being null
    if (expect === null && actual === null) {
        return true;
    }

    // handle arrays
    if (Array.isArray(expect)) {
        if (expect.length !== actual.length) {
            throw new Error(`Expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
        }
        // compare elements
        for (let i = 0; i < expect.length; i++) {
            if (!assertEquals(expect[i], actual[i])) {
                throw new Error(`Expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
            }
        }
        return true;
    }

    // handle objects
    const expectKeys = Object.keys(expect);
    const actualKeys = Object.keys(actual);

    // throw an error if number of properties differs
    if (expectKeys.length !== actualKeys.length) {
        throw new Error(`Expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
    }

    // throw an error if property names or values differ
    for (const key of expectKeys) {
        if (!actual.hasOwnProperty(key) || !assertEquals(expect[key], actual[key]))
            throw new Error(`Expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
    }

    return true;
}

module.exports = assertEquals