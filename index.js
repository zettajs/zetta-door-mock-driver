var Device = require('zetta-device');
var util = require('util');

var Door = module.exports = function() {
  Device.call(this);
};
util.inherits(Door, Device);

Door.prototype.init = function(config) {
  config
    .name('Door')
    .type('door')
    .state('closed')
    .when('opened', {allow: ['close']})
    .when('closed', {allow: ['open']})
    .map('open', this.open)
    .map('close', this.close);

};

Door.prototype.open = function(cb) {
  this.state = 'opened';
  cb();
}

Door.prototype.close = function(cb) {
  this.state = 'closed'
  cb();
}
