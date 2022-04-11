const CruiseShip = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

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

describe('Port Ships', () => {
    it('checks port can addShip', () => {

        const port = new Port('Manchester');
        const ship = {};
        port.addShip(ship)

        expect(port.ships).toContain(ship);
    });

    it('checks port can add multiple ships', () => {

        const port = new Port('Manchester');
        const titanic = {}
        const queenMary = {}

        port.addShip(titanic);
        port.addShip(queenMary);

        expect(port.ships).toEqual([titanic, queenMary]);
    });

    it('checks port can removeShip', () => {

        const port = new Port('Manchester');
        const titanic = {}
        const queenMary = {}

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});