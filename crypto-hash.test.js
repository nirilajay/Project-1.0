const cryptoHash = require('./crypto-hash');

describe('cryptoHash', () => {
   it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('nrl'))
        .toEqual('90b62dcc6a7dcbeca44a43ca5b027c4fb480379617b81fd682bcfe938d8c136d');
    });

    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
        .toEqual(cryptoHash('three', 'one', 'two'));
    });
});