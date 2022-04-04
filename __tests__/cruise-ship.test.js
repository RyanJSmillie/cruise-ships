const CruiseShip = require('../src/cruise-ship');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new CruiseShip()).toBeInstanceOf(Object);
    });
});

describe('ship passengers', () => {
    it('returns ship passengers', () => {

        const ship = new CruiseShip();

        expect(ship.passengers).toEqual(0);
    });
});

describe('ship start port', () => {
    it('returns ship start port', () => {

        const ship = new CruiseShip('Manchester');

        expect(ship.startPort).toEqual('Manchester');
    });
});

describe('additional passengers boarding', () => {
    it('returns new number of passengers', () => {

        const ship = new CruiseShip('Manchester');
        ship.addPassengers(4);

        expect(ship.passengers).toEqual(4);
    });
});