function assertEquals(expect, actual) {
    // throw an error if types differ
    if (typeof expect !== typeof actual) {
        throw new Error(`expected ${typeof expect} but found ${typeof actual}`)
    }

    // handle primitive types
    if (typeof expect !== 'object') {
        if (expect !== actual) {
            throw new Error(`expected ${expect} but found ${actual}`)
        }
        return true;
    }

    // handle arrays
    if (Array.isArray(expect)) {
        if (expect.length !== actual.length) {
            throw new Error(`expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
        }
        // compare elements
        for (let i = 0; i < expect.length; i++) {
            if (!assertEquals(expect[i], actual[i])) {
                throw new Error(`expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
            }
        }
        return true;
    }

    // handle objects
    const expectKeys = Object.keys(expect);
    const actualKeys = Object.keys(actual);

    if (expectKeys.length !== actualKeys.length) {
        throw new Error(`expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
    }

    for (const key of expectKeys) {
        if (!actual.hasOwnProperty(key) || !assertEquals(expect[key], actual[key]))
            throw new Error(`expected ${JSON.stringify(expect)} but found ${JSON.stringify(actual)}`)
    }

    return true;
}

module.exports = assertEquals