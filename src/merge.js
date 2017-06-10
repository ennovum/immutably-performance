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
        label: 'immutably / merge',
        fn: function () {
            immutably.merge(input, ['foo', 'bar'], {baz: true});
        }
    },
    {
        label: 'Immutable.js / fromJS + mergeIn + toJS',
        fn: function () {
            const iOutput = iInput.updateIn(['foo', 'bar'], (value) => value.mergeDeep({baz: false}));
            iOutput.toJS();
        }
    },
    {
        label: 'seamless-immutable / construct + mergeIn + asMutable',
        fn: function () {
            const siOutput = SeamlessImmutable.updateIn(siInput, ['foo', 'bar'], (value) => SeamlessImmutable.merge(value, {baz: false}));
            SeamlessImmutable.asMutable(siOutput);
        }
    }
];

const results = runTests(tests);
const printed = printResults(results);
global.console.log(printed);
