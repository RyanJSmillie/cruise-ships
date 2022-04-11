const CruiseShip = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
    let ship;
    let port1;
    let port2;
    let itinerary;

    beforeEach(() => {
        port1 = new Port('Manchester')
        port2 = new Port('Liverpool')
        port3 = new Port('Southampton')
        itinerary = new Itinerary([port1, port2, port3])
        ship = new CruiseShip(itinerary);
    });


describe('constructor', () => {
    it('returns an object', () => {
        expect(new CruiseShip(itinerary)).toBeInstanceOf(Object);
    });
});

describe('ship passengers', () => {
    it('returns ship passengers', () => {
        expect(ship.passengers).toEqual(0);
    });

    it('returns new number of passengers', () => {
        ship.addPassengers(4);

        expect(ship.passengers).toEqual(4);
    });
});

describe('checks setSail', () => {
    it('can set sail', () => {
        const startPort = itinerary.destinations[0];
        ship.setSail();
      
        expect(ship.docked).toBeFalsy();
        expect(ship.previousPort).toBe(startPort);
        expect(port1.ships).not.toContain(ship);
      });
      
    it('sets previous port to current port', () => {
        ship.setSail();

        expect(ship.previousPort).toEqual(port1);
    });

    it('returns if sailing', () => {
        ship.setSail();

        expect(ship.docked).toBeFalsy();
    });

    it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});

describe('ships dock status', () => {
    it('returns ship starting port', () => {
        expect(ship.dockedPort).toEqual(port1);
    });


    it('initial previous port is null', () => {
        expect(ship.previousPort).toEqual(null);
    });

    it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();

        expect(ship.dockedPort).toEqual(port2);
        expect(port2.ships).toContain(ship)
    });

    it('gets added to port on instantiation', () => {
        expect(port1.ships).toContain(ship);
    });
});
});


