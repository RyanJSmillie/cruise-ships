const {CruiseShip, Port} = require('../src/cruise-ship');

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

describe('ship starting port', () => {
    it('returns ship starting port', () => {

        const port = new Port('Manchester')
        const ship = new CruiseShip(port);

        expect(ship.dockedPort).toEqual(port);
    });

    it('can dock at a different port', () => {

        const dover = new Port('dover')
        const ship = new CruiseShip(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.dockedPort).toEqual(calais);
    });

});

describe('additional passengers boarding', () => {
    it('returns new number of passengers', () => {

        const ship = new CruiseShip('Manchester');
        ship.addPassengers(4);

        expect(ship.passengers).toEqual(4);
    });
});

describe('checks if sailing', () => {
    it('returns if sailing', () => {

        const ship = new CruiseShip('Manchester');
        ship.setSail();

        expect(ship.dockedPort).toBeFalsy();
    });
});

