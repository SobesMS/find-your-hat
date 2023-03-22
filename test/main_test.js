const assert = require('assert');

describe('.pop', () => {
    it('returns the last element in an array', () => {
        const knightString = 'knight';
        const jediPath = ['padawan', knightString];

        const popped = jediPath.pop();

        assert.ok(popped === knightString);
    });
});