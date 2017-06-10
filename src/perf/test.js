const TEST_REPEAT = 100000;

function runTests(tests) {
    const results = tests.map(function (test) {
        const start = getTime();
        
        for (let i = 0; i < TEST_REPEAT; i++) {
            test.fn();
        }
        
        const stop = getTime();
        const time = stop - start;
        
        const result = {
            label: test.label,
            time: time
        };
        
        return result;
    });
    
    return results;
}

function getTime() {
    return (new Date()).getTime();
}

export {runTests, getTime};
