const CruiseShip = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => {
    it('returns an object', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(new CruiseShip(itinerary)).toBeInstanceOf(Object);
    });
});

describe('ship passengers', () => {
    it('returns ship passengers', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(ship.passengers).toEqual(0);
    });

    it('returns new number of passengers', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.addPassengers(4);

        expect(ship.passengers).toEqual(4);
    });
});

describe('checks setSail', () => {
    it('can set sail', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        const port = itinerary.destinations[0];
        ship.setSail();
      
        expect(ship.docked).toBeFalsy();
        expect(ship.previousPort).toBe(port);
      });
      
    it('sets previous port to current port', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.setSail();

        expect(ship.previousPort).toEqual('Manchester');
    });

    it('returns if sailing', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.setSail();

        expect(ship.docked).toBeFalsy();
    });

    it('can\'t sail further than its itinerary', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool'])
        const ship = new CruiseShip(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});

describe('ships dock status', () => {
    it('returns ship starting port', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(ship.dockedPort).toEqual('Manchester');
    });


    it('initial previous port is null', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(ship.previousPort).toEqual(null);
    });

    it('can dock at a different port', () => {
        const manchester = new Port('Manchester')
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.setSail();
        ship.dock();

        expect(ship.dockedPort).toEqual('Liverpool');
    });

    it('gets added to port on instantiation', () => {
        const ports = new Port('Manchester', 'Liverpool', 'Southampton')
        const itinerary = new Itinerary([ports])
        const ship = new CruiseShip(itinerary);

        expect(ports.ships).toContain(ship);
    });
});



