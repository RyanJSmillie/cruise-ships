const {Port} = require('../src/cruise-ship');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});

describe('has name', () => {
    it('checks object has a name', () => {

        const port = new Port('Manchester');

        expect(port.name).toEqual('Manchester');
    });
});