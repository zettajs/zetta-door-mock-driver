var Device = require('zetta-device');
var util = require('util');

var Door = module.exports = function() {
  Device.call(this);
};
util.inherits(Door, Device);

Door.prototype.init = function(config) {
  config
    .name('Door')
    .state('closed')
    .type('door')
    .when('opened', {allow: ['force-mock-close']})
    .when('closed', {allow: ['force-mock-open']})
    .map('force-mock-open', this.forceMockOpen)
    .map('force-mock-close', this.forceMockClose);
    
  var self = this;
  setInterval(function() {
    self.state == 'closed' ? self.call('force-mock-open') : self.call('force-mock-close');
  }, 5000);
};

Door.prototype.forceMockOpen = function (cb) {
  this.state = 'opened';
  cb();
}

Door.prototype.forceMockClose = function (cb) {
  this.state = 'closed';
  cb();
}