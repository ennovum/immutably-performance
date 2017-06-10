import global from 'global';
import immutably from 'immutably';
import Immutable from 'immutable';
import SeamlessImmutable from 'seamless-immutable';

import {runTests} from './perf/test';
import {printResults} from './perf/print';

const input = {foo: {bar: {baz: false}}};
const iInput = Immutable.fromJS(input);
const siInput = SeamlessImmutable(input);

const tests = [
    {
        label: 'immutably / set',
        fn: function () {
            immutably.set(input, ['foo', 'bar', 'baz'], true);
        }
    },
    {
        label: 'Immutable.js / fromJS + setIn + toJS',
        fn: function () {
            const iOutput = iInput.setIn(['foo', 'bar', 'baz'], true);
            iOutput.toJS();
        }
    },
    {
        label: 'seamless-immutable / construct + setIn + asMutable',
        fn: function () {
            const siOutput = SeamlessImmutable.setIn(siInput, ['foo', 'bar', 'baz'], true);
            SeamlessImmutable.asMutable(siOutput);
        }
    }
];

const results = runTests(tests);
const printed = printResults(results);
global.console.log(printed);
