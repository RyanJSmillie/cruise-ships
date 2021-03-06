(function exportController () {

function Controller (ship) {
    this.ship = ship
    this.initialiseSea();

    document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
      });
};

Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = [
        '../images/water0.png',
        '../images/water1.png',
    ];
    let backgroundIndex = 0;
    window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
    }, 1000);
};

Controller.prototype.renderPorts = function renderPorts(ports){
    const portsElement = document.querySelector('#ports');
    portsElement.style.width = '0px';
    portsElement.innerHTML = '';
    ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.textContent = port.name

        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;

        portsElement.appendChild(newPortElement);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      })
};

Controller.prototype.renderShip = function() {
    const ship = this.ship
    
    const shipPortIndex = ship.itinerary.ports.indexOf(ship.dockedPort);
    const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
   
    const shipElement = document.querySelector('#ship');

    if(portElement) {
    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    }
};

Controller.prototype.setSail = function() {
    const ship = this.ship
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.dockedPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
    if (!nextPortElement) {
       return this.renderMessage('End of the line!');
    }
    this.renderMessage(`Now departing ${ship.dockedPort.name}`);

    const shipElement = document.querySelector('#ship');
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === (nextPortElement.offsetLeft - 32)) {
        ship.setSail();
        ship.dock();
        this.renderMessage(`We have arrived in ${ship.dockedPort.name}`);
        clearInterval(sailInterval);
      }
      shipElement.style.left = `${shipLeft + 1}px`;
      const viewport = document.querySelector('#viewport');
      viewport.scrollTo({
        top: 0,
        left: shipLeft - 32,
        behavior: 'auto'
      });
    }, 20);

    if ([currentPortIndex + 3] > ship.itinerary.ports.length) {
      const HUDElement = document.querySelector('#HUD');
      HUDElement.innerHTML = (`Current Port: ${ship.itinerary.ports[currentPortIndex + 1].name} </p> Next Port: End of the line!`)
    } else {
    const HUDElement = document.querySelector('#HUD');
    HUDElement.innerHTML = (`Current Port: ${ship.itinerary.ports[currentPortIndex + 1].name} </p> Next Port: ${ship.itinerary.ports[currentPortIndex + 2].name}`)
    }
  };

Controller.prototype.renderMessage = function (message) {
    const messageElement = document.querySelector('#messagebox')
    messageElement.innerHTML = message;

    // const viewport = document.querySelector('#messagebox');
    // viewport.appendChild(messageElement);

    // setTimeout(() => {
    //     viewport.removeChild(messageElement);
    //   }, 2000);
}

Controller.prototype.HUD = function (message) {
    const ship = this.ship;
    const HUDElement = document.createElement('div');
    HUDElement.id = 'HUD';
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.dockedPort);
    const nextPortIndex = currentPortIndex + 1;

    if (this.ship.itinerary.ports.length === 1) {
      message = (`Current Port: ${ship.itinerary.ports[currentPortIndex].name} </p> Next Port: - `)
      HUDElement.innerHTML = message
    } else {
      message = (`Current Port: ${ship.itinerary.ports[currentPortIndex].name} </p> Next Port: ${ship.itinerary.ports[currentPortIndex + 1].name}`)
      HUDElement.innerHTML = message
    }

    const HUD = document.querySelector('#HUD');
    HUD.appendChild(HUDElement);

};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  };

}());