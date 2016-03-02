var util = require('util');

var DOOR_CLOSED_IMAGE_URL = 'https://cdn0.iconfinder.com/data/icons/mobile-development-svg-icons/60/closed_door-512.png';
var DOOR_OPENED_IMAGE_URL = 'https://cdn0.iconfinder.com/data/icons/mobile-development-svg-icons/60/open_door-512.png';

module.exports = function(server) {
  var doorSensorQuery = server.where({ type: 'door' });
  server.observe([doorSensorQuery], function(doorSensor){
    doorSensor.style = {};
    // wrap it in a WebSockets monitor
    doorSensor._initMonitor('style');
    doorSensor._monitors.push('style');
    
    // add property to track state image
    doorSensor.style.stateImage = DOOR_CLOSED_IMAGE_URL;
    // change the state image when door changes state
    doorSensor.on('force-mock-close', function(s) {
      doorSensor.style = {stateImage: DOOR_CLOSED_IMAGE_URL};
    });
    doorSensor.on('force-mock-open', function(s) {
      doorSensor.style = {stateImage: DOOR_OPENED_IMAGE_URL};
    });
   }
  );
};
